'use client';

import React from 'react';
import { Inter } from 'next/font/google';
import { useTranslations } from 'next-intl';
import { FeedBackSwiper } from '@/widgets/TestimonialsSection/ui/FeedBackSwiper';
import container from '@/shared/styles/container.module.scss';
import styles from '@/widgets/TestimonialsSection/ui/TestimonialsSection.module.scss';

const inter = Inter({
  subsets: ['latin'],
  weight: '600',
  variable: '--font-inter',
});

export function TestimonialsSection() {
  const t = useTranslations('TestimonialsSection');

  return (
    <section className={`${styles.testimotalsSection} ${container.container}`}>
      <div className={styles.contentContainer}>
        <article className={styles.infoBlock}>
          <h3 className={`${inter.variable} ${styles.infoSubTitle}`}>{t('subTitle')}</h3>
          <h2 className={styles.infoTitle}>{t('title')}</h2>
          <span className={styles.infoText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
          </span>
        </article>
        <div className={styles.contentSeparator} />
        <FeedBackSwiper />
      </div>
    </section>
  );
}
