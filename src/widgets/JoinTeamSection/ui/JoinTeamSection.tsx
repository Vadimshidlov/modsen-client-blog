import React from 'react';
import styles from '@/widgets/JoinTeamSection/ui/JoinTeamSection.module.scss';
import { Button } from '@/shared/ui/Button';
import Link from 'next/link';

export function JoinTeamSection() {
  return (
    <section className={styles.joinTeamSection}>
      <h2 className={styles.sectionTitle}>Join our team to be a part of our story</h2>
      <span className={styles.sectionText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
      </span>
      <Button>
        <Link href="/contacts">Join Now</Link>
      </Button>
    </section>
  );
}
