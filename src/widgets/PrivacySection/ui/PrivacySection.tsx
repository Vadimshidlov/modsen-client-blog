import React from 'react';
import styles from '@/widgets/PrivacySection/ui/PrivacySection.module.scss';
import { Inter } from 'next/font/google';
import { useTranslations } from 'next-intl';

const inter = Inter({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-inter',
});

export function PrivacySection() {
  const t = useTranslations('PrivacySection');

  return (
    <section className={styles.privacySectionContainer}>
      <div className={styles.privacyTitleContainer}>
        <h1 className={styles.privacyTitle}>{t('title')}</h1>
        <span className={`${styles.privacyText} ${inter.variable}`}>{t('subTitle')}</span>
      </div>
      <article className={styles.privacyDescriptionContainer}>
        <h2 className={styles.descriptionTitle}>Lorem ipsum dolor sit amet</h2>
        <span className={styles.descriptionText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam
          sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis
          parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque
          egestas diam. Risus in hendrerit gravida rutrum quisque non. Sit amet nulla facilisi morbi
          tempus iaculis urna. Lorem sed risus ultricies tristique nulla aliquet enim. Volutpat
          blandit aliquam etiam erat velit. Orci eu lobortis elementum nibh. Ipsum suspendisse
          ultrices gravida dictum fusce ut placerat orci nulla. Neque convallis a cras semper auctor
          neque vitae tempus quam.
        </span>
        <h3 className={styles.descriptionSubTitle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
        </h3>
        <span className={styles.descriptionText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris
          in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et
          magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas
          congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non. Sit amet nulla
          facilisi morbi tempus iaculis urna. Lorem sed risus ultricies tristique nulla aliquet
          enim. Volutpat blandit aliquam etiam erat velit. Orci eu lobortis elementum nibh. Ipsum
          suspendisse ultrices gravida dictum fusce ut placerat orci nulla. Neque convallis a cras
          semper auctor neque vitae tempus quam.
          <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris
          in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et
          magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas
          congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non. Sit amet nulla
          facilisi morbi tempus iaculis urna. Lorem sed risus ultricies tristique nulla aliquet
          enim. Volutpat blandit aliquam etiam erat velit. Orci eu lobortis elementum nibh. Ipsum
          suspendisse ultrices gravida dictum fusce ut placerat orci nulla. Neque convallis a cras
          semper auctor neque vitae tempus quam.
        </span>
      </article>
    </section>
  );
}
