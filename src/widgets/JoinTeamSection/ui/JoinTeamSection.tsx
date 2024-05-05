import React from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Button } from '@/shared/ui/Button';
import styles from '@/widgets/JoinTeamSection/ui/JoinTeamSection.module.scss';

export function JoinTeamSection() {
  const t = useTranslations('JoinTeamSection');

  return (
    <section className={styles.joinTeamSection}>
      <h2 className={styles.sectionTitle}>{t('title')}</h2>
      <span className={styles.sectionText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
      </span>
      <Button>
        <Link href="/contacts">{t('buttonText')}</Link>
      </Button>
    </section>
  );
}
