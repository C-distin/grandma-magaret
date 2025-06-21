"use client"
import { useState, useEffect, useCallback } from "react";
import { ExternalLink, FileText, Image, Layout, Save, Loader2, Trash2, Edit3, PlusCircle, RefreshCw } from "lucide-react";
// import { motion } from "motion/react"; // motion/react might not be the right import for framer-motion like animations
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// Zod schema for form validation, consistent with API
const postSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }).max(256, { message: "Title must be 256 characters or less" }),
  content: z.string().min(1, { message: "Content is required" }),
});

type PostFormInputs = z.infer<typeof postSchema>;
type PostStatus = "draft" | "published";

export default function DashboardPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [formMessage, setFormMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<PostFormInputs>({
    resolver: zodResolver(postSchema),
  });

  const handleCreatePost: SubmitHandler<PostFormInputs> = async (data, status: PostStatus) => {
    setIsLoading(true);
    setFormMessage(null);

    try {
      const response = await fetch('/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...data, status }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `Failed to ${status === 'draft' ? 'save draft' : 'publish story'}`);
      }

      const newPost = await response.json();
      setFormMessage({ type: 'success', text: `Story "${newPost.title}" ${status === 'draft' ? 'saved as draft' : 'published'} successfully!` });
      reset(); // Reset form fields
      // TODO: Potentially refresh the list of posts if displayed on this page
    } catch (error: any) {
      setFormMessage({ type: 'error', text: error.message || 'An unexpected error occurred.' });
    } finally {
      setIsLoading(false);
    }
  };

  // It seems the motion component from "motion/react" doesn't exist or is not correctly imported.
  // Using standard div for now, can be replaced with framer-motion's motion.div if preferred and installed.
  // For animations, ensure `framer-motion` is installed and import { motion } from "framer-motion";

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Dashboard Header */}
      <header className="bg-white shadow-sm p-6"> {/* Replaced motion.header */}
        <h1 className="text-2xl font-bold text-gray-900">Stories & Blogs Dashboard</h1>
        <p className="text-gray-800 mt-1">Create and manage stories that align with your narrative.</p>
      </header>

      {/* Main Content */}
      <main className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Story Creation Form */}
        <section className="bg-white rounded-lg shadow-md p-6"> {/* Replaced motion.section */}
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <FileText size={20} /> Create Story
          </h2>
          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">Story Title</label>
              <input
                id="title"
                type="text"
                placeholder="Story Title"
                {...register("title")}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.title ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-indigo-500'}`}
              />
              {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>}
            </div>
            <div>
              <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">Story Content</label>
              <textarea
                id="content"
                rows={6}
                placeholder="Write your story..."
                {...register("content")}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.content ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-indigo-500'}`}
              ></textarea>
              {errors.content && <p className="text-red-500 text-sm mt-1">{errors.content.message}</p>}
            </div>

            {formMessage && (
              <div className={`p-3 rounded-md ${formMessage.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                {formMessage.text}
              </div>
            )}

            <div className="flex gap-4">
              <button
                type="button"
                onClick={handleSubmit(data => handleCreatePost(data, "draft"))}
                disabled={isLoading}
                className="flex items-center justify-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 disabled:opacity-50"
              >
                {isLoading ? <Loader2 size={16} className="animate-spin" /> : <Save size={16} />}
                Save Draft
              </button>
              <button
                type="button"
                onClick={handleSubmit(data => handleCreatePost(data, "published"))}
                disabled={isLoading}
                className="flex items-center justify-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 disabled:opacity-50"
              >
                {isLoading ? <Loader2 size={16} className="animate-spin" /> : <ExternalLink size={16} />}
                Publish
              </button>
            </div>
          </form>
        </section>

        {/* Blog Management (Placeholder - to be implemented in a later step) */}
        <section className="bg-white rounded-lg shadow-md p-6"> {/* Replaced motion.section */}
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Layout size={20} /> Blog Posts
          </h2>
          <div className="space-y-4">
            {["Recent Post 1", "Recent Post 2"].map((post, i) => (
              <div key={i} className="border-b pb-2">
                <p className="font-medium">{post}</p>
                <div className="flex gap-2 mt-1">
                  <button className="text-indigo-800 text-sm">Edit</button>
                  <button className="text-red-700 text-sm">Delete</button>
                </div>
              </div>
            ))}
          </div>
          <button className="mt-4 text-indigo-600 underline">+ Add New Post</button>
        </section>

        {/* Visual Story Builder (Placeholder) */}
        <section className="bg-white rounded-lg shadow-md p-6"> {/* Replaced motion.section */}
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Image size={20} /> Visual Story Builder
          </h2>
          <p className="text-gray-700 mb-4">Use templates to create visually engaging stories.</p>
          <div className="grid grid-cols-2 gap-4">
            {["Template 1", "Template 2"].map((t, i) => (
              <div key={i} className="bg-gray-100 p-3 rounded-lg text-center cursor-pointer hover:bg-gray-200">
                {t}
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
