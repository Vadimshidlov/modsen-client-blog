import React, { ReactNode } from 'react';
import styles from '@/shared/ui/Button/Button.module.scss';

export type ButtonPropsType = {
  children: ReactNode;
} & React.ComponentPropsWithRef<'button'>;

export function Button({ children }: ButtonPropsType) {
  return <button className={styles.button}>{children}</button>;
}
