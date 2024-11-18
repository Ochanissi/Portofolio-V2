import { ReactNode } from "react";

type ExperienceBadge = {
  children: ReactNode;
};

export function ExperienceBadge(props: ExperienceBadge) {
  const { children } = props;

  return (
    <li className="flex items-center rounded-full bg-neutral-400/10 px-3 py-1 text-xs font-medium leading-5 text-neutral-200">
      {children}
    </li>
  );
}
