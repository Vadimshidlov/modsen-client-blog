import React from 'react';
import { AUTHORS_LIST } from '@/shared/constants/authors';
import { Author } from '@/widgets/AuthorsSection/ui/Author';
import { useTranslations } from 'next-intl';
import { AuthorsSectionPropsType } from '@/shared/types';
import container from '@/shared/styles/container.module.scss';
import styles from '@/widgets/AuthorsSection/ui/AuthorsSection.module.scss';

export function AuthorsSection({ isShortVersion = true }: AuthorsSectionPropsType) {
  const t = useTranslations('AuthorsSection');

  const authorsList = isShortVersion ? AUTHORS_LIST.slice(0, 4) : AUTHORS_LIST;

  return (
    <section className={`${styles.authorsSection} ${container.container}`}>
      <div className={styles.authorsInfoBlock}>
        <h2 className={styles.authorsTitle}>{t('title')}</h2>
        <ul className={styles.authorsContainer}>
          {authorsList.map(({ id, name, job, company, img }) => (
            <Author key={id} id={id} name={name} job={job} company={company} avatarSrc={img} />
          ))}
        </ul>
      </div>
    </section>
  );
}
