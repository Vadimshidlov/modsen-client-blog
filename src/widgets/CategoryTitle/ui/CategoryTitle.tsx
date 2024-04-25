import React from 'react';
import styles from '@/widgets/CategoryTitle/ui/CategoryTitle.module.scss';
import { Inter } from 'next/font/google';
import { getCapitalizeWord } from '@/shared/utils';

const inter = Inter({
  subsets: ['latin'],
  weight: '600',
  variable: '--font-inter',
});

export type CategoryTitlePropsType = {
  categoryName: string;
};

export function CategoryTitle({ categoryName }: CategoryTitlePropsType) {
  return (
    <section className={styles.categoryTitleContainer}>
      <h1 className={styles.categoryTitle}>{getCapitalizeWord(categoryName)}</h1>
      <span className={styles.categoryDescription}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore.
      </span>
      <span className={`${styles.categoryPath} ${inter.variable}`}>
        BLOG &gt; {categoryName.toUpperCase()}
      </span>
    </section>
  );
}
