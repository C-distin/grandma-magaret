"use client"

import { AlertTriangle, ArrowLeft, CalendarDays, Loader2 } from "lucide-react"
import Link from "next/link"
import { useParams, useRouter } from "next/navigation" // useRouter for back navigation
import { useCallback, useEffect, useState } from "react"

// Define Post type based on expected API response / schema.ts
interface Post {
  id: number
  title: string
  content: string
  status: "draft" | "published" | "archived"
  createdAt: string
  updatedAt: string
  // Potentially add author info if available in your schema later
  // author?: { name: string; avatarUrl?: string };
}

export default function SinglePostPage() {
  const params = useParams()
  const router = useRouter() // For "Go Back" functionality
  const postId = params?.id

  const [post, setPost] = useState<Post | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchPost = useCallback(async (id: string | string[]) => {
    if (!id) {
      setError("Post ID is missing.")
      setIsLoading(false)
      return
    }
    setIsLoading(true)
    setError(null)
    try {
      const response = await fetch(`/api/posts/${id}`)
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error("Story not found. It might have been moved or deleted.")
        }
        throw new Error("Failed to fetch the story. Please try again later.")
      }
      const fetchedPost: Post = await response.json()

      // Optionally, only show if published, or handle drafts/archived differently
      // For now, we assume if it's fetched by ID, it's viewable.
      // if (fetchedPost.status !== 'published') {
      //   throw new Error('This story is not available for viewing.');
      // }

      setPost(fetchedPost)
    } catch (err: any) {
      setError(err.message || "An unexpected error occurred.")
      setPost(null)
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    if (postId) {
      fetchPost(postId)
    } else {
      // Handle case where postId is not available yet, though useParams usually provides it
      setIsLoading(false)
      setError("Post ID not found in URL.")
    }
  }, [postId, fetchPost])

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[calc(100vh-200px)]">
        <Loader2 size={48} className="animate-spin text-indigo-600" />
      </div>
    )
  }

  if (error || !post) {
    return (
      <div className="flex flex-col justify-center items-center min-h-[calc(100vh-200px)] text-center px-4">
        <AlertTriangle size={48} className="mb-4 text-red-500" />
        <p className="text-xl text-red-600 mb-6">{error || "Could not load the story."}</p>
        <Link
          href="/stories"
          className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
        >
          <ArrowLeft size={18} className="mr-2" />
          Back to Stories
        </Link>
      </div>
    )
  }

  // Basic markdown-like paragraph splitting (replace with a proper markdown renderer if content is markdown)
  const contentParagraphs = post.content.split("\n").map((para, index) => (
    <p key={index} className="mb-6 text-lg text-gray-700 leading-relaxed">
      {para}
    </p>
  ))

  return (
    <div className="min-h-screen bg-gray-50 py-8 md:py-12">
      <main className="container mx-auto px-4 max-w-3xl">
        <div className="mb-8">
          <button
            onClick={() => router.back()} // Or use Link href="/stories"
            className="inline-flex items-center text-indigo-600 hover:text-indigo-800 group mb-6"
          >
            <ArrowLeft size={18} className="mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Stories
          </button>
        </div>

        <article className="bg-white shadow-xl rounded-lg p-6 md:p-10">
          <header className="mb-8 border-b pb-6 border-gray-200">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">{post.title}</h1>
            <div className="flex flex-col sm:flex-row sm:items-center text-sm text-gray-500 space-y-2 sm:space-y-0 sm:space-x-4">
              <div className="flex items-center">
                <CalendarDays size={16} className="mr-2 text-indigo-500" />
                Published on{" "}
                {new Date(post.createdAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
              {/* Placeholder for author - adapt if you add author data
              <div className="flex items-center">
                <UserCircle size={16} className="mr-2 text-indigo-500" />
                By {post.author?.name || 'Anonymous'}
              </div>
              */}
            </div>
          </header>

          <div className="prose prose-lg max-w-none prose-indigo">
            {/*
              If your content is HTML, you can use:
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
              If it's plain text with newlines for paragraphs:
            */}
            {contentParagraphs}
            {/*
              For actual Markdown content, you'd use a library like react-markdown:
              <ReactMarkdown>{post.content}</ReactMarkdown>
            */}
          </div>
        </article>
      </main>
      <footer className="text-center mt-16 py-8 border-t border-gray-200">
        <p className="text-gray-500">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </footer>
    </div>
  )
}
