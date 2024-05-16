import React from 'react';
import { POSTS } from '@/shared/constants/posts';
import { PostItem } from '@/widgets/PostItem';
import { useTranslations } from 'next-intl';
import { AuthorPostsPropsType } from '@/shared/types';
import styles from '@/widgets/AuthorSection/ui/AuthorPosts/AuthorPosts.module.scss';

export function AuthorPosts({ authorName }: AuthorPostsPropsType) {
  const t = useTranslations('AuthorPosts');
  const authorPosts = POSTS.filter((postData) => postData.author === authorName);

  return (
    <section className={styles.authorPostsSection}>
      <h1 className={styles.sectionTitle}>{t('title')}</h1>
      <article className={styles.authorPostsContainer}>
        {authorPosts.map(({ id, title, img, category, text }) => (
          <PostItem id={id} text={text} title={title} category={category} img={img} />
        ))}
      </article>
    </section>
  );
}
