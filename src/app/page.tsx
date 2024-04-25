import { StartUpSection } from '@/widgets/StartUpSection/ui/StartUpSection';
import { PostsSection } from '@/widgets/PostsSection/ui/PostsSection';
import { HomeAboutUs } from '@/widgets/HomeAboutUs';
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
      <HomeAboutUs />
      <ChooseCategorySection />
      <SpecialPostSection />
      <AuthorsSection isShortVerison />
      <LogosSection />
      <TestimonialsSection />
      <JoinTeamSection />
    </main>
  );
}
