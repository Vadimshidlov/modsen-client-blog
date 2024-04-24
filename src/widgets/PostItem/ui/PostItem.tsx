import React from 'react';
import Image, { StaticImageData } from 'next/image';
import styles from '@/widgets/PostItem/ui/PostItem.module.scss';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({
  subsets: ['latin'],
  weight: '600',
  variable: '--font-inter',
});

export type PostItemPropsType = {
  id: number;
  title: string;
  text: string;
  category: string;
  img: string | StaticImageData;
};

export function PostItem({
  id, title, text, category, img,
}: PostItemPropsType) {
  return (
    <article className={styles.postContainer}>
      <div className={styles.postImageWrapper}>
        <Image className={styles.postImage} src={img} alt="post-image" />
      </div>
      <div className={styles.postContentBlock}>
        <h4 className={`${styles.postSubTitle} ${inter.variable}`}>{category.toUpperCase()}</h4>
        <Link href={`posts/${id}`}>
          <h2 className={styles.postTitle}>{title}</h2>
        </Link>
        <span className={styles.postText}>{text}</span>
      </div>
    </article>
  );
}
