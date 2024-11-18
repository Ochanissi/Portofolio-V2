/* eslint-disable */

export default function About() {
  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <div className="flex flex-col gap-4 lg:px-6 text-foreground">
        <p>
          I’m Mirel, a self-taught full-stack developer with over 4 years of
          experience.
        </p>
        <p>
          I began my journey as a frontend developer at{" "}
          <a
            className="no-wrap text-primary text-white underline hover:text-neutral-400 transition-colors duration-150 ease-in"
            href="https://www.linkedin.com/company/get-sessions/"
            target="blank"
            rel="noopener noreferrer"
          >
            Sessions
          </a>
          , a startup with the core project focused on a complex video
          conferencing tool, enhanced with various modules. Over nearly 4 years,
          I expanded my role, and for the final 2 years, I fully transitioned to
          a full-stack developer position, contributing across both frontend and
          backend.
        </p>
        <p>
          Currently, I'm working at{" "}
          <a
            className="no-wrap text-primary text-white underline hover:text-neutral-400 transition-colors duration-150 ease-in"
            href="https://www.linkedin.com/company/webitfactory/"
            target="blank"
            rel="noopener noreferrer"
          >
            WebitFactory
          </a>{" "}
          on a gaming platform project, where I develop new features, integrate
          third-party providers, and implement Web3 functionalities.
        </p>
        <p>
          I'm passionate about continuously improving my abilities and thrive in
          dynamic, fast-paced environments. My adaptability enables me to
          integrate smoothly into any team, tech stack, or project.
        </p>
        <p>
          I value clean implementations, strong UI/UX, and a culture where skill
          is appreciated, expected, and rewarded.
        </p>
      </div>
    </section>
  );
}
