import React from 'react';
import Image from 'next/image';
import styles from '@/widgets/StartUpSection/ui/StartUpSection.module.scss';
import startupBackground from '@/widgets/StartUpSection/assets/man-in-black-suit-wearing-eye-glasses-sitting-on-gray-sofa-using-macbook-3772622.jpg';
import { Button } from '@/shared/ui/Button/Button';

export function StartUpSection() {
  return (
    <section className={styles.section__container}>
      <Image
        alt="Mountains"
        src={startupBackground}
        placeholder="blur"
        quality={100}
        fill
        style={{
          objectFit: 'cover',
          zIndex: -1,
        }}
      />
      <div className={styles.content__container}>
        <h3 className={styles.subtitle}>
          POSTED ON&nbsp;
          <span>STARTUP</span>
        </h3>
        <h1 className={styles.title}>Step-by-step guide to choosing great font pairs</h1>
        <div className={styles.text__container}>
          <span className={styles.textTitle}>
            By&nbsp;
            <span>James West</span>
            {' '}
            | May 23, 2022
          </span>
          <span className={styles.text}>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident.
          </span>
          <Button>Read More &gt;</Button>
        </div>
      </div>
    </section>
  );
}
