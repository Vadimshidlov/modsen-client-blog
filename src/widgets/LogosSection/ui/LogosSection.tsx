import React from 'react';
import styles from '@/widgets/LogosSection/ui/LogosSection.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import container from '@/shared/styles/container.module.scss';
import { LOGOS_LIST } from '@/widgets/LogosSection/constants/logos';

export function LogosSection() {
  return (
    <section className={`${styles.logosSection} ${container.container}`}>
      <div className={styles.logosTitleContainer}>
        <span className={styles.logosSubTitle}>We are</span>
        <span className={styles.logosTitle}>Featured in</span>
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
