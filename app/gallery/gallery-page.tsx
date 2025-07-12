import Image from "next/image"

interface GalleryProps {
  images: {
    key: string
    url: string
  }[]
}

export function Gallery({ images }: GalleryProps) {
  if (!images || images.length === 0) {
    return (
      <main className="flex justify-center items-center min-h-[calc(100vh-200px)]">
        <p className="text-xl text-gray-500">No images found.</p>
      </main>
    )
  }

  return (
    <main className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
      {images.map((image) => (
        <div key={image.key} className="relative w-full aspect-square rounded overflow-hidden">
          <Image src={image.url} alt={image.key} fill className="object-cover shadow-lg transition-shadow duration-300" />
        </div>
      ))}
    </main>
  )
}
