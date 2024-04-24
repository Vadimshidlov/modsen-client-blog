import React from 'react';
import Image from 'next/image';
import styles from '@/shared/ui/AuthorTitleCard/AuthorTitleCard.module.scss';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

export type AuthorTitleCardPropsType = {
  src: string | StaticImport;
  title: string;
  subtitle: string;
};

export function AuthorTitleCard({ title, subtitle, src }: AuthorTitleCardPropsType) {
  return (
    <div className={styles.authorInfoBlock}>
      <Image className={styles.authorInfoAvatar} src={src} alt="author-avatar" />
      <div className={styles.authorInfoText}>
        <span className={styles.authorInfoName}>{title}</span>
        <span className={styles.authorInfoAddress}>{subtitle}</span>
      </div>
    </div>
  );
}
