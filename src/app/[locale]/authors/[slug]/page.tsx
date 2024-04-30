import React from 'react';
import { AuthorSection } from '@/widgets/AuthorSection';
import { AUTHORS_LIST } from '@/shared/constants/authors';

export type AuthorPageProps = {
  params: {
    slug: number;
  };
};

export default function Author({ params: { slug } }: AuthorPageProps) {
  const { name, largeImg } = AUTHORS_LIST.filter(
    (searchedAuthor) => searchedAuthor.id === Number(slug),
  )[0];

  return (
    <main>
      <AuthorSection name={name} img={largeImg} />
    </main>
  );
}
