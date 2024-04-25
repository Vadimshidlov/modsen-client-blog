import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/widgets/CategoriesSection/ui/Categories/Categories.module.scss';
import { CATEGORIES } from '@/shared/constants/categories';

export function Categories() {
  return (
    <div className={styles.categoriesContainer}>
      <h2 className={styles.categoriesTitle}>Categories</h2>
      <ul className={styles.categoriesListContainer}>
        {CATEGORIES.map(({ title, img }) => (
          <Link key={title} href={`/category/${title.toLowerCase()}`}>
            <li className={styles.categoriesItem}>
              <Image className={styles.categoriesItemImage} src={img} alt="owerview-image" />
              <span className={styles.categoriesItemTitle}>{title}</span>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
