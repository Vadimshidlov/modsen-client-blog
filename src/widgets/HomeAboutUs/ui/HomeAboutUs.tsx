import React from 'react';
import styles from '@/widgets/HomeAboutUs/ui/HomeAboutUs.module.scss';
import container from '@/shared/styles/container.module.scss';
import Link from 'next/link';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  weight: '600',
  variable: '--font-inter',
});

export function HomeAboutUs() {
  return (
    <section className={`${styles.about__section} ${container.container}`}>
      <div className={styles.colorBarContainer}>
        <div className={styles.firstColorBar} />
        <div className={styles.secondColorBar} />
      </div>
      <div className={styles.contentContainer}>
        <article className={styles.aboutBlock}>
          <h4 className={`${styles.aboutSubTitle} ${inter.variable}`}>ABOUT US</h4>
          <h2 className={styles.aboutTitle}>
            We are a community of content writers who share their learnings
          </h2>
          <span className={styles.aboutText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </span>
          <Link href="/">
            <span className={styles.aboutButton}>Read More &gt;</span>
          </Link>
        </article>
        <article className={styles.missionBlock}>
          <h4 className={`${styles.missionSubTitle} ${inter.variable}`}>OUR MISION</h4>
          <h2 className={styles.missionTitle}>
            Creating valuable content for creatives all around the world
          </h2>
          <span className={styles.missionText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </span>
        </article>
      </div>
    </section>
  );
}
