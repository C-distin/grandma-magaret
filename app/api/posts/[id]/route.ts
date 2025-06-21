import { eq } from 'drizzle-orm';
import { NextResponse } from 'next/server';
import { z } from 'zod';
import { db } from '@/db';
import { postStatusEnum, posts } from '@/db/schema';

// Zod schema for post update (all fields optional)
const updatePostSchema = z.object({
  title: z.string().min(1).max(256).optional(),
  content: z.string().min(1).optional(),
  status: z.enum(postStatusEnum.enumValues).optional(),
});

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const postId = parseInt(params.id, 10);
    if (Number.isNaN(postId)) {
      return NextResponse.json({ error: 'Invalid post ID' }, { status: 400 });
    }

    const post = await db.query.posts.findFirst({
      where: eq(posts.id, postId),
    });

    if (!post) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }

    return NextResponse.json(post);
  } catch (error) {
    console.error(`Error fetching post ${params.id}:`, error);
    return NextResponse.json({ error: 'Failed to fetch post' }, { status: 500 });
  }
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  try {
    const postId = parseInt(params.id, 10);
    if (Number.isNaN(postId)) {
      return NextResponse.json({ error: 'Invalid post ID' }, { status: 400 });
    }

    const body = await request.json();
    const validation = updatePostSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json({ error: 'Invalid input', details: validation.error.flatten() }, { status: 400 });
    }

    const { title, content, status } = validation.data;

    if (!title && !content && !status) {
      return NextResponse.json({ error: 'No fields to update' }, { status: 400 });
    }

    const updatedPost = await db
      .update(posts)
      .set({
        ...(title && { title }),
        ...(content && { content }),
        ...(status && { status }),
        updatedAt: new Date(), // Manually set updatedAt
      })
      .where(eq(posts.id, postId))
      .returning();

    if (updatedPost.length === 0) {
      return NextResponse.json({ error: 'Post not found or no changes made' }, { status: 404 });
    }

    return NextResponse.json(updatedPost[0]);
  } catch (error) {
    console.error(`Error updating post ${params.id}:`, error);
    return NextResponse.json({ error: 'Failed to update post' }, { status: 500 });
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    const postId = parseInt(params.id, 10);
    if (Number.isNaN(postId)) {
      return NextResponse.json({ error: 'Invalid post ID' }, { status: 400 });
    }

    const deletedPost = await db.delete(posts).where(eq(posts.id, postId)).returning();

    if (deletedPost.length === 0) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Post deleted successfully' });
  } catch (error) {
    console.error(`Error deleting post ${params.id}:`, error);
    return NextResponse.json({ error: 'Failed to delete post' }, { status: 500 });
  }
}
