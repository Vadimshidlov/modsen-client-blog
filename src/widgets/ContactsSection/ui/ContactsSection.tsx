import React from 'react';
import container from '@/shared/styles/container.module.scss';
import { Inter } from 'next/font/google';
import { ConversationForm } from '@/features/ConversationForm';
import { useTranslations } from 'next-intl';
import styles from './ContactsSection.module.scss';

const inter = Inter({
  subsets: ['latin'],
  weight: '900',
  variable: '--font-inter',
});

const interRegular = Inter({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-inter',
});

export function ContactsSection() {
  const t = useTranslations('ContactsSection');

  return (
    <section className={`${styles.contactsSection} ${container.container}`}>
      <div className={styles.contactsTitleBlockContainer}>
        <h3 className={`${styles.contactsSubTitle} ${inter.variable}`}>{t('subTitle')}</h3>
        <h2 className={styles.contactsTitle}>{t('title')}</h2>
        <span className={styles.contactsText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim.
        </span>
      </div>
      <div className={styles.contactsSheduleBlockContainer}>
        <div className={styles.scheduleBlock}>
          <span className={`${styles.scheduleSubTitle} ${interRegular.variable}`}>
            {t('scheduleTitle')}
          </span>
          <h4 className={styles.scheduleTitle}>{t('scheduleDays')}</h4>
          <h4 className={styles.scheduleTitle}>{t('scheduleHours')}</h4>
          <span className={styles.scheduleText}>{t('scheduleSubtitle')}</span>
        </div>
        <div className={styles.scheduleBlock}>
          <span className={`${styles.scheduleSubTitle} ${interRegular.variable}`}>
            {t('scheduleContactsTitle')}
          </span>
          <h4 className={styles.scheduleTitle}>020 7993 2905</h4>
          <span className={styles.scheduleText}>hello@finsweet.com</span>
        </div>
      </div>
      <ConversationForm />
    </section>
  );
}
