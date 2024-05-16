import React from 'react';
import Image, { StaticImageData } from 'next/image';
import styles from '@/widgets/NextPostsSection/ui/NextPostItem/NextPostItem.module.scss';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

const inter = Inter({
  subsets: ['latin'],
  weight: '500',
  variable: '--font-inter',
});

export type NextPostPropsType = {
  postImage: string | StaticImageData;
  postAuthor: string;
  postDate: string;
  postTitle: string;
  postText: string;
  postId: number;
};

export function NextPostItem({
  postImage,
  postAuthor,
  postDate,
  postTitle,
  postText,
  postId,
}: NextPostPropsType) {
  const t = useTranslations('BlogFeaturedPost');

  return (
    <article className={styles.postContainer}>
      <div className={styles.postImageWrapper}>
        <Image className={styles.postImage} src={postImage} alt="social-pic" />
      </div>
      <span className={`${styles.postDateInfo} ${inter.variable}`}>
        {t('authorTag')} <span>{postAuthor}</span> {postDate}
      </span>
      <Link href={`/posts/${postId}`}>
        <h3 className={styles.postTitle}>{postTitle}</h3>
      </Link>
      <span className={styles.postText}>{postText}</span>
    </article>
  );
}
