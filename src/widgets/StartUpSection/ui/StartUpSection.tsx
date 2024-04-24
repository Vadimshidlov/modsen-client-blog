import React from 'react';
import Image from 'next/image';
import styles from '@/widgets/StartUpSection/ui/StartUpSection.module.scss';
import startupBackground from '@/widgets/StartUpSection/assets/man-in-black-suit-wearing-eye-glasses-sitting-on-gray-sofa-using-macbook-3772622.jpg';
import { Button } from '@/shared/ui/Button/Button';
import { POSTS } from '@/shared/constants/posts';

export function StartUpSection() {
  const featuredPost = POSTS.filter((postData) => postData.id === 1)[0];
  const {
    author, postDate, text, title,
  } = featuredPost;

  return (
    <section className={styles.section__container}>
      <Image
        alt="Mountains"
        src={startupBackground}
        placeholder="blur"
        quality={100}
        fill
        style={{
          objectFit: 'cover',
          zIndex: -1,
        }}
      />
      <div className={styles.content__container}>
        <h3 className={styles.subtitle}>
          POSTED ON&nbsp;
          <span>STARTUP</span>
        </h3>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.text__container}>
          <span className={styles.textTitle}>
            By&nbsp;
            <span>{author}</span>
            {' '}
            |
            {postDate}
          </span>
          <span className={styles.text}>{text}</span>
          <Button>Read More &gt;</Button>
        </div>
      </div>
    </section>
  );
}
