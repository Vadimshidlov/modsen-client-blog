'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import styles from '@/widgets/Header/ui/Header.module.scss';
import { NavigationBar } from '@/widgets/NavigationBar';
import { NAVIGATION_LINKS_SHORT } from '@/shared/constants/navigationBar';
import { AppTitle } from '@/shared/ui/AppTitle';
import { BlurBackground } from '@/widgets/Header/ui/BlurBackground';
import burgerMenuButtonSrc from '@/widgets/Header/assets/burger-menu-button-light.svg';
import closeBurgerMenuIcon from '@/widgets/Header/assets/close-button-svgrepo-com.svg';

export function Header() {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  const handleCloseBurger = () => setIsBurgerOpen((prev) => !prev);

  return (
    <header className={styles.header}>
      <AppTitle />
      <nav
        className={`${styles.header__navigation__container} ${isBurgerOpen ? `${styles.burgerActive}` : ''}`}
      >
        <NavigationBar navigationLinks={NAVIGATION_LINKS_SHORT} />
        <button type="button" className={styles.video__frame}>
          Video about us
        </button>
        {isBurgerOpen && (
          <Image
            className={styles.closeBurgerMenuIcon}
            src={closeBurgerMenuIcon}
            alt="burger-menu-icon"
            onClick={handleCloseBurger}
          />
        )}
      </nav>
      <Image
        className={styles.burgerMenuButton}
        src={burgerMenuButtonSrc}
        alt="burger-menu-icon"
        onClick={handleCloseBurger}
      />
      {isBurgerOpen && <BlurBackground onClick={handleCloseBurger} />}
    </header>
  );
}
