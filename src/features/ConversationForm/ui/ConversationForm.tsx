'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import styles from '@/features/ConversationForm/ui/ConversationForm.module.scss';
import { Inter } from 'next/font/google';
import { Button } from '@/shared/ui/Button';
import { CATEGORIES } from '@/shared/constants/categories';
import selectIconSrc from '@/features/ConversationForm/assets/select-icon.svg';
import { ErrorMessage, Field, Form, Formik, FormikHelpers, FormikValues } from 'formik';
import { conversationFormScheme } from '@/features/ConversationForm/constants/scheme';
import { useTranslations } from 'next-intl';

const inter = Inter({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-inter',
});

export type ConversationFormType = {
  userName: string;
  email: string;
  query: string;
  message: string;
};

export function ConversationForm() {
  const t = useTranslations('ConversationForm');
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!), []);

  const sendForm = (
    data: FormikValues,
    { setSubmitting, resetForm }: FormikHelpers<ConversationFormType>,
  ) => {
    if (!formRef.current) return;

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ONE as string,
        {
          to_name: 'Vadim Shydlou',
          userName: data.userName,
          userEmail: data.email,
          query: data.query,
          message: data.message,
        },
      )
      .then(
        () => {
          toast.success('The data has been successfully sent!');
          resetForm();
        },
        () => {
          toast.error('Error during data sending!');
        },
      )
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <Formik
      validationSchema={conversationFormScheme}
      initialValues={{ userName: '', email: '', message: '', query: 'Startup' }}
      onSubmit={sendForm}
    >
      {({ isSubmitting }) => (
        <Form className={styles.conversationForm} ref={formRef} data-testid="conversation-form">
          <label htmlFor="userName">
            <Field
              className={`${styles.textInput} ${inter.variable}`}
              type="text"
              name="userName"
              placeholder={t('namePlaceholder')}
              data-testid="userName-input"
            />
            <ErrorMessage className={styles.validationError} name="userName" component="div" />
          </label>
          <label htmlFor="email">
            <Field
              className={`${styles.textInput} ${inter.variable}`}
              type="email"
              name="email"
              placeholder={t('emailPlaceholder')}
              data-testid="email-input"
            />
            <ErrorMessage className={styles.validationError} name="email" component="div" />
          </label>
          <div className={styles.selectCategoryWrapper}>
            <Field
              as="select"
              className={styles.selectCategory}
              name="query"
              data-testid="conversation-select"
            >
              {CATEGORIES.map(({ title }) => (
                <option className="select__item" value={title} key={title}>
                  {title}
                </option>
              ))}
            </Field>
            <Image className={styles.selectIcon} src={selectIconSrc} alt="select-icon" />
          </div>
          <label htmlFor="message">
            <Field
              as="textarea"
              className={`${styles.textInput} ${styles.conversationMessage}`}
              name="message"
              id="message"
              placeholder={t('messagePlaceholder')}
              data-testid="message-input"
            />
            <ErrorMessage className={styles.validationError} name="message" component="div" />
          </label>
          <Button
            isFormButton
            isSubmitting={isSubmitting}
            disabled={isSubmitting}
            data-testid="conversation-submit-button"
          >
            {isSubmitting ? 'Loading...' : `${t('buttonText')}`}
          </Button>
        </Form>
      )}
    </Formik>
  );
}
