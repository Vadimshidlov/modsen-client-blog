import { NextRequest, NextResponse } from 'next/server';
import { POSTS } from '@/shared/constants/posts';

export async function GET(request: NextRequest, { params }: { params: { slug: string } }) {
  const { slug } = params;

  try {
    const selectedPost = POSTS.find((postData) => postData.id === Number(slug));

    return NextResponse.json(selectedPost);
  } catch (error) {
    return NextResponse.json(
      {
        error,
      },
      { status: 500 },
    );
  }
}
