import { ExperienceBadge } from "./ExperienceBadge";

export type ExperienceCardProps = {
  period: string;
  position: string;
  description: string[];
  company: string;
  skills: string[];
};

export function ExperienceCard(props: ExperienceCardProps) {
  const { period, position, company, description, skills } = props;

  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm lg:p-6 mb-4 flex flex-col lg:flex-row w-full min-h-fit gap-0 lg:gap-5 border-transparent hover:border dark:lg:hover:border-t-blue-900 dark:lg:hover:bg-slate-800/50 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg lg:hover:bg-slate-100/50 lg:hover:border-t-blue-200">
      <div className="flex flex-col space-y-1.5 h-full w-full p-0">
        <div className=" font-semibold leading-none tracking-tight text-2xl text-slate-400 whitespace-nowrap">
          {period}
        </div>
      </div>
      <div className="flex flex-col p-6 pt-0">
        <p className="text-foreground font-bold">
          {position} • {company}
        </p>
        {description.map((paragraph, index) => (
          <p key={index} className="text-slate-400 text-sm font-bold">
            {paragraph}
          </p>
        ))}
        <div className="flex-wrap gap-2 flex items-center p-6 pt-0">
          {skills.map((skill, index) => (
            <ExperienceBadge key={index}>{skill}</ExperienceBadge>
          ))}
        </div>
      </div>
    </div>
  );
}
