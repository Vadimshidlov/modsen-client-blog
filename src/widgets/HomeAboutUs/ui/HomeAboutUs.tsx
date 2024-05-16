import React from 'react';
import Link from 'next/link';
import { Inter } from 'next/font/google';
import { useTranslations } from 'next-intl';
import container from '@/shared/styles/container.module.scss';
import styles from '@/widgets/HomeAboutUs/ui/HomeAboutUs.module.scss';

const inter = Inter({
  subsets: ['latin'],
  weight: '600',
  variable: '--font-inter',
});

export function HomeAboutUs() {
  const t = useTranslations('HomeAboutUs');

  return (
    <section className={`${styles.about__section} ${container.container}`}>
      <div className={styles.colorBarContainer}>
        <div className={styles.firstColorBar} />
        <div className={styles.secondColorBar} />
      </div>
      <div className={styles.contentContainer}>
        <article className={styles.aboutBlock}>
          <h4 className={`${styles.aboutSubTitle} ${inter.variable}`}>{t('subTitle')}</h4>
          <h2 className={styles.aboutTitle}>{t('title')}</h2>
          <span className={styles.aboutText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </span>
          <Link href="/about">
            <span className={styles.aboutButton}>{t('buttonText')} &gt;</span>
          </Link>
        </article>
        <article className={styles.missionBlock}>
          <h4 className={`${styles.missionSubTitle} ${inter.variable}`}>{t('missionSubTitle')}</h4>
          <h2 className={styles.missionTitle}>{t('missionTitle')}</h2>
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
