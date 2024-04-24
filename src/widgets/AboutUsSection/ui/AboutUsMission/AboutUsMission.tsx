import React from 'react';
import styles from '@/widgets/AboutUsSection/ui/AboutUsMission/AboutUsMission.module.scss';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  weight: '600',
  variable: '--font-inter',
});

export function AboutUsMission() {
  return (
    <section className={styles.aboutUsMissionContainer}>
      <article>
        <h4 className={`${styles.missionSubTitle} ${inter.variable}`}>OUR MISSION</h4>
        <h3 className={styles.missionTitle}>
          Creating valuable content for creatives all around the world
        </h3>
        <span className={styles.missionText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris
          in aliquam sem. At risus viverra adipiscing at in tellus.
        </span>
      </article>
      <article>
        <h4 className={`${styles.missionSubTitle} ${inter.variable}`}>OUR VISION</h4>
        <h3 className={styles.missionTitle}>A platform that empowers individuals to improve</h3>
        <span className={styles.missionText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris
          in aliquam sem. At risus viverra adipiscing at in tellus.
        </span>
      </article>
    </section>
  );
}
