import React from 'react';
import Image from 'next/image';
import styles from '@/widgets/TestimonialsSection/ui/TestimonialsSection.module.scss';
import container from '@/shared/styles/container.module.scss';
import { Inter } from 'next/font/google';
import authorImgSrc1 from '@/shared/assets/authors/Floyd-Miles.png';
import leftButtonSrc from '@/widgets/TestimonialsSection/assets/leftArrow.svg';
import rightButtonSrc from '@/widgets/TestimonialsSection/assets/rightArrow.svg';
import { AuthorTitleCard } from '@/shared/ui/AuthorTitleCard';

const inter = Inter({
  subsets: ['latin'],
  weight: '600',
  variable: '--font-inter',
});

export function TestimonialsSection() {
  return (
    <section className={`${styles.testimotalsSection} ${container.container}`}>
      <div className={styles.contentContainer}>
        <article className={styles.infoBlock}>
          <h3 className={`${inter.variable} ${styles.infoSubTitle}`}>TESTIMONIALS</h3>
          <h2 className={styles.infoTitle}>What people say about our blog</h2>
          <span className={styles.infoText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
          </span>
        </article>
        <div className={styles.contentSeparator} />
        <article className={styles.messagesBlock}>
          <h3 className={styles.messagesText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </h3>
          <AuthorTitleCard
            authorId={5}
            title="Jonathan Vallem"
            subtitle="New york, USA"
            src={authorImgSrc1}
          />
          <div className={styles.sliderController}>
            <div className={styles.sliderButton}>
              <Image
                className={styles.authorInfoAvatar}
                src={leftButtonSrc}
                alt="slider-left-btn"
              />
            </div>
            <div className={styles.sliderButton}>
              <Image
                className={styles.authorInfoAvatar}
                src={rightButtonSrc}
                alt="slider-right-btn"
              />
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
