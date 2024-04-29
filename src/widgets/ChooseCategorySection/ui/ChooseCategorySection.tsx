import React from 'react';
import styles from '@/widgets/ChooseCategorySection/ui/ChooseCategorySection.module.scss';
import { CATEGORIES } from '@/shared/constants/categories';
import { Category } from '@/widgets/ChooseCategorySection/ui/Category';
import container from '@/shared/styles/container.module.scss';
import Link from 'next/link';

export function ChooseCategorySection() {
  return (
    <section className={`${styles.chooseCategoryContainer} ${container.container}`}>
      <h3 className={styles.sectionTitle}>Choose A Category</h3>
      <ul className={styles.categoriesContainer}>
        {CATEGORIES.map(({ img, title, text }) => (
          <Link key={title} href={`category/${title.toLowerCase()}`}>
            <Category img={img} text={text} title={title} />
          </Link>
        ))}
      </ul>
    </section>
  );
}
