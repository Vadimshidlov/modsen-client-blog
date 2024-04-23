import React from 'react';
import styles from '@/widgets/AuthorsSection/ui/AuthorsSection.module.scss';
import { AUTHORS_LIST } from '@/shared/constants/authors';
import { Author } from '@/widgets/AuthorsSection/ui/Author';
import container from '@/shared/styles/container.module.scss';

export function AuthorsSection() {
  return (
    <section className={`${styles.authorsSection} ${container.container}`}>
      <div className={styles.authorsInfoBlock}>
        <h2 className={styles.authorsTitle}>List of Authors</h2>
        <ul className={styles.authorsContainer}>
          {AUTHORS_LIST.slice(0, 4).map(({
            id, name, job, company, img,
          }) => (
            <Author key={id} name={name} job={job} company={company} avatarSrc={img} />
          ))}
        </ul>
      </div>
    </section>
  );
}
