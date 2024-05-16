import React from 'react';
import Image from 'next/image';
import { SpecialPost } from '@/widgets/SpecialPostSection/ui/SpecialPost';
import specialPostImageSrc from '@/widgets/SpecialPostSection/assets/close-up-photography-of-man-wearing-sunglasses-1212984.jpg';
import container from '@/shared/styles/container.module.scss';
import styles from '@/widgets/SpecialPostSection/ui/SpecialPostSection.module.scss';

export function SpecialPostSection() {
  return (
    <section className={`${styles.specialPostSection} ${container.container}`}>
      <Image
        src={specialPostImageSrc}
        className={styles.postImage}
        placeholder="blur"
        alt="special-post-image"
      />
      <SpecialPost />
    </section>
  );
}
