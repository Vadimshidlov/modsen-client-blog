import React from 'react';
import { useTranslations } from 'next-intl';
import styles from '@/widgets/NextPostsSection/ui/NextPostsSection.module.scss';
import { POSTS } from '@/shared/constants/posts';
import { NextPostItem } from '@/widgets/NextPostsSection/ui/NextPostItem';
import { NextPostsSectionPropsType } from '@/shared/types';

export function NextPostsSection({ activePostId }: NextPostsSectionPropsType) {
  const t = useTranslations('NextPostsSection');
  const filteredPosts = POSTS.filter((postData) => postData.id !== activePostId);

  return (
    <section className={styles.nextPostSection}>
      <h2 className={styles.sectionTitle}>{t('title')}</h2>
      <div className={styles.nextPostsContainer}>
        {filteredPosts.slice(0, 3).map(({ id, text, postDate, title, author, img }) => (
          <NextPostItem
            postId={id}
            postText={text}
            postTitle={title}
            postDate={postDate}
            postAuthor={author}
            postImage={img}
            key={id}
          />
        ))}
      </div>
    </section>
  );
}
