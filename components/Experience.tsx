import {
  ExperienceCard,
  ExperienceCardProps,
} from "@/components/ui/ExperienceCard";

const content: ExperienceCardProps[] = [
  {
    period: "Aug 2024 - Present",
    position: "Full-Stack Developer",
    company: "WebitFactory",
    description: [
      "Developed features for an online gaming platform, integrating third-party providers and implementing raffles, promo codes, and Web3 functionalities.",
      "Worked on both front-end (Next.js, Material UI, Tailwind CSS) and back-end (NestJS, Prisma, Redis, PostgreSQL), ensuring high-quality and responsive solutions.",
      "Handled bug fixes and maintained platform stability.",
    ],
    skills: [
      "TypeScript",
      "Next.js",
      "NestJS",
      "Prisma",
      "Redis",
      "PostgreSQL",
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
      "Implemented key features for the video conferencing platform, including the onboarding flow, authentication flow, and core features like contacts and notifications. Developed various widgets such as audio player, polls, chat, Q&A, participants, and transcript.",
      "Built reusable components and translated designs into responsive code using TypeScript, React.js, Next.js, Tailwind CSS, Material UI, JSS, and SCSS.",
      "Worked on core modules, such as event, calendar, and booking, and integrated third-party services like Notion and Evernote.",
      "Developed and maintained backend features using Express.js, GraphQL with Apollo, PostgreSQL, Prisma, and Redis.",
    ],
    skills: [
      "TypeScript",
      "React.js",
      "Next.js",
      "NestJS",
      "Prisma",
      "Redis",
      "PostgreSQL",
      "Material UI",
      "Tailwind CSS",
      "JSS",
      "SCSS",
    ],
    href: "https://www.linkedin.com/company/get-sessions/",
  },
  {
    period: "Apr 2018 - Jan 2021",
    position: "Project / Product Manager",
    company: "Premium IT Technologies",
    description: [
      "Managed and coordinated the department’s integration projects.",
      "Integration of new payment methods.",
      "Creation and maintenance of the cashier's routing and fraud rules.",
      "Constant optimization of the cashier, as well as all current payment methods.",
    ],
    skills: ["Project Management", "Planning", "Leadership", "Testing & QA"],
    href: "https://www.linkedin.com/company/premium-it-technologies/",
  },
  {
    period: "Jul 2015 - Apr 2018",
    position: "Game Developer & QA Tester",
    company: "Freelance",
    description: [
      "Developed new game features and collaborated with the content team to enhance Unity-based multiplayer games.",
      "Built client-side components and improved game performance using JavaScript and Unity.",
      "Made game variables accessible to players, allowing them to customize and personalize their gameplay experience.",
      "Tested and debugged games to ensure quality, while providing support to players and developers for smooth gameplay.",
    ],
    skills: ["JavaScript", "Testing & QA", "Customer Support", "Unity"],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <ol className="group/list flex flex-col gap-4">
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
        >
          View Full Resume
        </a>
      </div>
    </section>
  );
}
