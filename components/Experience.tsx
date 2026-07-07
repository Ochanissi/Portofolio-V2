"use client";

import {
  ExperienceCard,
  ExperienceCardProps,
} from "@/components/ui/ExperienceCard";
import { ExperienceLink } from "@/components/ui/ExperienceLink";

const content: ExperienceCardProps[] = [
  {
    period: "Dec 2024 - Present",
    position: "Full-Stack Developer",
    company: "Archbee",
    description: [
      <>
        Owned the end-to-end development of core product features for a
        collaborative knowledge base platform, leading a complete web app UI
        redesign while managing the public{" "}
        <ExperienceLink
          href="https://www.npmjs.com/package/@archbee/app-widget"
          aria-label="@archbee/app-widget on npm (opens in a new tab)"
        >
          @archbee/app-widget
        </ExperienceLink>{" "}
        package and refactoring its bulk PDF export workflows, file manager, and
        auto-publish pipelines.
      </>,
      <>
        Developed and published the public Archbee CLI (
        <ExperienceLink
          href="https://www.npmjs.com/package/@archbee/cli"
          aria-label="@archbee/cli on npm (opens in a new tab)"
        >
          @archbee/cli
        </ExperienceLink>
        ) npm package, enabling local workspace previews and full CRUD
        documentation workflows via public APIs.
      </>,
      "Built custom rich-text editor blocks and plugins using Plate / Slate, integrating real-time collaborative synchronization, autocomplete systems, and interactive content widgets.",
    ],
    skills: [
      "TypeScript",
      "React",
      "Next",
      "Express",
      "WebSockets",
      "PostgreSQL",
      "Sequelize",
      "Redis",
      "Plate / Slate",
      "TanStack",
      "Tailwind CSS",
    ],
    href: "https://www.linkedin.com/company/archbee/",
  },
  {
    period: "Aug 2024 - Dec 2024",
    position: "Full-Stack Developer",
    company: "WebitFactory",
    description: [
      "Engineered full-stack features for an online gaming platform using Next and NestJS, integrating third-party providers, raffles, promo codes, and Web3 functionalities.",
      "Optimized application performance, resolving critical bugs to ensure continuous platform stability.",
    ],
    skills: [
      "TypeScript",
      "React",
      "Next",
      "NestJS",
      "WebSockets",
      "PostgreSQL",
      "Prisma",
      "Redis",
      "Material UI",
      "Tailwind CSS",
    ],
    href: "https://www.linkedin.com/company/webitfactory/",
  },
  {
    period: "Jan 2021 - Aug 2024",
    position: "Full-Stack Developer",
    company: "Sessions",
    description: [
      "Implemented core video conferencing features, including user onboarding, authentication flows, and interactive widgets (audio player, polls, chat, Q&A).",
      "Developed core integration modules to seamlessly connect platform services with third-party platforms like Notion and Evernote.",
    ],
    skills: [
      "TypeScript",
      "React",
      "Next",
      "NestJS",
      "WebSockets",
      "PostgreSQL",
      "Prisma",
      "Redis",
      "Material UI",
      "Tailwind CSS",
      "SCSS",
    ],
    href: "https://www.linkedin.com/company/get-sessions/",
  },
  {
    period: "Apr 2018 - Jan 2021",
    position: "Project / Product Manager",
    company: "Premium IT Technologies",
    description: [
      "Managed and coordinated the department's core integration projects and new payment method deployments.",
      "Created, optimized, and maintained the platform's cashier routing logic and fraud prevention rules.",
    ],
    skills: ["Project Management", "Planning", "Leadership", "Testing & QA"],
    href: "https://www.linkedin.com/company/premium-it-technologies/",
  },
  {
    period: "Jul 2015 - Apr 2018",
    position: "Game Developer & QA Tester",
    company: "Freelance",
    description: [
      "Developed client and server-side features for Unity-based multiplayer games while managing full-cycle QA testing and debugging.",
    ],
    skills: ["JavaScript", "Testing & QA", "Customer Support", "Unity"],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="My experience"
    >
      <ol className="group/list flex flex-col gap-12 lg:gap-4">
        {content.map((job, index) => (
          <ExperienceCard {...job} key={`experience-card-${index}`} />
        ))}
      </ol>
      <div className="lg:px-6 mt-4">
        <a
          href="Mirel_Bitoi_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="items-center font-medium text-foreground hover:underline"
          aria-label="Resume (opens in a new tab)"
        >
          View Full Resume
        </a>
      </div>
    </section>
  );
}
