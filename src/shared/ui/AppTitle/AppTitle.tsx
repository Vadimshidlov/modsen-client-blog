import React from 'react';
import styles from '@/shared/ui/AppTitle/AppTitle.module.scss';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export function AppTitle() {
  const t = useTranslations('AppTitle');

  return (
    <h1 className={styles.app__title}>
      <Link href="/">{t('appTitle')}</Link>
    </h1>
  );
}
