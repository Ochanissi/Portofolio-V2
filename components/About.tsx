/* eslint-disable */

export default function About() {
  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="About me"
    >
      <div className="flex flex-col gap-4 lg:px-6 text-foreground">
        <p>
          I’m Mirel, a self-taught full-stack developer with over 5 years of
          experience.
        </p>
        <p>
          I began my journey as a frontend developer at{" "}
          <a
            className="no-wrap text-primary text-white underline hover:text-neutral-400 transition-colors duration-150 ease-in"
            href="https://www.linkedin.com/company/get-sessions/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Sessions (opens in a new tab)"
          >
            Sessions
          </a>
          , a startup whose core project was a complex video conferencing tool
          enhanced with various modules. Over more than three years, I expanded
          my role and transitioned into a full-stack developer position,
          contributing across both frontend and backend. From there, I moved on
          to{" "}
          <a
            className="no-wrap text-primary text-white underline hover:text-neutral-400 transition-colors duration-150 ease-in"
            href="https://www.linkedin.com/company/webitfactory/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WebitFactory (opens in a new tab)"
          >
            WebitFactory
          </a> to build out gaming platforms and Web3 features.
        </p>
        <p>
          Currently, I'm working at{" "}
          <a
            className="no-wrap text-primary text-white underline hover:text-neutral-400 transition-colors duration-150 ease-in"
            href="https://www.linkedin.com/company/archbee/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Archbee (opens in a new tab)"
          >
            Archbee
          </a>
          , a collaborative knowledge base platform, where I own the end-to-end
          development of core product features, maintain the public{" "}
          <a
            className="no-wrap text-primary text-white underline hover:text-neutral-400 transition-colors duration-150 ease-in"
            href="https://www.npmjs.com/package/@archbee/app-widget"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="@archbee/app-widget on npm (opens in a new tab)"
          >
            <code>@archbee/app-widget</code>
          </a>{" "}
          and{" "}
          <a
            className="no-wrap text-primary text-white underline hover:text-neutral-400 transition-colors duration-150 ease-in"
            href="https://www.npmjs.com/package/@archbee/cli"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="@archbee/cli on npm (opens in a new tab)"
          >
            <code>@archbee/cli</code>
          </a>{" "}
          packages, and build custom rich-text editor blocks with real-time
          collaboration using Plate.js and Slate.
        </p>
        <p>
          I'm passionate about coding and crafting elegant, responsive user
          interfaces, while also developing backend solutions that are efficient,
          robust, and built to scale. I thrive in dynamic, fast-paced
          environments. My adaptability enables me to integrate smoothly into
          any team, tech stack, or project.
        </p>
        <p>
          I value clean implementations, strong UI/UX, and a culture where skill
          is appreciated, expected, and rewarded.
        </p>
      </div>
    </section>
  );
}
