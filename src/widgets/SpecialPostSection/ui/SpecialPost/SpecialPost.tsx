import React from 'react';
import styles from '@/widgets/SpecialPostSection/ui/SpecialPost/SpecialPost.module.scss';
import { Inter } from 'next/font/google';
import { Button } from '@/shared/ui/Button';
import Link from 'next/link';

const inter = Inter({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-inter',
});

export function SpecialPost() {
  return (
    <article className={styles.contentBlock}>
      <h3 className={`${styles.postSubTitle} ${inter.variable}`}>WHY WE STARTED</h3>
      <h2 className={styles.postTitle}>
        It started out as a simple idea and evolved into our passion
      </h2>
      <span className={styles.postText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip.
      </span>
      <Button>
        <Link href="/about">Discover our story &gt;</Link>
      </Button>
    </article>
  );
}
