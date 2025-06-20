"use client"

import { motion } from "framer-motion"
import { BookOpen, ExternalLink } from "lucide-react"
import Link from "next/link"

const books = [
  {
    slug: "to-vow-or-not-to-vow",
    title: "To Vow or Not to Vow",
    cover: "/books/vow-cover.jpg",
    description: "A cultural exploration of marriage vows and modern relationships.",
  },
  {
    slug: "behind-closed-doors",
    title: "Behind Closed Doors: Guarding Your Dreams",
    cover: "/books/guarding-dreams.jpg",
    description: "A guide to nurturing unspoken aspirations and overcoming self-doubt.",
  },
]

export function BooksPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <motion.section
        className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-20 px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Books by Margaret Kuofie</h1>
          <p className="text-lg md:text-xl mb-8">
            Explore stories that blend clinical insight, cultural reflection, and personal growth.
          </p>
        </div>
      </motion.section>

      {/* Books Grid */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">Featured Books</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {books.map((book, index) => (
              <motion.div
                key={book.slug}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 * index }}
                className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row items-start gap-6"
              >
                <img src={book.cover} alt={book.title} className="w-32 h-48 object-cover rounded-md" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{book.title}</h3>
                  <p className="text-gray-800 mb-4">{book.description}</p>
                  <Link
                    href={`/books/${book.slug}`}
                    className="text-purple-800 hover:underline inline-flex items-center gap-1"
                  >
                    Learn More <ExternalLink size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Inspiration */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Inspiration & Tools</h2>
          <p className="text-gray-700 mb-6">
            Margaret’s books are crafted using a blend of traditional storytelling and modern tools. Platforms like{" "}
            <a href="https://www.storyjumper.com" target="_blank" className="text-purple-600 hover:underline">
              StoryJumper
            </a>
            and{" "}
            <a href="https://www.canva.com/ebook-maker/" target="_blank" className="text-purple-600 hover:underline">
              Canva’s eBook Maker
            </a>
            inspire her creative process.
          </p>
          <p className="text-gray-700">
            For self-publishing, she recommends{" "}
            <a href="https://www.lulu.com" target="_blank" className="text-purple-600 hover:underline">
              Lulu
            </a>
            for affordable print-on-demand services.
          </p>
        </div>
      </section>
    </div>
  )
}
