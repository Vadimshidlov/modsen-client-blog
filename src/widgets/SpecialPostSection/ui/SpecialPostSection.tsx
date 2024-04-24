import React from 'react';
import Image from 'next/image';
import styles from '@/widgets/SpecialPostSection/ui/SpecialPostSection.module.scss';
import container from '@/shared/styles/container.module.scss';
import { SpecialPost } from '@/widgets/SpecialPostSection/ui/SpecialPost';
import specialPostImageSrc from '@/widgets/SpecialPostSection/assets/close-up-photography-of-man-wearing-sunglasses-1212984.jpg';

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
