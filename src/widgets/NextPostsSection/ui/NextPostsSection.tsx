import React from 'react';
import styles from '@/widgets/NextPostsSection/ui/NextPostsSection.module.scss';
import { POSTS } from '@/shared/constants/posts';
import { NextPostItem } from '@/widgets/NextPostsSection/ui/NextPostItem';

export type NextPostsSectionPropsType = {
  activePostId: number;
};

export function NextPostsSection({ activePostId }: NextPostsSectionPropsType) {
  const filteredPosts = POSTS.filter((postData) => postData.id !== activePostId);

  return (
    <section className={styles.nextPostSection}>
      <h2 className={styles.sectionTitle}>What to read next</h2>
      <div className={styles.nextPostsContainer}>
        {filteredPosts.slice(0, 3).map(({ id, text, postDate, title, author, img }) => (
          <NextPostItem
            postId={id}
            postText={text}
            postTitle={title}
            postDate={postDate}
            postAuthor={author}
            postImage={img}
          />
        ))}
      </div>
    </section>
  );
}
