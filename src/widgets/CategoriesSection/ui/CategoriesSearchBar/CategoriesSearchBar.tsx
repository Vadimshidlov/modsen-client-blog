'use client';

import React, { ChangeEvent, useMemo, useState } from 'react';
import styles from '@/widgets/CategoriesSection/ui/CategoriesSearchBar/CategoriesSearchBar.module.scss';
import { Button } from '@/shared/ui/Button';
import { POSTS } from '@/shared/constants/posts';
import Link from 'next/link';
import { useDebounce } from '@/shared/utils';

export function CategoriesSearchBar() {
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
          placeholder="Search for tag..."
          value={searchValue}
          onChange={handleSearValueChange}
        />
        <div className={styles.searchButtonWrapper}>
          <Button className={styles.searchButton} isPrimary={false}>
            Search
          </Button>
        </div>
      </form>
      <ul className={styles.filteredPosts}>
        {searchValue !== '' &&
          filteredPosts.length !== 0 &&
          filteredPosts.slice(0, 5).map(({ title, tags, id }) => (
            <li className={styles.filteredPost} key={id}>
              <Link href={`/posts/${id}`}>
                <h3 className={styles.filteredPostTitle}>{title}</h3>
                <span className={styles.filteredPostTags}>{tags.join(', ')}</span>
              </Link>
            </li>
          ))}
        {searchValue !== '' && filteredPosts.length === 0 && (
          <li className={styles.filteredPostsNotFound}>Posts not found</li>
        )}
      </ul>
    </div>
  );
}
