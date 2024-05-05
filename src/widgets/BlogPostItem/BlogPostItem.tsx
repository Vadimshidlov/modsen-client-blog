import React from 'react';
import Image from 'next/image';
import { POSTS } from '@/shared/constants/posts';
import { AuthorTitleCard } from '@/shared/ui/AuthorTitleCard';
import { AUTHORS_LIST } from '@/shared/constants/authors';
import styles from '@/widgets/BlogPostItem/BlogPostItem.module.scss';

export function BlogPostItem({ postId }: { postId: number }) {
  const selectedPostData = POSTS.filter((postData) => postData.id === postId)[0];
  const { postDate, author, categoryIcon, title, category, img: postImage } = selectedPostData;
  const postAuthorData = AUTHORS_LIST.filter((authorData) => authorData.name === author)[0];
  const { img: authorAvatar, id: authorId } = postAuthorData;

  return (
    <section className={styles.blogPostContainer}>
      <div className={styles.postPreviewBlock}>
        <AuthorTitleCard
          authorId={authorId}
          src={authorAvatar}
          title={author}
          subtitle={`Posted on ${postDate}`}
        />
        <h1 className={styles.postPreviewTitle}>{title}</h1>

        <div className={styles.postCategoryInfo}>
          <Image className={styles.postCategoryImage} src={categoryIcon} alt="category-pic" />
          <span className={styles.postCategoryName}>{category}</span>
        </div>
      </div>
      <Image className={styles.postImage} src={postImage} alt="post-image" />
      <article className={styles.postText}>
        <div className={styles.firstPartTextWrapper}>
          <h2 className={styles.postTextTitle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
          </h2>
          <span className={styles.postTextMessage}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque
            viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque
            penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo.
            Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque
            non.
          </span>
        </div>
        <div className={styles.secondPartTextWrapper}>
          <h2 className={styles.postTextTitle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
          </h2>
          <span className={styles.postTextMessage}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque
            viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque
            penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo.
            Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque
            non.
          </span>
          <span className={styles.postTextMessage}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque
            viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque
            penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo.
            Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque
            non.
          </span>
          <ul className={styles.postTextList}>
            <li className={styles.postTextListItem}>Lorem ipsum dolor sit amet</li>
            <li className={styles.postTextListItem}>Non blandit massa enim nec scelerisque</li>
            <li className={styles.postTextListItem}>Neque egestas congue quisque egestas</li>
          </ul>
          <span className={styles.postTextMessage}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque
            viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque
            penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo.
            Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque
            non.
          </span>
        </div>
        <div className={styles.threePartTextWrapper}>
          <h2 className={styles.postTextTitle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
          </h2>
          <span className={styles.postTextMessage}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque
            viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque
            penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo.
            Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque
            non.
          </span>
        </div>
      </article>
    </section>
  );
}
