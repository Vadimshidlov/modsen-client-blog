import React from 'react';
import styles from '@/widgets/Header/ui/BlurBackground/BlurBackground.module.scss';

export function BlurBackground({ onClick }: { onClick: () => void }) {
  return <div className={styles.blurBackground} onClick={onClick} onKeyDown={onClick} />;
}
