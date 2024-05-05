import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SOCIALS } from '@/shared/constants/socials';
import { AuthorPropsType } from '@/shared/types';
import styles from '@/widgets/AuthorsSection/ui/Author/Author.module.scss';

export function Author({ id, avatarSrc, name, job, company }: AuthorPropsType) {
  return (
    <li className={styles.authorsItem}>
      <Image className={styles.authorsAvatar} alt="Mountains" src={avatarSrc} />
      <Link href={`/authors/${id}`}>
        <span className={styles.authorName} data-testid={`author-link-${id}`}>
          {name}
        </span>
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
