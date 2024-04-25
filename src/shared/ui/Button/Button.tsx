import React, { ReactNode } from 'react';
import styles from '@/shared/ui/Button/Button.module.scss';

export type ButtonPropsType = {
  children: ReactNode;
  isPrimary?: boolean;
} & React.ComponentPropsWithRef<'button'>;

export function Button({ children, isPrimary = true }: ButtonPropsType) {
  return (
    <button className={`${styles.button} ${isPrimary ? '' : `${styles.borderedButton}`}`}>
      {children}
    </button>
  );
}
