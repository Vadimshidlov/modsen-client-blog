import React, { ReactNode } from 'react';
import styles from '@/shared/ui/Button/Button.module.scss';

export type ButtonPropsType = {
  children: ReactNode;
  isPrimary?: boolean;
  disabled?: boolean;
  isFormButton?: boolean;
  isSubmitting?: boolean;
} & React.ComponentPropsWithRef<'button'>;

export function Button({
  children,
  disabled = false,
  isSubmitting = false,
  isFormButton = false,
  isPrimary = true,
}: ButtonPropsType) {
  let buttonClasses = styles.button;

  if (isFormButton) {
    buttonClasses += ` ${styles.fullWidth}`;
  } else if (!isPrimary) {
    buttonClasses += ` ${styles.borderedButton}`;
  }

  if (isSubmitting) {
    buttonClasses += ` ${styles.isSubmitting}`;
  }

  return (
    <button disabled={disabled} type={isFormButton ? 'submit' : 'button'} className={buttonClasses}>
      {children}
    </button>
  );
}
