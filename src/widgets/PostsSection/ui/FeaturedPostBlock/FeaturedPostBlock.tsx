import React from 'react';
import styles from '@/widgets/PostsSection/ui/FeaturedPostBlock/FeaturedPostBlock.module.scss';
import Image from 'next/image';
import featuredPost from '@/widgets/PostsSection/assets/white-concrete-building-1838640.jpg';
import { Button } from '@/shared/ui/Button/Button';

export function FeaturedPostBlock() {
  return (
    <section className={styles.section__container}>
      <h3 className={styles.section__title}>Featured Post</h3>
      <div className={styles.post__container}>
        <Image
          className={styles.post__image}
          alt="Mountains"
          width="auto"
          src={featuredPost}
          placeholder="blur"
        />
        <span className={styles.post__authorInfo}>By John Doe l May 23, 2022</span>
        <h4 className={styles.post__title}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
        </h4>
        <span className={styles.post__text}>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur. Excepteur sint occaecat cupidatat non proident.
        </span>
        <Button>Read More &gt;</Button>
      </div>
    </section>
  );
}
