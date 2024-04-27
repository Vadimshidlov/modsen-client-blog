import React from 'react';
import styles from '@/widgets/AuthorSection/ui/AuthorPosts/AuthorPosts.module.scss';
import { POSTS } from '@/shared/constants/posts';
import { PostItem } from '@/widgets/PostItem';

export type AuthorPostsPropsType = {
  authorName: string;
};

export function AuthorPosts({ authorName }: AuthorPostsPropsType) {
  const authorPosts = POSTS.filter((postData) => postData.author === authorName);

  return (
    <section className={styles.authorPostsSection}>
      <h1 className={styles.sectionTitle}>My Posts</h1>
      <article className={styles.authorPostsContainer}>
        {authorPosts.map(({ id, title, img, category, text }) => (
          <PostItem id={id} text={text} title={title} category={category} img={img} />
        ))}
      </article>
    </section>
  );
}
