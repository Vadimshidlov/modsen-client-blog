import React from 'react';
import { FeaturedPostBlock } from '@/widgets/PostsSection/ui/FeaturedPostBlock';
import { AllPostsBlock } from '@/widgets/PostsSection/ui/AllPostsBlock';
import styles from '@/widgets/PostsSection/ui/PostsSection.module.scss';
import container from '@/shared/styles/container.module.scss';

export function PostsSection() {
  return (
    <section className={`${styles.posts} ${container.container}`}>
      <FeaturedPostBlock />
      <AllPostsBlock />
    </section>
  );
}
