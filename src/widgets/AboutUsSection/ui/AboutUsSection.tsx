import React from 'react';
import { AboutUsTitle } from '@/widgets/AboutUsSection/ui/AboutUsTitle';
import { AboutUsOverwiev } from '@/widgets/AboutUsSection/ui/AboutUsOverwiev';
import { AboutUsMission } from '@/widgets/AboutUsSection/ui/AboutUsMission';
import { AboutUsTeam } from '@/widgets/AboutUsSection/ui/AboutUsTeam';
import { AboutUsStartedBlock } from '@/widgets/AboutUsSection/ui/AboutUsStartedBlock';
import styles from '@/widgets/AboutUsSection/ui/AboutUsSection.module.scss';
import container from '@/shared/styles/container.module.scss';

export function AboutUsSection() {
  return (
    <section className={`${styles.aboutUsSection} ${container.container}`}>
      <AboutUsTitle />
      <AboutUsOverwiev />
      <AboutUsMission />
      <AboutUsTeam />
      <AboutUsStartedBlock />
    </section>
  );
}
