import React, { useState } from 'react';
import { FEEDBACK_ITEMS } from '@/widgets/TestimonialsSection/constants/feedback';
import { AuthorTitleCard } from '@/shared/ui/AuthorTitleCard';
import Image from 'next/image';
import leftButtonSrc from '@/widgets/TestimonialsSection/assets/leftArrow.svg';
import rightButtonSrc from '@/widgets/TestimonialsSection/assets/rightArrow.svg';
import styles from '@/widgets/TestimonialsSection/ui/TestimonialsSection.module.scss';

export function FeedBackSwiper() {
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
    <>
      <div className={styles.swiperWrapper} data-testid="swiper-wrapper">
        <article
          className={styles.messagesBlock}
          style={{ transform: `translateX(${carouselPosition}%)` }}
          data-testid="swiper-block"
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
        <button
          className={styles.sliderButton}
          onClick={handlePreviousSlide}
          data-testid="swiper-left-button"
        >
          <Image className={styles.authorInfoAvatar} src={leftButtonSrc} alt="swiper-left-btn" />
        </button>
        <button className={styles.sliderButton} onClick={handleNextSlide}>
          <Image
            className={styles.authorInfoAvatar}
            src={rightButtonSrc}
            alt="swiper-right-btn"
            data-testid="swiper-right-button"
          />
        </button>
      </div>
    </>
  );
}
