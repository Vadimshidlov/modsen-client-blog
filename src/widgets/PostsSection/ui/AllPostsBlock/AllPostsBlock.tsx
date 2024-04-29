import React from 'react';
import styles from '@/widgets/PostsSection/ui/AllPostsBlock/AllPostsBlock.module.scss';
import Link from 'next/link';
import { PostItem } from '@/widgets/PostsSection/ui/PostItem/PostItem';
import { POSTS } from '@/shared/constants/posts';

export function AllPostsBlock() {
  return (
    <section className={styles.allPosts__container}>
      <div className={styles.allPostsHeader__container}>
        <h3 className={styles.section__title}>All Posts</h3>
        <Link className={styles.section__link} href="/blog">
          <span>View All</span>
        </Link>
      </div>
      {POSTS.slice(0, 4).map(({ id, postDate, author, title }) => (
        <Link key={id} className={styles.section__link} href={`/posts/${id}`}>
          <PostItem postDate={postDate} postText={title} authorName={author} />
        </Link>
      ))}
    </section>
  );
}
