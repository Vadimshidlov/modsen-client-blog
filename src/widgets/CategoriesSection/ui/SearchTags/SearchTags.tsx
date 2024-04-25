import React from 'react';
import styles from '@/widgets/CategoriesSection/ui/SearchTags/SearchTags.module.scss';
import { SEARCH_TAGS } from '@/widgets/CategoriesSection/constants/constants';

export type SearchTagsPropsTypes = {
  selectTags: string[];
  setSelectTags: React.Dispatch<React.SetStateAction<string[]>>;
};

export function SearchTags({ selectTags, setSelectTags }: SearchTagsPropsTypes) {
  return (
    <div className={styles.searchTagsContainer}>
      <h2 className={styles.searchTagsTitle}>All Tags</h2>
      <ul className={styles.searchTagsList}>
        {SEARCH_TAGS.map((searchTag) => {
          const isActiveTag = selectTags.includes(searchTag);

          return (
            <li
              key={searchTag}
              className={`${styles.searchTagItem} ${isActiveTag ? `${styles.activeTag}` : ''}`}
              onClick={() => {
                const preparedTagsList = selectTags.includes(searchTag)
                  ? selectTags.filter((tag) => tag !== searchTag)
                  : [...selectTags, searchTag];

                setSelectTags([...preparedTagsList]);
              }}
            >
              {searchTag}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
