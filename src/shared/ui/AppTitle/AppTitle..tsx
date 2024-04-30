import React from 'react';
import styles from '@/shared/ui/AppTitle/AppTitle.module.scss';
import { useTranslations } from 'next-intl';

export function AppTitle() {
  const t = useTranslations('AppTitle');

  return <h1 className={styles.app__title}>{t('appTitle')}</h1>;
}
