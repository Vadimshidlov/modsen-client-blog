import { ChooseCategorySection } from '@/widgets/ChooseCategorySection';
import { JoinTeamSection } from '@/widgets/JoinTeamSection';
import { BlogSection } from '@/widgets/BlogSection/ui/BlogSection';

export default function Blog() {
  return (
    <main>
      <BlogSection />
      <ChooseCategorySection />
      <JoinTeamSection />
    </main>
  );
}
