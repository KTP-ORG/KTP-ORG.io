// app/page.tsx

import FoundingTeam from "./components/founder";
import HeroSection from "./components/hero";
import MissionVision from "./components/mv";
import CompanyOverview from "./components/overview";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CompanyOverview />
      <FoundingTeam />
      <MissionVision />
    </>
  )
}