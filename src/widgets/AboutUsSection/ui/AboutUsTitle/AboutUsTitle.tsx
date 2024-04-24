import React from 'react';
import styles from '@/widgets/AboutUsSection/ui/AboutUsTitle/AboutUsTitle.module.scss';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  weight: '600',
  variable: '--font-inter',
});

export function AboutUsTitle() {
  return (
    <section className={styles.aboutUsTitleContainer}>
      <div className={styles.leftSideWrapper}>
        <h3 className={`${inter.variable} ${styles.aboutUsSubTitle}`}>ABOUT US</h3>
        <h1 className={styles.aboutUsTitle}>
          We are a team of content writers who share their learnings
        </h1>
      </div>
      <span className={styles.aboutUsText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat.
      </span>
    </section>
  );
}
