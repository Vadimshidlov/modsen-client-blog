import React from 'react';
import styles from '@/widgets/NavigationBar/ui/NavigationBar.module.scss';
import Link from 'next/link';

export type NavigationLinksType = {
  text: string;
  link: string;
};

export type NavigationBarPropsType = {
  navigationLinks: NavigationLinksType[];
};

export function NavigationBar({ navigationLinks }: NavigationBarPropsType) {
  return (
    <ul className={styles.navigation}>
      {navigationLinks.map(({ text, link }) => (
        <li className={styles.navigation__item}>
          <Link key={text} href={link}>
            {text}
          </Link>
        </li>
      ))}
    </ul>
  );
}
