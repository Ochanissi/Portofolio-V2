import { ReactNode } from "react";

type ExperienceBadge = {
  children: ReactNode;
};

export function ExperienceBadge(props: ExperienceBadge) {
  const { children } = props;

  return (
    <div>
      <div>{children}</div>
    </div>
  );
}
