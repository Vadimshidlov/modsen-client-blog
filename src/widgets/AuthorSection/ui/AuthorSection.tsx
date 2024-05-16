import React from 'react';
import { AuthorOverview } from '@/widgets/AuthorSection/ui/AuthorOverview';
import { AuthorPosts } from '@/widgets/AuthorSection/ui/AuthorPosts';
import styles from '@/widgets/AuthorSection/ui/AuthorSection.module.scss';
import { AuthorSectionPropsType } from '@/shared/types';

export function AuthorSection({ name, img }: AuthorSectionPropsType) {
  return (
    <div className={styles.authorSection}>
      <AuthorOverview name={name} img={img} />
      <AuthorPosts authorName={name} />
    </div>
  );
}
