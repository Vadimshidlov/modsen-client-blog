import React from 'react';
import styles from '@/widgets/LogosSection/ui/LogosSection.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import container from '@/shared/styles/container.module.scss';
import { LOGOS_LIST } from '@/widgets/LogosSection/constants/logos';
import { useTranslations } from 'next-intl';

export function LogosSection() {
  const t = useTranslations('LogosSection');

  return (
    <section className={`${styles.logosSection} ${container.container}`}>
      <div className={styles.logosTitleContainer}>
        <span className={styles.logosSubTitle}>{t('title')}</span>
        <span className={styles.logosTitle}>{t('subTitle')}</span>
      </div>
      <ul className={styles.logosContainer}>
        {LOGOS_LIST.map(({ id, img, link }) => (
          <li key={id}>
            <Link href={link}>
              <Image src={img} alt="logo-pic" />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
