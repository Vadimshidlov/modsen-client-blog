'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import styles from '@/widgets/TestimonialsSection/ui/TestimonialsSection.module.scss';
import container from '@/shared/styles/container.module.scss';
import { Inter } from 'next/font/google';
import leftButtonSrc from '@/widgets/TestimonialsSection/assets/leftArrow.svg';
import rightButtonSrc from '@/widgets/TestimonialsSection/assets/rightArrow.svg';
import { AuthorTitleCard } from '@/shared/ui/AuthorTitleCard';
import { FEEDBACK_ITEMS } from '@/widgets/TestimonialsSection/constants/feedback';
import { useTranslations } from 'next-intl';

const inter = Inter({
  subsets: ['latin'],
  weight: '600',
  variable: '--font-inter',
});

export function TestimonialsSection() {
  const t = useTranslations('TestimonialsSection');
  const [activeSlide, setActiveSlide] = useState(0);

  const carouselPosition = -activeSlide * 100;

  const handleNextSlide = () => {
    setActiveSlide((previousSlide) => {
      if (previousSlide === FEEDBACK_ITEMS.length - 1) {
        return 0;
      }

      if (previousSlide < FEEDBACK_ITEMS.length - 1) {
        return previousSlide + 1;
      }

      return previousSlide;
    });
  };

  const handlePreviousSlide = () => {
    setActiveSlide((previousSlide) => {
      if (previousSlide === 0) {
        return FEEDBACK_ITEMS.length - 1;
      }

      if (previousSlide > 0) {
        return previousSlide - 1;
      }

      return previousSlide;
    });
  };

  return (
    <section className={`${styles.testimotalsSection} ${container.container}`}>
      <div className={styles.contentContainer}>
        <article className={styles.infoBlock}>
          <h3 className={`${inter.variable} ${styles.infoSubTitle}`}>{t('subTitle')}</h3>
          <h2 className={styles.infoTitle}>{t('title')}</h2>
          <span className={styles.infoText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
          </span>
        </article>
        <div className={styles.contentSeparator} />
        <div className={styles.swiperWrapper}>
          <article
            className={styles.messagesBlock}
            style={{ transform: `translateX(${carouselPosition}%)` }}
          >
            {FEEDBACK_ITEMS.map(({ id, text, authorAddress, authorImage, authorName }) => (
              <div className={styles.swiperItem} key={id}>
                <h3 className={styles.messagesText}>{text}</h3>
                <AuthorTitleCard
                  authorId={5}
                  title={authorName}
                  subtitle={authorAddress}
                  src={authorImage}
                />
              </div>
            ))}
          </article>
        </div>
        <div className={styles.sliderController}>
          <div className={styles.sliderButton} onClick={handlePreviousSlide}>
            <Image className={styles.authorInfoAvatar} src={leftButtonSrc} alt="slider-left-btn" />
          </div>
          <div className={styles.sliderButton} onClick={handleNextSlide}>
            <Image
              className={styles.authorInfoAvatar}
              src={rightButtonSrc}
              alt="slider-right-btn"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
