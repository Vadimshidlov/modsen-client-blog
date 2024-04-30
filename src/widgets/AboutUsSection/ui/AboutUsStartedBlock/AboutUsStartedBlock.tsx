import React from 'react';
import Image from 'next/image';
import styles from '@/widgets/AboutUsSection/ui/AboutUsStartedBlock/AboutUsStartedBlock.module.scss';
import whyWeStartedImageSrc from '@/widgets/AboutUsSection/assets/whyWeStartedImage.png';
import { AboutUsArticle } from '@/widgets/AboutUsSection/ui/AboutUsArticle';
import { useTranslations } from 'next-intl';

export function AboutUsStartedBlock() {
  const t = useTranslations('AboutUsStartedBlock');

  const title = t('title');
  const subTitle = t('subTitle');
  const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
  ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
  ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
  reprehenderit in voluptate velit esse cillum dolore eu fugiat.`;

  return (
    <section className={styles.aboutUsStartedSection}>
      <div className={styles.articleWrapper}>
        <AboutUsArticle title={title} subTitle={subTitle} text={text} />
      </div>
      <div className={styles.aboutUsStartedImageWrapper}>
        <Image
          placeholder="blur"
          className={styles.aboutUsStartedImage}
          src={whyWeStartedImageSrc}
          alt="author-avatar"
        />
      </div>
    </section>
  );
}
