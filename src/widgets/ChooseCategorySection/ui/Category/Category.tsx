import React from 'react';
import Image from 'next/image';
import styles from '@/widgets/ChooseCategorySection/ui/Category/Category.module.scss';

export type CategoryPropsType = {
  img: string;
  title: string;
  text: string;
};

export function Category({ img, title, text }: CategoryPropsType) {
  return (
    <li className={styles.categoriesItem}>
      <Image className={styles.categoryImage} src={img} alt="category-image" />
      <h4 className={styles.categoryTitle}>{title}</h4>
      <span className={styles.categoryText}>{text}</span>
    </li>
  );
}
