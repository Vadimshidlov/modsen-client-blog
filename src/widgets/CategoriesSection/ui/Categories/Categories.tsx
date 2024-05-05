import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { CATEGORIES } from '@/shared/constants/categories';
import styles from '@/widgets/CategoriesSection/ui/Categories/Categories.module.scss';

export function Categories() {
  const t = useTranslations('Category');

  return (
    <div className={styles.categoriesContainer}>
      <h2 className={styles.categoriesTitle}>{t('title')}</h2>
      <ul className={styles.categoriesListContainer}>
        {CATEGORIES.map(({ title, img }) => (
          <Link key={title} href={`/category/${title.toLowerCase()}`}>
            <li className={styles.categoriesItem}>
              <Image className={styles.categoriesItemImage} src={img} alt="owerview-image" />
              <span className={styles.categoriesItemTitle}>{t(`${title}`)}</span>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
