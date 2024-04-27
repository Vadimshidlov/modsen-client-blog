import React, { ReactNode } from 'react';
import styles from '@/shared/ui/Button/Button.module.scss';

export type ButtonPropsType = {
  children: ReactNode;
  isPrimary?: boolean;
  isFormButton?: boolean;
} & React.ComponentPropsWithRef<'button'>;

export function Button({ children, isFormButton = false, isPrimary = true }: ButtonPropsType) {
  let buttonClasses = styles.button;

  if (isFormButton) {
    buttonClasses += ` ${styles.fullWidth}`;
  } else if (!isPrimary) {
    buttonClasses += ` ${styles.borderedButton}`;
  }

  return <button className={buttonClasses}>{children}</button>;
}
