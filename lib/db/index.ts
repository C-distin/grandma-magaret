import { createClient } from "@supabase/supabase-js"
import { drizzle } from "drizzle-orm/postgres-js"
import postgres from "postgres"
import * as schema from "./schema"

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not set in .env.local")
}

if (!process.env.SUPABASE_URL) {
  throw new Error("SUPABASE_URL is not set in .env.local")
}

if (!process.env.SUPABASE_ANON_KEY) {
  throw new Error("SUPABASE_ANON_KEY is not set in .env.local")
}

// Supabase client
export const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY)

// Drizzle client for PostgreSQL
const client = postgres(process.env.DATABASE_URL, { prepare: false })
export const db = drizzle(client, { schema })

// Example usage (optional, can be removed)
// async function getPosts() {
//   const allPosts = await db.query.posts.findMany();
//   console.log(allPosts);
// }
// getPosts();
