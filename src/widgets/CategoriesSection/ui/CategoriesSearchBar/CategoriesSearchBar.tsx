'use client';

import React, { ChangeEvent, useMemo, useState } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useDebounce } from '@/shared/utils';
import { Button } from '@/shared/ui/Button';
import { POSTS } from '@/shared/constants/posts';
import styles from '@/widgets/CategoriesSection/ui/CategoriesSearchBar/CategoriesSearchBar.module.scss';

export function CategoriesSearchBar() {
  const t = useTranslations('CategoriesSearchBar');

  const [searchValue, setSearchValue] = useState('');
  const searchValueDebounced = useDebounce(searchValue, 500);

  const handleSearValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setSearchValue(value);
  };

  const filteredPosts = useMemo(
    () =>
      POSTS.filter((postData) =>
        postData.tags.some((tagData) =>
          tagData.toLowerCase().includes(searchValueDebounced.toLowerCase()),
        ),
      ),
    [searchValueDebounced],
  );

  return (
    <div className={styles.searchBarContainer}>
      <form action="submit" className={styles.searchBarForm}>
        <input
          className={styles.searchInput}
          type="text"
          placeholder={t('inputPlaceholder')}
          value={searchValue}
          onChange={handleSearValueChange}
          data-testid="searchTag-input"
        />
        <div className={styles.searchButtonWrapper}>
          <Button className={styles.searchButton} isPrimary={false}>
            {t('buttonText')}
          </Button>
        </div>
      </form>
      <ul className={styles.filteredPosts}>
        {searchValue !== '' &&
          filteredPosts.length !== 0 &&
          filteredPosts.slice(0, 5).map(({ title, tags, id }) => (
            <li className={styles.filteredPost} key={id}>
              <Link href={`/posts/${id}`} data-testid={`searched-post-${id}`}>
                <h3 className={styles.filteredPostTitle}>{title}</h3>
                <span className={styles.filteredPostTags}>{tags.join(', ')}</span>
              </Link>
            </li>
          ))}
        {searchValue !== '' && filteredPosts.length === 0 && (
          <li className={styles.filteredPostsNotFound} data-testid="not-found-posts">
            Posts not found
          </li>
        )}
      </ul>
    </div>
  );
}
