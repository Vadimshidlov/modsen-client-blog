import React from 'react';
import styles from '@/widgets/SpecialPostSection/ui/SpecialPost/SpecialPost.module.scss';
import { Inter } from 'next/font/google';
import { Button } from '@/shared/ui/Button';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

const inter = Inter({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-inter',
});

export function SpecialPost() {
  const t = useTranslations('SpecialPost');

  return (
    <article className={styles.contentBlock}>
      <h3 className={`${styles.postSubTitle} ${inter.variable}`}>{t('title')}</h3>
      <h2 className={styles.postTitle}>{t('postTitle')}</h2>
      <span className={styles.postText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip.
      </span>
      <Button>
        <Link href="/about">{t('buttonText')} &gt;</Link>
      </Button>
    </article>
  );
}
