'use client';

import React, { useState } from 'react';
import styles from '@/widgets/CategoriesSection/ui/CategoriesSection.module.scss';
import container from '@/shared/styles/container.module.scss';
import { CategoriesSearchBar } from '@/widgets/CategoriesSection/ui/CategoriesSearchBar';
import { POSTS } from '@/shared/constants/posts';
import { PostItem } from '@/widgets/PostItem';
import { Categories } from '@/widgets/CategoriesSection/ui/Categories';
import { SearchTags } from '@/widgets/CategoriesSection/ui/SearchTags';

export type CategoriesSectionPropsType = {
  selectedCategory: string;
};

export function CategoriesSection({ selectedCategory }: CategoriesSectionPropsType) {
  const [selectTags, setSelectTags] = useState<string[]>([]);

  const filteredPosts = POSTS.filter(
    (postData) =>
      postData.category.toLowerCase() === selectedCategory.toLowerCase() &&
      (selectTags.length === 0 || postData.tags.some((tag) => selectTags.includes(tag))),
  );

  return (
    <section className={`${styles.categoriesSection} ${container.container}`}>
      <div className={styles.postsContainer}>
        {filteredPosts.length === 0 && (
          <span className={styles.postsNotFountTitle}>There are not posts with selected tags</span>
        )}
        {filteredPosts.length !== 0 &&
          filteredPosts.map(({ id, img, category, title, text }) => (
            <PostItem category={category} id={id} img={img} text={text} title={title} key={id} />
          ))}
      </div>
      <div className={styles.searchBarWrapper}>
        <SearchTags selectTags={selectTags} setSelectTags={setSelectTags} />
        <CategoriesSearchBar />
        <Categories />
      </div>
    </section>
  );
}
