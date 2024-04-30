import { AboutUsSection } from '@/widgets/AboutUsSection';
import { AuthorsSection } from '@/widgets/AuthorsSection';
import { JoinTeamSection } from '@/widgets/JoinTeamSection';

export default function AboutUs() {
  return (
    <main>
      <AboutUsSection />
      <AuthorsSection isShortVerison={false} />
      <JoinTeamSection />
    </main>
  );
}
