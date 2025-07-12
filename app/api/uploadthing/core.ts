import type { FileRouter } from "uploadthing/next"
import { createUploadthing } from "uploadthing/next"

const f = createUploadthing()

export const ourFileRouter = {
  imageUploader: f({ image: { maxFileSize: "4MB" } }).onUploadComplete(async ({ metadata, file }) => {
    console.log("Image uploaded: ", file.ufsUrl)
  }),
} satisfies FileRouter

export type OurFileRouter = typeof ourFileRouter
