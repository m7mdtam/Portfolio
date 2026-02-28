import type { AboutProps } from "@/types/about.types";
import { AboutText, AboutStats } from ".";

const About = ({ data }: AboutProps) => (
  <section className="relative w-full py-24 px-6 md:px-12 lg:px-20 overflow-hidden">
    <div className="absolute top-0 left-6 right-6 md:left-12 md:right-12 lg:left-20 lg:right-20 h-px bg-border" />
    <div className="max-w-5xl mx-auto flex flex-col gap-14">
      <AboutText tag={data.tag} heading={data.heading} bio={data.bio} />
      <AboutStats stats={data.stats} />
    </div>
  </section>
);

export default About;
