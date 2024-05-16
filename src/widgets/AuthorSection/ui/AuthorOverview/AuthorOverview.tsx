import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Inter } from 'next/font/google';
import { SOCIALS } from '@/shared/constants/socials';
import { useTranslations } from 'next-intl';
import { AuthorOverviewPropsType } from '@/shared/types';
import styles from '@/widgets/AuthorSection/ui/AuthorOverview/AuthorOverview.module.scss';

const inter = Inter({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-inter',
});

export function AuthorOverview({ name, img }: AuthorOverviewPropsType) {
  const t = useTranslations('AuthorOverview');

  return (
    <article className={styles.authorOverviewContainer}>
      <div className={styles.authorOverviewContent}>
        <Image className={styles.authorOverviewImage} src={img} alt="author-avatar-icon" />
        <div className={styles.authorOverviewDescription}>
          <h1 className={styles.authorOverviewTitle}>{t('title', { name })}</h1>
          <span className={`${styles.authorOverviewText} ${inter.variable}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque
            viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.
          </span>
          <ul className={styles.authorOverviewSocials}>
            {SOCIALS.map(({ image, name: socialNetwork, href }) => (
              <li key={socialNetwork}>
                <Link href={href}>
                  <Image src={image} alt="social-pic" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.colorBarContainer}>
        <div className={styles.firstColorBar} />
        <div className={styles.secondColorBar} />
      </div>
    </article>
  );
}
