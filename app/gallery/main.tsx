"use client"

import { useState } from "react"
import { Gallery } from "../gallery-page"

export function Main() {
  const [images, _setImages] = useState<string[]>([])

  return (
    <header className="bg-gray-50 py-12 md:py-16 text-center mb-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900">Image Gallery</h1>
        <p className="text-lg sm:text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
          Browse my collection of stunning images.
        </p>
      </div>
    </header>
      <main
  className = "container mx-auto px-4 pb-12" > <Gallery images={images} />
  </main>
  )
}
