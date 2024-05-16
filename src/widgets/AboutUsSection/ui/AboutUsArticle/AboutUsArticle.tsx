import React from 'react';
import styles from '@/widgets/AboutUsSection/ui/AboutUsArticle/AboutUsArticle.module.scss';

export type AboutUsArticlePropsType = {
  title: string;
  subTitle: string;
  text: string;
};

export function AboutUsArticle({ title, subTitle, text }: AboutUsArticlePropsType) {
  return (
    <article className={styles.aboutUsTextContent}>
      <h2 className={styles.aboutUsTeamTitle}>{title}</h2>
      <h4 className={styles.aboutUsTeamSubtitle}>{subTitle}</h4>
      <span className={styles.aboutUsText}>{text}</span>
    </article>
  );
}
