"use client";
import {
  ExperienceCard,
  ExperienceCardProps,
} from "@/components/ui/ExperienceCard";

const content: ExperienceCardProps[] = [
  {
    period: "Aug 2024 — Present",
    position: "Founding Designer & Head of Product Design",
    company: "Stealth AI Startup",
    description: [
      "Establishing and leading the design team for a Stealth AI Startup set to bring the New Era of Money. My role involves founding and leading the design team, setting the vision and standards for design excellence, direct branding and actively contributing to hands-on product design for going to market.",
    ],
    skills: [
      "Brand Identity",
      "Product Design",
      "UI/UX Design",
      "Design Systems",
      "Design Strategy",
      "Team Leadership",
    ],
  },
  {
    period: "Mar 2024 — Present",
    position: "Head of Product Design",
    company: "Vela Exchange",
    description: [
      "Leading the design team for Vela Exchange, a community-first, decentralized perpetuals trading platform. My role involves setting the vision and standards for design excellence, and actively contributing to hands-on product design.",
    ],
    skills: [
      "Product Design",
      "UI/UX Design",
      "Design Systems",
      "Design Strategy",
      "Team Leadership",
    ],
  },
  {
    period: "Feb 2022 — Presents",
    position: "Co-founder, Designer & Developer",
    company: "Swoop Exchange",
    description: [
      "Co-founded, designed, and developed a Next-Gen Decentralized Exchange from MVP to launch, scaling from zero to over $10M in trading volume. Swoop Exchange is powered by a novel Meta-Aggregation Engine that leverages sophisticated routing algorithms and APIs to automatically route trades from the most profitable liquidity sources, vastly improving swap efficiency and user experience.",
    ],
    skills: [
      "Typescript",
      "JavaScript",
      "CSS",
      "Tailwind CSS",
      "MUI",
      "HTML",
      "Figma",
      "UI/UX Design",
      "Blockchain tech",
      "Project Management",
      "Planning",
      "Leadership",
      "Testing & QA",
    ],
  },
  {
    period: "Aug 2016 — Mar 2024",
    position: "Head of QA",
    company: "Lykomitros Steel",
    description: [
      "Lead the QA department, focusing on renewable energy components in steel manufacturing. Maintained industry and client standards, ensuring product integrity for renewable energy.",
    ],
    skills: [
      "ISO Compliance",
      "Quality Assurance",
      "Engineering Management",
      "ISO 9001",
      "ISO 45001",
      "ISO 14001",
      "Requirement Assessment",
      "Auditing",
    ],
  },
  {
    period: "Nov 2013 - May 2014",
    position: "Digital Systems Admin - Internship",
    company: "OTE Group (HTO)",
    description: [
      "Gained valuable experience in digital systems administration, focusing on the management of contractors and capital.",
    ],
    skills: [
      "SQL",
      "Administration",
      "Problem-Solving",
      "Computer Systems",
      "System documentation",
      "Networking",
      "Cloud Computing",
      "Automation",
      "Scripting",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-16 lg:mt-16">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          Experience
        </h2>
      </div>
      <>
        {content.map((job, index) => (
          <ExperienceCard {...job} key={`experience-card-${index}`} />
        ))}
      </>
      <div className="lg:px-12 mt-12">
        <a
          href="mailto:alexander@meikopoulos.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center font-medium leading-tight text-foreground group"
        >
          <span className="border-b border-transparent pb-px transition hover:border-primary motion-reduce:transition-none">
            Reach out for Full Resume
          </span>
        </a>
      </div>
    </section>
  );
}
