import { ExperienceBadge } from "./ExperienceBadge";

export type ExperienceCardProps = {
  period: string;
  position: string;
  description: string[];
  company: string;
  skills: string[];
  href?: string;
};

export function ExperienceCard(props: ExperienceCardProps) {
  const { period, position, company, description, skills, href } = props;

  return (
    <li className="flex">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group grid pb-1 transition-all sm:grid-cols-11 sm:gap-8 md:gap-4 lg:group-hover:opacity-10 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 lg:p-6 hover:bg-neutral-900/30 rounded-md duration-150 ease-in"
      >
        <div className="uppercase font-semibold text-xs text-neutral-500 sm:col-span-3 mb-2 mt-1">
          {period}
        </div>
        <div className="flex flex-col sm:col-span-8">
          <p className="font-medium text-neutral-200">
            <span>{position}</span> -{" "}
            <span className="underline">{company}</span>
          </p>
          {description.length > 0 ? (
            <ol className="mt-2 text-neutral-400 text-sm list-disc list-inside">
              {description.map((paragraph, index) => (
                <li key={company + "description" + index}>{paragraph}</li>
              ))}
            </ol>
          ) : null}

          {skills.length > 0 ? (
            <ol className="mt-2 flex flex-wrap gap-1.5">
              {skills.map((skill, index) => (
                <ExperienceBadge key={company + "skill" + index}>
                  {skill}
                </ExperienceBadge>
              ))}
            </ol>
          ) : null}
        </div>
      </a>
    </li>
  );
}
