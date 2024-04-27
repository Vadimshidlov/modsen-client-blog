import React from 'react';
import Image from 'next/image';
import styles from '@/features/ConversationForm/ui/ConversationForm.module.scss';
import { Inter } from 'next/font/google';
import { Button } from '@/shared/ui/Button';
import { CATEGORIES } from '@/shared/constants/categories';
import selectIconSrc from '@/features/ConversationForm/assets/select-icon.svg';

const inter = Inter({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-inter',
});

export function ConversationForm() {
  return (
    <form className={styles.conversationForm}>
      <input
        className={`${styles.textInput} ${inter.variable}`}
        type="text"
        placeholder="Full Name"
      />
      <input
        className={`${styles.textInput} ${inter.variable}`}
        type="email"
        placeholder="Your Email"
      />
      <div className={styles.selectCategoryWrapper}>
        <select className={styles.selectCategory}>
          {CATEGORIES.map(({ title }) => (
            <option className="select__item" value={title} key={title}>
              {title}
            </option>
          ))}
        </select>
        <Image className={styles.selectIcon} src={selectIconSrc} alt="select-icon" />
      </div>
      <textarea
        className={`${styles.textInput} ${styles.conversationMessage}`}
        name="message"
        id=""
        placeholder="Message"
      />
      <Button isFormButton>Send Message</Button>
    </form>
  );
}
