import React from 'react';
import styles from '@/widgets/PostsSection/ui/PostItem/PostItem.module.scss';
import { PostItemProps } from '@/shared/types';

export function PostItem({ postText, postDate, authorName }: PostItemProps) {
  return (
    <div className={styles.post__container}>
      <span className={styles.post__authorInfo}>
        By&nbsp;
        <span>{authorName}</span>
        &nbsp;
        {postDate}
      </span>
      <h4 className={styles.post__text}>{postText}</h4>
    </div>
  );
}
