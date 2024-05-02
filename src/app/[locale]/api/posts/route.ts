import { NextResponse } from 'next/server';
import { POSTS } from '@/shared/constants/posts';

export async function GET() {
  return NextResponse.json(POSTS);
}
