'use client';

import React, { useEffect, useRef } from 'react';
import { ErrorMessage, Field, Form, Formik, FormikHelpers, FormikValues } from 'formik';
import emailjs from '@emailjs/browser';
import styles from '@/features/LettersForm/ui/LettersForm.module.scss';
import { Button } from '@/shared/ui/Button';
import { lettersFormScheme } from '@/features/LettersForm/constants/scheme';
import { toast } from 'react-toastify';
import { useTranslations } from 'next-intl';

export type LettersFormType = {
  email: string;
};

export function LettersForm() {
  const t = useTranslations('LettersForm');
  const buttonText = t('buttonText');

  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string), []);

  const sendEmail = (
    data: FormikValues,
    { setSubmitting, resetForm }: FormikHelpers<LettersFormType>,
  ) => {
    setSubmitting(true);

    if (!formRef.current || data.email === '') return;

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_TWO as string,
        {
          name: 'Vadim Shydlou',
          email: data.email,
        },
      )
      .then(
        () => {
          toast.success('Subscription is successful!');
          resetForm();
        },
        () => {
          toast.error('Error with subscription!');
        },
      )
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <div className={styles.form__container}>
      <h3 className={styles.form__title}>{t('title')}</h3>
      <Formik
        validationSchema={lettersFormScheme}
        initialValues={{ email: '' }}
        onSubmit={sendEmail}
      >
        {({ isSubmitting }) => (
          <Form className={styles.form} ref={formRef}>
            <label htmlFor="email" className={styles.formLabel}>
              <Field
                type="text"
                name="email"
                id="email"
                className={styles.formInput}
                placeholder={t('inputPlaceholder')}
                autoComplete="off"
              />
              <ErrorMessage className={styles.validationError} name="email" component="div" />
            </label>
            <Button isFormButton isSubmitting={isSubmitting} disabled={isSubmitting}>
              {isSubmitting ? 'Loading...' : `${buttonText}`}
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
