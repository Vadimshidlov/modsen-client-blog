'use client';

import { useState } from 'react';
import styles from '@/widgets/CategoriesSection/ui/CategoriesSection.module.scss';
import container from '@/shared/styles/container.module.scss';
import { CategoriesSearchBar } from '@/widgets/CategoriesSection/ui/CategoriesSearchBar';
import { POSTS } from '@/shared/constants/posts';
import { PostItem } from '@/widgets/PostItem';
import { Categories } from '@/widgets/CategoriesSection/ui/Categories';
import { SearchTags } from '@/widgets/CategoriesSection/ui/SearchTags';
import { useTranslations } from 'next-intl';
import { CategoriesSectionPropsType } from '@/shared/types';

export function CategoriesSection({ selectedCategory }: CategoriesSectionPropsType) {
  const t = useTranslations('CategoriesSection');

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
          <span className={styles.postsNotFountTitle}>{t('notFoundMessage')}</span>
        )}
        {filteredPosts.length !== 0 &&
          filteredPosts
            .slice(0, 3)
            .map(({ id, img, category, title, text }) => (
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
