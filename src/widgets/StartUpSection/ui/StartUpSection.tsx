import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/shared/ui/Button/Button';
import { POSTS } from '@/shared/constants/posts';
import { useTranslations } from 'next-intl';
import startupBackground from '@/widgets/StartUpSection/assets/startupBackground.webp';
import styles from '@/widgets/StartUpSection/ui/StartUpSection.module.scss';

export function StartUpSection() {
  const t = useTranslations('StartUpSection');

  const featuredPost = POSTS.filter((postData) => postData.id === 1)[0];
  const { author, postDate, text, title } = featuredPost;

  return (
    <section className={styles.section__container}>
      <Image
        alt="Mountains"
        src={startupBackground}
        placeholder="blur"
        quality={100}
        fill
        style={{
          objectFit: 'cover',
          zIndex: -1,
        }}
      />
      <div className={styles.content__container}>
        <h3 className={styles.subtitle}>
          {t('titleFirstPart')}&nbsp;
          <span>{t('titleSecondPart')}&nbsp;</span>
        </h3>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.text__container}>
          <span className={styles.textTitle}>
            By&nbsp;
            <span>{author}</span> |{postDate}
          </span>
          <span className={styles.text}>{text}</span>
          <Link href="/posts/1">
            <Button>{t('buttonText')} &gt;</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
