import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { posts, postStatusEnum } from '@/db/schema';
import { eq, desc } from 'drizzle-orm';
import { z } from 'zod';

// Zod schema for post creation
const createPostSchema = z.object({
  title: z.string().min(1, { message: 'Title is required' }).max(256),
  content: z.string().min(1, { message: 'Content is required' }),
  status: z.enum(postStatusEnum.enumValues).optional().default('draft'),
});

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');

    // Build the query conditionally
    let allPosts;
    
    if (status && postStatusEnum.enumValues.includes(status as any)) {
      // Query with status filter
      allPosts = await db
        .select()
        .from(posts)
        .where(eq(posts.status, status as any))
        .orderBy(desc(posts.createdAt));
    } else {
      // Query without filter
      allPosts = await db
        .select()
        .from(posts)
        .orderBy(desc(posts.createdAt));
    }

    return NextResponse.json(allPosts);
  } catch (error) {
    console.error('Error fetching posts:', error);
    return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validation = createPostSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json({ error: 'Invalid input', details: validation.error.flatten() }, { status: 400 });
    }

    const { title, content, status } = validation.data;

    const newPost = await db
      .insert(posts)
      .values({
        title,
        content,
        status: status || 'draft',
        // createdAt and updatedAt will use database defaults
      })
      .returning();

    return NextResponse.json(newPost[0], { status: 201 });
  } catch (error) {
    console.error('Error creating post:', error);
    return NextResponse.json({ error: 'Failed to create post' }, { status: 500 });
  }
}