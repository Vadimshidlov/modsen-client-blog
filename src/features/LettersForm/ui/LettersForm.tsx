'use client';

import React from 'react';
import styles from '@/features/LettersForm/ui/LettersForm.module.scss';
import { Button } from '@/shared/ui/Button';

export function LettersForm() {
  return (
    <div className={styles.form__container}>
      <h3 className={styles.form__title}>
        Subscribe to our news letter to get latest updates and news
      </h3>
      <form className={styles.form}>
        <input type="text" className={styles.form__input} placeholder="Enter Your Email" />
        <Button>Subscribe</Button>
      </form>
    </div>
  );
}
