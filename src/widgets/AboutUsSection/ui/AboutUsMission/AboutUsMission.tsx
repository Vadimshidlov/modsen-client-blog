import React from 'react';
import styles from '@/widgets/AboutUsSection/ui/AboutUsMission/AboutUsMission.module.scss';
import { Inter } from 'next/font/google';
import { useTranslations } from 'next-intl';

const inter = Inter({
  subsets: ['latin'],
  weight: '600',
  variable: '--font-inter',
});

export function AboutUsMission() {
  const t = useTranslations('AboutUsMission');

  return (
    <section className={styles.aboutUsMissionContainer}>
      <article>
        <h4 className={`${styles.missionSubTitle} ${inter.variable}`}>{t('missionSubTitle')}</h4>
        <h3 className={styles.missionTitle}>{t('missionTitle')}</h3>
        <span className={styles.missionText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris
          in aliquam sem. At risus viverra adipiscing at in tellus.
        </span>
      </article>
      <article>
        <h4 className={`${styles.missionSubTitle} ${inter.variable}`}>{t('visionSubTitle')}</h4>
        <h3 className={styles.missionTitle}>{t('visionTitle')}</h3>
        <span className={styles.missionText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris
          in aliquam sem. At risus viverra adipiscing at in tellus.
        </span>
      </article>
    </section>
  );
}
