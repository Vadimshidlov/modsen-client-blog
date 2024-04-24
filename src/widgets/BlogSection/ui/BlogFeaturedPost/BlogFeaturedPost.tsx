import React from 'react';
import Image from 'next/image';
import styles from '@/widgets/BlogSection/ui/BlogFeaturedPost/BlogFeaturedPost.module.scss';
import container from '@/shared/styles/container.module.scss';
import { Inter } from 'next/font/google';
import { POSTS } from '@/shared/constants/posts';
import { Button } from '@/shared/ui/Button';
import Link from 'next/link';

const inter = Inter({
  subsets: ['latin'],
  weight: '500',
  variable: '--font-inter',
});

export function BlogFeaturedPost() {
  const featuredPost = POSTS.filter((postData) => postData.id === 1)[0];
  const { author, postDate, text, title, id, img } = featuredPost;

  return (
    <section className={styles.blogFeaturedPost}>
      <div className={`${container.container} ${styles.postBodyWrapper}`}>
        <article className={styles.postContent}>
          <h3 className={`${styles.postSubTitle} ${inter.variable}`}>FEATURED POST</h3>
          <h2 className={`${styles.postTitle} ${inter.variable}`}>{title}</h2>
          <span className={styles.postAuthor}>
            By&nbsp;
            <span>{author}</span> |{postDate}
          </span>
          <span className={styles.postText}>{text}</span>
          <Link href={`/posts/${id}`}>
            <Button>Read More &gt;</Button>
          </Link>
        </article>
        <div className={styles.postImageWrapper}>
          <Image className={styles.postImage} alt="post-image" src={img} placeholder="blur" />
        </div>
      </div>
    </section>
  );
}
