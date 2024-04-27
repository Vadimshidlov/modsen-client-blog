import React from 'react';
import { StaticImageData } from 'next/image';
import styles from '@/widgets/AuthorSection/ui/AuthorSection.module.scss';
import { AuthorOverview } from '@/widgets/AuthorSection/ui/AuthorOverview';
import { AuthorPosts } from '@/widgets/AuthorSection/ui/AuthorPosts';

export type AuthorSectionPropsType = {
  img: string | StaticImageData;
  name: string;
};

export function AuthorSection({ name, img }: AuthorSectionPropsType) {
  return (
    <div className={styles.authorSection}>
      <AuthorOverview name={name} img={img} />
      <AuthorPosts authorName={name} />
    </div>
  );
}
