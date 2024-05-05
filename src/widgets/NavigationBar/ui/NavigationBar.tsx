import React from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { NavigationBarPropsType } from '@/shared/types';
import styles from '@/widgets/NavigationBar/ui/NavigationBar.module.scss';

export function NavigationBar({ navigationLinks }: NavigationBarPropsType) {
  const t = useTranslations('NavigationBar');

  return (
    <ul className={styles.navigation}>
      {navigationLinks.map(({ text, link }) => (
        <li className={styles.navigation__item} key={text}>
          <Link key={text} href={link} data-testid={`${text.toLowerCase()}-header-link`}>
            {t(`${text}`)}
          </Link>
        </li>
      ))}
    </ul>
  );
}
