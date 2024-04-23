import React from 'react';
import Image from 'next/image';
import styles from '@/widgets/AuthorsSection/ui/Author/Author.module.scss';
import Link from 'next/link';
import { SOCIALS } from '@/shared/constants/socials';

export type AuthorPropsType = {
  avatarSrc: string;
  name: string;
  job: string;
  company: string;
};

export function Author({
  avatarSrc, name, job, company,
}: AuthorPropsType) {
  return (
    <li className={styles.authorsItem}>
      <Image className={styles.authorsAvatar} alt="Mountains" width="auto" src={avatarSrc} />
      <span className={styles.authorName}>{name}</span>
      <span className={styles.authorJobInfo}>
        {job}
        {' '}
        @
        {company}
      </span>
      <ul className={styles.authorSocial}>
        {SOCIALS.map(({ image, name: socialName, href }) => (
          <li key={socialName}>
            <Link href={href}>
              <Image src={image} alt="social-pic" />
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
}
