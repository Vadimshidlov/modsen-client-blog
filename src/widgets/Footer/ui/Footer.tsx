import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/widgets/Footer/ui/Footer.module.scss';
import { NavigationBar } from '@/widgets/NavigationBar';
import { NAVIGATION_LINKS } from '@/shared/constants/navigationBar';
import { AppTitle } from '@/shared/ui/AppTitle';
import { SOCIALS } from '@/shared/constants/socials';
import { LettersForm } from '@/features/LettersForm';

export function Footer() {
  return (
    <footer className={styles.footer__container}>
      <div className={styles.footer__titleContainer}>
        <AppTitle />
        <NavigationBar navigationLinks={NAVIGATION_LINKS} />
      </div>
      <LettersForm />
      <div className={styles.footer__contactsContainer}>
        <div className={styles.footer__addressContainer}>
          <span className={styles.footer__address}>Finstreet 118 2561 Fintown</span>
          <span className={styles.footer__address}>Hello@finsweet.com 020 7993 2905</span>
        </div>
        <ul className={styles.footer__social}>
          {SOCIALS.map(({ image, name, href }) => (
            <li key={name}>
              <Link href={href}>
                <Image src={image} alt="social-pic" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
