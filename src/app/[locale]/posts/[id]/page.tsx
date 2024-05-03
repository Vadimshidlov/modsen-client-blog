import React from 'react';
import { JoinTeamSection } from '@/widgets/JoinTeamSection';
import container from '@/shared/styles/container.module.scss';
import { NextPostsSection } from '@/widgets/NextPostsSection';
import { BlogPostItem } from '@/widgets/BlogPostItem';

export type PostPageProps = {
  params: {
    id: number;
  };
};

export default function Post({ params: { id } }: PostPageProps) {
  const currentPostId = Number(id);

  return (
    <main>
      <div className={container.container}>
        <BlogPostItem postId={currentPostId} />
        <NextPostsSection activePostId={currentPostId} />
        <JoinTeamSection />
      </div>
    </main>
  );
}
