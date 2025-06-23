"use client";

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { Loader2, AlertTriangle, CalendarDays, Eye } from 'lucide-react';



// Define Post type based on expected API response / schema.ts
interface Post {
  id: number;
  title: string;
  content: string;
  status: "draft" | "published" | "archived";
  createdAt: string;
  updatedAt: string;
}

// Placeholder PostCard component (can be moved to its own file later)
const PostCard: React.FC<{ post: Post }> = ({ post }) => {
  const snippet = post.content.substring(0, 150) + (post.content.length > 150 ? '...' : '');
  return (
    <article className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* TODO: Add image here if available: <img src="/placeholder-image.jpg" alt="" className="w-full h-48 object-cover" /> */}
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2 text-gray-800 hover:text-indigo-600 transition-colors">
          <Link href={`/stories/${post.id}`}>
            {post.title}
          </Link>
        </h2>
        <div className="text-sm text-gray-500 mb-3 flex items-center">
          <CalendarDays size={14} className="mr-2" />
          Published on {new Date(post.createdAt).toLocaleDateString()}
        </div>
        <p className="text-gray-700 mb-4 leading-relaxed">
          {snippet}
        </p>
        <Link href={`/stories/${post.id}`} className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-semibold group">
            Read More
            <Eye size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </article>
  );
};


export default function StoriesPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPublishedPosts = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      // Fetch only published posts from the API
      const response = await fetch('/api/posts?status=published');
      if (!response.ok) {
        throw new Error('Failed to fetch stories. Please try again later.');
      }
      const publishedPosts: Post[] = await response.json();
      setPosts(publishedPosts);
    } catch (err: any) {
      setError(err.message || 'An unexpected error occurred.');
      setPosts([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPublishedPosts();
  }, [fetchPublishedPosts]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[calc(100vh-200px)]">
        <Loader2 size={48} className="animate-spin text-indigo-600" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col justify-center items-center min-h-[calc(100vh-200px)] text-red-600">
        <AlertTriangle size={48} className="mb-4" />
        <p className="text-xl">{error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white"> {/* Changed main background to white */}
      <header className="bg-gray-50 py-12 md:py-16 text-center mb-12"> {/* Added bg-gray-50 and more padding */}
        <div className="container mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900">Our Stories & Blog</h1>
          <p className="text-lg sm:text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
            Discover insights, ideas, and narratives from our team.
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 pb-12"> {/* Added pb-12 for more space at bottom */}
        {posts.length === 0 ? (
          <div className="text-center py-10">
            <AlertTriangle size={32} className="mx-auto text-gray-400 mb-4" />
            <p className="text-xl text-gray-500">No stories published yet. Check back soon!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map(post => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
