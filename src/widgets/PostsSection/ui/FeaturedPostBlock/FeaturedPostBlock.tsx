import React from 'react';
import styles from '@/widgets/PostsSection/ui/FeaturedPostBlock/FeaturedPostBlock.module.scss';
import Image from 'next/image';
import { Button } from '@/shared/ui/Button/Button';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { POSTS } from '@/shared/constants/posts';

export function FeaturedPostBlock() {
  const t = useTranslations('FeaturedPostBlock');

  const featuredPostData = POSTS[POSTS.length - 1];
  const { id, author, postDate, title, text, img } = featuredPostData;

  return (
    <section className={styles.section__container}>
      <h3 className={styles.section__title}>{t('title')}</h3>
      <div className={styles.post__container}>
        <Image className={styles.post__image} alt="Mountains" src={img} placeholder="blur" />
        <span className={styles.post__authorInfo}>
          {t('authorTag')}
          &nbsp;{author} {postDate}
        </span>
        <h4 className={styles.post__title}>{title}</h4>
        <span className={styles.post__text}>{text}</span>
        <Link href={`/posts/${id}`}>
          <Button>{t('buttonText')} &gt;</Button>
        </Link>
      </div>
    </section>
  );
}
