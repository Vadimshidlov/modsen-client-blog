'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { NavigationBar } from '@/widgets/NavigationBar';
import { NAVIGATION_LINKS_SHORT } from '@/shared/constants/navigationBar';
import { AppTitle } from '@/shared/ui/AppTitle';
import { BlurBackground } from '@/widgets/Header/ui/BlurBackground';
import { ModalWindow } from '@/shared/ui/ModalWindow/ModalWindow';
import { useTranslations } from 'next-intl';
import { LocaleSwitcher } from '@/widgets/Header/ui/LocaleSwitcher/LocaleSwitcher';
import burgerMenuButtonSrc from '@/widgets/Header/assets/burger-menu-button-light.svg';
import closeBurgerMenuIcon from '@/widgets/Header/assets/close-button-svgrepo-com.svg';
import styles from '@/widgets/Header/ui/Header.module.scss';

export function Header() {
  const t = useTranslations('Header');
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCloseBurger = () => setIsBurgerOpen((prev) => !prev);

  const handleToggleOpenModal = () => {
    setIsModalOpen((prevState) => !prevState);

    if (isBurgerOpen) {
      handleCloseBurger();
    }
  };

  return (
    <header className={styles.header}>
      <AppTitle />
      <nav
        className={`${styles.header__navigation__container} ${isBurgerOpen ? `${styles.burgerActive}` : ''}`}
      >
        <NavigationBar navigationLinks={NAVIGATION_LINKS_SHORT} />
        <button
          type="button"
          className={styles.video__frame}
          onClick={handleToggleOpenModal}
          data-testid="modal-video-button"
        >
          {t('videoButton')}
        </button>
        <LocaleSwitcher />
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
      <ModalWindow isOpen={isModalOpen} handleToggleModal={handleToggleOpenModal}>
        <iframe
          className={styles.videoContainer}
          title="video"
          src="https://www.youtube.com/embed/vDkjDmnjKC0"
          allowFullScreen
          data-testid="video-frame"
        />
      </ModalWindow>
    </header>
  );
}
