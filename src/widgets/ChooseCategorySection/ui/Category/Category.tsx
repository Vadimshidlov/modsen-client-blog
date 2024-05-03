import React from 'react';
import Image from 'next/image';
import styles from '@/widgets/ChooseCategorySection/ui/Category/Category.module.scss';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export type CategoryPropsType = {
  img: string;
  title: string;
  text: string;
};

export function Category({ img, title, text }: CategoryPropsType) {
  const t = useTranslations('Category');

  return (
    <li className={styles.categoriesItem}>
      <Link
        key={title}
        href={`/category/${title.toLowerCase()}`}
        data-testid={`category-link-${title.toLowerCase()}`}
      >
        <Image className={styles.categoryImage} src={img} alt="category-image" />
        <h4 className={styles.categoryTitle}>{t(`${title}`)}</h4>
        <span className={styles.categoryText}>{text}</span>
      </Link>
    </li>
  );
}
