import React from 'react';
import { BlogFeaturedPost } from '@/widgets/BlogSection/ui/BlogFeaturedPost';
import { AllPostSection } from '@/widgets/BlogSection/ui/AllPostSection';

export function BlogSection() {
  return (
    <section>
      <BlogFeaturedPost />
      <AllPostSection />
    </section>
  );
}
