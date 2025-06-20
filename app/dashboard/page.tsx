"use client"
import { ExternalLink, FileText, Image, Layout, Save } from "lucide-react"
import { motion } from "motion/react"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Dashboard Header */}
      <motion.header className="bg-white shadow-sm p-6" initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
        <h1 className="text-2xl font-bold text-gray-900">Stories & Blogs Dashboard</h1>
        <p className="text-gray-800 mt-1">Create and manage stories that align with your narrative.</p>
      </motion.header>

      {/* Main Content */}
      <main className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Story Creation Form */}
        <motion.section
          className="bg-white rounded-lg shadow-md p-6"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <FileText size={20} /> Create Story
          </h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Story Title"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <textarea
              rows={6}
              placeholder="Write your story..."
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>
            <div className="flex gap-4">
              <button type="button" className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg">
                <Save size={16} /> Save Draft
              </button>
              <button type="button" className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-lg">
                <ExternalLink size={16} /> Publish
              </button>
            </div>
          </form>
        </motion.section>

        {/* Blog Management */}
        <motion.section
          className="bg-white rounded-lg shadow-md p-6"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
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
        </motion.section>

        {/* Visual Story Builder */}
        <motion.section
          className="bg-white rounded-lg shadow-md p-6"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
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
        </motion.section>
      </main>
    </div>
  )
}
