import React from 'react';
import styles from '@/widgets/BlogSection/ui/AllPostSection/AllPostSection.module.scss';
import container from '@/shared/styles/container.module.scss';
import { POSTS } from '@/shared/constants/posts';
import { PostItem } from '@/widgets/PostItem';

export function AllPostSection() {
  return (
    <section className={`${styles.allPostSection} ${container.container}`}>
      <h1 className={styles.sectionTitle}>All Posts</h1>
      <div className={styles.postsContainer}>
        {POSTS.slice(0, 5).map(({ id, title, text, img, category }) => (
          <PostItem key={id} id={id} title={title} text={text} img={img} category={category} />
        ))}
      </div>
      <div className={styles.paginationController}>
        <button className={styles.paginationButton}>&lt; Prev</button>
        <button className={styles.paginationButton}>Next &gt;</button>
      </div>
    </section>
  );
}
