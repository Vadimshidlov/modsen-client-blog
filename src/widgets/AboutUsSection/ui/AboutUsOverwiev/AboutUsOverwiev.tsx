import React from 'react';
import styles from '@/widgets/AboutUsSection/ui/AboutUsOverwiev/AboutUsOverwiev.module.scss';
import Image from 'next/image';
import owerviewImageSrc from '@/widgets/AboutUsSection/assets/aboutUsOwerview.png';
import { useTranslations } from 'next-intl';

export function AboutUsOverwiev() {
  const t = useTranslations('AboutUsOverwiev');

  return (
    <section className={styles.owerviewContainer}>
      <Image className={styles.owerviewImage} src={owerviewImageSrc} alt="owerview-image" />
      <div className={styles.owerviewDataContainer}>
        <div className={styles.owerviewDataItem}>
          <span className={styles.owerviewDataTitle}>12+</span>
          {t('blogsMessage')}
        </div>
        <div className={styles.owerviewDataItem}>
          <span className={styles.owerviewDataTitle}>18K+</span>
          {t('viewMessage')}
        </div>
        <div className={styles.owerviewDataItem}>
          <span className={styles.owerviewDataTitle}>30K+</span>
          {t('userMessage')}
        </div>
      </div>
      <div className={styles.colorBarContainer}>
        <div className={styles.firstColorBar} />
        <div className={styles.secondColorBar} />
      </div>
    </section>
  );
}
