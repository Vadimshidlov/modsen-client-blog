import React from 'react';
import Image from 'next/image';
import styles from '@/widgets/AboutUsSection/ui/AboutUsTeam/AboutUsTeam.module.scss';
import aboutUsHandsImageSrc from '@/widgets/AboutUsSection/assets/aboutUsHands.png';
import { AboutUsArticle } from '@/widgets/AboutUsSection/ui/AboutUsArticle';
import { useTranslations } from 'next-intl';

export function AboutUsTeam() {
  const t = useTranslations('AboutUsTeam');

  const title = t('title');
  const subTitle = t('subTitle');
  const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
  ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
  ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
  reprehenderit in voluptate velit esse cillum dolore eu fugiat.`;

  return (
    <section className={styles.aboutUsTeamSection}>
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
