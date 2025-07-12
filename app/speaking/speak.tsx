"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { Calendar, Download, Mic } from "lucide-react"
import { motion } from "motion/react"
import { useForm } from "react-hook-form"
import { type BookingFormValues, bookingSchema } from "./schema"

export function SpeakingPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
  })

  const onSubmit = (data: BookingFormValues) => {
    console.log("Booking request submitted:", data)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <motion.section
        className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-24 px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Speaking Engagements</h1>
          <p className="text-xl mb-8">
            Let Margaret Kuofie inspire your audience with stories that bridge science and humanity.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-indigo-700 px-8 py-3 rounded-lg font-semibold flex items-center gap-2 mx-auto"
          >
            <Calendar size={20} />
            <span>Book a Session</span>
          </motion.button>
        </div>
      </motion.section>

      {/* Featured Talks Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">Featured Talks</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Talk 1 */}
            <motion.div
              className="bg-gray-100 p-6 rounded-lg shadow-md"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-3">"The Science of Storytelling"</h3>
              <p className="text-gray-800 mb-4">
                How clinical research principles can shape compelling narratives for personal and professional growth.
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="/talks/science-of-storytelling.mp3"
                  className="text-purple-800 hover:underline flex items-center gap-2"
                >
                  <Mic size={16} />
                  <span>Listen Now</span>
                </a>
                <a
                  href="/talks/science-of-storytelling.mp3"
                  download
                  className="text-indigo-800 hover:underline flex items-center gap-2"
                >
                  <Download size={16} />
                  <span>Download</span>
                </a>
              </div>
            </motion.div>

            {/* Talk 2 */}
            <motion.div
              className="bg-gray-100 p-6 rounded-lg shadow-md"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-xl font-semibold mb-3">"Guarding Your Dreams"</h3>
              <p className="text-gray-800 mb-4">
                A keynote on nurturing unspoken aspirations, inspired by Margaret's book <em>Behind Closed Doors</em>.
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="/talks/guarding-dreams.mp3"
                  className="text-purple-800 hover:underline flex items-center gap-2"
                >
                  <Mic size={16} />
                  <span>Listen Now</span>
                </a>
                <a
                  href="/talks/guarding-dreams.mp3"
                  download
                  className="text-indigo-800 hover:underline flex items-center gap-2"
                >
                  <Download size={16} />
                  <span>Download</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI Voice Samples Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">AI-Powered Voice Samples</h2>
          <p className="text-gray-800 mb-6 text-center">
            Margaret uses AI tools like{" "}
            <a href="https://elevenlabs.io" target="_blank" className="text-purple-800 hover:underline" rel="noopener">
              ElevenLabs
            </a>{" "}
            [[3]] and{" "}
            <a href="https://www.murfs.ai" target="_blank" className="text-purple-800 hover:underline" rel="noopener">
              Murf AI
            </a>{" "}
            [[6]] to create lifelike audio versions of her work.
          </p>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Sample Audio</h3>
            <div className="flex items-center gap-4">
              <audio controls className="w-full">
                <source src="/audio/sample-ai-voice.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
            <p className="text-sm text-gray-700 mt-2">
              Generated using{" "}
              <a
                href="https://cloud.google.com/text-to-speech"
                target="_blank"
                className="text-indigo-800 hover:underline"
                rel="noopener"
              >
                Google Cloud Text-to-Speech
              </a>{" "}
              [[10]].
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What Audiences Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-gray-100 p-6 rounded-lg"
            >
              <p className="italic text-gray-800 mb-4">
                "Margaret’s blend of scientific insight and storytelling transformed our event!"
              </p>
              <p className="font-semibold text-gray-900">— Event Organizer, Toronto</p>
            </motion.div>
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-gray-100 p-6 rounded-lg"
            >
              <p className="italic text-gray-800 mb-4">
                "Her AI-generated audio samples brought her books to life in a way we never expected."
              </p>
              <p className="font-semibold text-gray-900">— Publisher, New York</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section id="booking" className="py-16 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Book Margaret</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-900 mb-2">
                Name
              </label>
              <input
                {...register("name")}
                id="name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-900 mb-2">
                Email
              </label>
              <input
                {...register("email")}
                id="email"
                type="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
            </div>
            <div>
              <label htmlFor="eventDetails" className="block text-gray-900 mb-2">
                Event Details
              </label>
              <textarea
                {...register("eventDetails")}
                id="eventDetails"
                rows={4}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              ></textarea>
              {errors.eventDetails && <p className="text-red-500 text-sm mt-1">{errors.eventDetails.message}</p>}
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold"
            >
              Submit Request
            </motion.button>
          </form>
        </div>
      </section>
    </div>
  )
}
