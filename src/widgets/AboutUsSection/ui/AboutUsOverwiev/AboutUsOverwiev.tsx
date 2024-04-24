import React from 'react';
import styles from '@/widgets/AboutUsSection/ui/AboutUsOverwiev/AboutUsOverwiev.module.scss';
import Image from 'next/image';
import owerviewImageSrc from '@/widgets/AboutUsSection/assets/aboutUsOwerview.png';

export function AboutUsOverwiev() {
  return (
    <section className={styles.owerviewContainer}>
      <Image className={styles.owerviewImage} src={owerviewImageSrc} alt="owerview-image" />
      <div className={styles.owerviewDataContainer}>
        <div className={styles.owerviewDataItem}>
          <span className={styles.owerviewDataTitle}>12+</span>
          Blogs Published
        </div>
        <div className={styles.owerviewDataItem}>
          <span className={styles.owerviewDataTitle}>18K+</span>
          Views on Finsweet
        </div>
        <div className={styles.owerviewDataItem}>
          <span className={styles.owerviewDataTitle}>30K+</span>
          Total active User
        </div>
      </div>
      <div className={styles.colorBarContainer}>
        <div className={styles.firstColorBar} />
        <div className={styles.secondColorBar} />
      </div>
    </section>
  );
}
