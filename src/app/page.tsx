import { StartUpSection } from '@/widgets/StartUpSection/ui/StartUpSection';
// import { Sen } from 'next/font/google';
import { PostsSection } from '@/widgets/PostsSection/ui/PostsSection';
import { AboutUsSection } from '@/widgets/AboutUsSection';
import { ChooseCategorySection } from '@/widgets/ChooseCategorySection';
import { SpecialPostSection } from '@/widgets/SpecialPostSection';
import { AuthorsSection } from '@/widgets/AuthorsSection';
import { LogosSection } from '@/widgets/LogosSection';
import { TestimonialsSection } from '@/widgets/TestimonialsSection';
import { JoinTeamSection } from '@/widgets/JoinTeamSection';

export default function Home() {
  return (
    <main>
      <StartUpSection />
      <PostsSection />
      <AboutUsSection />
      <ChooseCategorySection />
      <SpecialPostSection />
      <AuthorsSection />
      <LogosSection />
      <TestimonialsSection />
      <JoinTeamSection />
    </main>
  );
}
