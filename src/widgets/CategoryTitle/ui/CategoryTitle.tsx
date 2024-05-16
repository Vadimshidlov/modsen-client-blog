import React from 'react';
import styles from '@/widgets/CategoryTitle/ui/CategoryTitle.module.scss';
import { Inter } from 'next/font/google';
import { getCapitalizeWord } from '@/shared/utils';
import { useTranslations } from 'next-intl';
import { CategoryTitlePropsType } from '@/shared/types';

const inter = Inter({
  subsets: ['latin'],
  weight: '600',
  variable: '--font-inter',
});

export function CategoryTitle({ categoryName }: CategoryTitlePropsType) {
  const t = useTranslations('Category');

  return (
    <section className={styles.categoryTitleContainer}>
      <h1 className={styles.categoryTitle}>{t(`${getCapitalizeWord(categoryName)}`)}</h1>
      <span className={styles.categoryDescription}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore.
      </span>
      <span className={`${styles.categoryPath} ${inter.variable}`}>
        BLOG &gt; {t(`${getCapitalizeWord(categoryName)}`).toUpperCase()}
      </span>
    </section>
  );
}
