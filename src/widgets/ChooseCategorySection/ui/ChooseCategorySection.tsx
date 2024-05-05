import React from 'react';
import { useTranslations } from 'next-intl';
import { CATEGORIES } from '@/shared/constants/categories';
import { Category } from '@/widgets/ChooseCategorySection/ui/Category';
import container from '@/shared/styles/container.module.scss';
import styles from '@/widgets/ChooseCategorySection/ui/ChooseCategorySection.module.scss';

export function ChooseCategorySection() {
  const t = useTranslations('ChooseCategorySection');

  return (
    <section className={`${styles.chooseCategoryContainer} ${container.container}`}>
      <h3 className={styles.sectionTitle}>{t('title')}</h3>
      <ul className={styles.categoriesContainer}>
        {CATEGORIES.map(({ img, title, text }) => (
          <Category img={img} text={text} title={title} key={title} />
        ))}
      </ul>
    </section>
  );
}
