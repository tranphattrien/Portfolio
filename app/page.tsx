import About from "@/components/about";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Project from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skill from "@/components/skill";
export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Project />
      <Skill />
      <Experience />
    </main>
  );
}
