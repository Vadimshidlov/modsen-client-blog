'use client';

import React, { useMemo, useState } from 'react';
import styles from '@/widgets/BlogSection/ui/AllPostSection/AllPostSection.module.scss';
import container from '@/shared/styles/container.module.scss';
import { POSTS } from '@/shared/constants/posts';
import { PostItem } from '@/widgets/PostItem';
import { ITEMS_PER_PAGE } from '@/widgets/BlogSection/constants/pagintation';
import { useScrollPosition } from '@/shared/utils/hooks/useScrollPosition';

export function AllPostSection() {
  const [page, setPage] = useState(1);

  useScrollPosition(page);

  const pagesCount = useMemo(() => {
    return Math.round(POSTS.length / ITEMS_PER_PAGE);
  }, []);

  const handleNextPage = () => {
    if (page < pagesCount) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  const pagePosts = POSTS.slice(
    (page - 1) * ITEMS_PER_PAGE,
    ITEMS_PER_PAGE + ITEMS_PER_PAGE * (page - 1),
  );

  return (
    <section className={`${styles.allPostSection} ${container.container}`}>
      <h1 className={styles.sectionTitle}>All Posts</h1>
      <div className={styles.postsContainer}>
        {pagePosts.map(({ id, title, text, img, category }) => (
          <PostItem key={id} id={id} title={title} text={text} img={img} category={category} />
        ))}
      </div>
      <div className={styles.paginationController}>
        <button className={styles.paginationButton} onClick={handlePrevPage} disabled={page === 1}>
          &lt; Prev
        </button>
        <button
          className={styles.paginationButton}
          onClick={handleNextPage}
          disabled={page === pagesCount}
        >
          Next &gt;
        </button>
      </div>
    </section>
  );
}
