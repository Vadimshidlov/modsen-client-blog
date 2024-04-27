import React from 'react';
import container from '@/shared/styles/container.module.scss';
import { Inter } from 'next/font/google';
import { ConversationForm } from '@/features/ConversationForm';
import styles from './ContactsSection.module.scss';

const inter = Inter({
  subsets: ['latin'],
  weight: '900',
  variable: '--font-inter',
});

const interSecond = Inter({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-inter',
});

export function ContactsSection() {
  return (
    <section className={`${styles.contactsSection} ${container.container}`}>
      <div className={styles.contactsTitleBlockContainer}>
        <h3 className={`${styles.contactsSubTitle} ${inter.variable}`}>CONTACT US</h3>
        <h2 className={styles.contactsTitle}>Let’s Start a Conversation</h2>
        <span className={styles.contactsText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim.
        </span>
      </div>
      <div className={styles.contactsSheduleBlockContainer}>
        <div className={styles.scheduleBlock}>
          <span className={`${styles.scheduleSubTitle} ${interSecond.variable}`}>
            Working hours
          </span>
          <h4 className={styles.scheduleTitle}>Monday To Friday</h4>
          <h4 className={styles.scheduleTitle}>9:00 AM to 8:00 PM</h4>
          <span className={styles.scheduleText}>Our Support Team is available 24/7</span>
        </div>
        <div className={styles.scheduleBlock}>
          <span className={`${styles.scheduleSubTitle} ${interSecond.variable}`}>Contact Us</span>
          <h4 className={styles.scheduleTitle}>020 7993 2905</h4>
          <span className={styles.scheduleText}>hello@finsweet.com</span>
        </div>
      </div>
      <ConversationForm />
    </section>
  );
}
