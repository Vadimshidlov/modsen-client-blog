import React from 'react';
// import { POSTS } from '@/shared/constants/posts';
import { JoinTeamSection } from '@/widgets/JoinTeamSection';
// import { BlogPostSection } from '@/widgets/BlogPostSection/ui/BlogPostSection';
import { BlogPostItem } from '@/widgets/BlogPostSection/ui/BlogPostItem';
import container from '@/shared/styles/container.module.scss';
import { NextPostsSection } from '@/widgets/NextPostsSection';

export type PostPageProps = {
  params: {
    id: number;
  };
};

export default function Post({ params: { id } }: PostPageProps) {
  const currentPostId = Number(id);
  // const selectedPostData = POSTS.filter((postData) => postData.id === +id)[0];
  // const authorName = selectedPostData.author;

  // console.log(authorName);
  // console.log(selectedPostData);

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
