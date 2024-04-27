import React from 'react';
import Image, { StaticImageData } from 'next/image';
import styles from '@/widgets/AuthorsSection/ui/Author/Author.module.scss';
import Link from 'next/link';
import { SOCIALS } from '@/shared/constants/socials';

export type AuthorPropsType = {
  avatarSrc: string | StaticImageData;
  name: string;
  id: number;
  job: string;
  company: string;
};

export function Author({ id, avatarSrc, name, job, company }: AuthorPropsType) {
  return (
    <li className={styles.authorsItem}>
      <Image className={styles.authorsAvatar} alt="Mountains" src={avatarSrc} />
      <Link href={`/authors/${id}`}>
        <span className={styles.authorName}>{name}</span>
      </Link>
      <span className={styles.authorJobInfo}>
        {job} @{company}
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
