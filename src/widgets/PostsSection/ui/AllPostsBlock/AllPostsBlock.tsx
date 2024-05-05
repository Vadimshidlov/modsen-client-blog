import React from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { PostItem } from '@/widgets/PostsSection/ui/PostItem/PostItem';
import { POSTS } from '@/shared/constants/posts';
import styles from '@/widgets/PostsSection/ui/AllPostsBlock/AllPostsBlock.module.scss';

export function AllPostsBlock() {
  const t = useTranslations('AllPostsBlock');

  return (
    <section className={styles.allPosts__container}>
      <div className={styles.allPostsHeader__container}>
        <h3 className={styles.section__title}>{t('title')}</h3>
        <Link className={styles.section__link} href="/blog">
          <span>{t('linkButton')}</span>
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
