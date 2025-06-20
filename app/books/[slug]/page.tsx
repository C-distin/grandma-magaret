"use client";

import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { BookOpen, Mail } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactFormValues } from "./schema";

const books = {
  "to-vow-or-not-to-vow": {
    title: "To Vow or Not to Vow",
    cover: "/books/vow-cover.jpg",
    description: "A cultural exploration of marriage vows and modern relationships.",
    details: "Dive into the complexities of commitment in a rapidly evolving world. This book blends research, personal anecdotes, and cultural analysis to question the relevance of traditional vows.",
    buyLink: "https://example.com/buy-vow",
  },
  "behind-closed-doors": {
    title: "Behind Closed Doors: Guarding Your Dreams",
    cover: "/books/guarding-dreams.jpg",
    description: "A guide to nurturing unspoken aspirations and overcoming self-doubt.",
    details: "Margaret’s latest work explores the power of unspoken dreams and how to protect them from external pressures.",
    buyLink: "https://example.com/buy-dreams",
  },
};

export function Page({ params }: { params: { slug: string } }) {
  const book = books[params.slug as keyof typeof books];
  if (!book) notFound();

  const { register, handleSubmit, formState: { errors } } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactFormValues) => {
    console.log("Form submitted:", data);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <motion.section
        className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-16 px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold">{book.title}</h1>
        </div>
      </motion.section>

      {/* Book Details */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-10">
            <img
              src={book.cover}
              alt={book.title}
              className="w-48 h-64 object-cover rounded-md shadow-md"
            />
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">{book.title}</h2>
              <p className="text-gray-700 mb-6">{book.details}</p>
              <a
                href={book.buyLink}
                target="_blank"
                className="inline-flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold"
              >
                <BookOpen size={20} />
                <span>Buy Now</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Ask a Question</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
              <input
                {...register("name")}
                id="name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
              <input
                {...register("email")}
                id="email"
                type="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
              <textarea
                {...register("message")}
                id="message"
                rows={4}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              ></textarea>
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold"
            >
              Send Message
            </motion.button>
          </form>
        </div>
      </section>
    </div>
  );
}
