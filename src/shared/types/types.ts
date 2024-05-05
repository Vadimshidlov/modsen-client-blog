import { StaticImageData } from 'next/image';
import React from 'react';

export type AuthorSectionPropsType = {
  img: string | StaticImageData;
  name: string;
};

export type AuthorPostsPropsType = {
  authorName: string;
};

export type AuthorOverviewPropsType = {
  img: string | StaticImageData;
  name: string;
};

export type AuthorPropsType = {
  avatarSrc: string | StaticImageData;
  name: string;
  id: number;
  job: string;
  company: string;
};

export type AuthorsSectionPropsType = {
  isShortVersion?: boolean;
};

export type SearchTagsPropsTypes = {
  selectTags: string[];
  setSelectTags: React.Dispatch<React.SetStateAction<string[]>>;
};

export type CategoriesSectionPropsType = {
  selectedCategory: string;
};

export type CategoryTitlePropsType = {
  categoryName: string;
};

export type NavigationLinksType = {
  text: string;
  link: string;
};

export type NavigationBarPropsType = {
  navigationLinks: NavigationLinksType[];
};

export type NextPostsSectionPropsType = {
  activePostId: number;
};

export type PostItemPropsType = {
  id: number;
  title: string;
  text: string;
  category: string;
  img: string | StaticImageData;
};

export type PostItemProps = {
  authorName: string;
  postDate: string;
  postText: string;
};
