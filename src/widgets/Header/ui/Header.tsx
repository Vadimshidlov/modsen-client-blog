import React from 'react';
import styles from '@/widgets/Header/ui/Header.module.scss';
import { NavigationBar } from '@/widgets/NavigationBar';
import { NAVIGATION_LINKS_SHORT } from '@/shared/constants/navigationBar';
import { AppTitle } from '@/shared/ui/AppTitle';

export function Header() {
  return (
    <header className={styles.header}>
      <AppTitle />
      <nav className={styles.header__navigation__container}>
        <NavigationBar navigationLinks={NAVIGATION_LINKS_SHORT} />
        <button type="button" className={styles.video__frame}>
          Video about us
        </button>
      </nav>
    </header>
  );
}
