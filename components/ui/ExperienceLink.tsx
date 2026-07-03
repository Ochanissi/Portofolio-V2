"use client";

import { ComponentPropsWithoutRef } from "react";

type ExperienceLinkProps = ComponentPropsWithoutRef<"span"> & {
  href: string;
};

export function ExperienceLink(props: ExperienceLinkProps) {
  const { href, children, className, onClick, onKeyDown, ...rest } = props;

  const open = () => window.open(href, "_blank", "noopener,noreferrer");

  return (
    <span
      {...rest}
      role="link"
      tabIndex={0}
      onClick={(e) => {
        e.stopPropagation();
        e.preventDefault();
        open();
        onClick?.(e);
      }}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.stopPropagation();
          e.preventDefault();
          open();
        }
        onKeyDown?.(e);
      }}
      className={`cursor-pointer underline hover:text-white transition-colors duration-150 ease-in${
        className ? ` ${className}` : ""
      }`}
    >
      {children}
    </span>
  );
}
