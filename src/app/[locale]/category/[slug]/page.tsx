import { CategoriesSection } from '@/widgets/CategoriesSection';
import { CategoryTitle } from '@/widgets/CategoryTitle';

export type CategoryProps = {
  params: {
    slug: string;
  };
};

export default function Category({ params: { slug } }: CategoryProps) {
  return (
    <main>
      <CategoryTitle categoryName={slug} />
      <CategoriesSection selectedCategory={slug} />
    </main>
  );
}
