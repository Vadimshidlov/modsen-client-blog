import React from 'react';
import Image from 'next/image';
import styles from '@/widgets/AboutUsSection/ui/AboutUsTeam/AboutUsTeam.module.scss';
import aboutUsHandsImageSrc from '@/widgets/AboutUsSection/assets/aboutUsHands.png';
import { AboutUsArticle } from '@/widgets/AboutUsSection/ui/AboutUsArticle';

export function AboutUsTeam() {
  const title = 'Our team of creatives';
  const subTitle = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.';
  const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
  ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
  ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
  reprehenderit in voluptate velit esse cillum dolore eu fugiat.`;

  return (
    <section className={styles.aboutUsTeamSection}>
      {/* <article className={styles.aboutUsTextContent}>
        <h2 className={styles.aboutUsTeamTitle}>Our team of creatives</h2>
        <h4 className={styles.aboutUsTeamSubtitle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
        </h4>
        <span className={styles.aboutUsText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat.
        </span>
      </article> */}
      <AboutUsArticle title={title} subTitle={subTitle} text={text} />
      <div className={styles.aboutUsTeamImageWrapper}>
        <Image
          placeholder="blur"
          className={styles.aboutUsTeamImage}
          src={aboutUsHandsImageSrc}
          alt="author-avatar"
        />
      </div>
    </section>
  );
}
