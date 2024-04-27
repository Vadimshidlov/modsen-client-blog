import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { Inter } from 'next/font/google';
import styles from '@/widgets/AuthorSection/ui/AuthorOverview/AuthorOverview.module.scss';
import { SOCIALS } from '@/shared/constants/socials';

const inter = Inter({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-inter',
});

export type AuthorOverviewPropsType = {
  img: string | StaticImageData;
  name: string;
};

export function AuthorOverview({ name, img }: AuthorOverviewPropsType) {
  return (
    <article className={styles.authorOverviewContainer}>
      <div className={styles.authorOverviewContent}>
        <Image className={styles.authorOverviewImage} src={img} alt="author-avatar-icon" />
        <div className={styles.authorOverviewDescription}>
          <h1 className={styles.authorOverviewTitle}>
            Hey there, I’m {name} and welcome to my Blog
          </h1>
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
