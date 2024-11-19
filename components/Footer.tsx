export default function Footer() {
  return (
    <section className="flex flex-col gap-4 lg:px-6">
      <p className="text-sm text-start text-neutral-500">
        Based on{" "}
        <a
          className="text-neutral-300 hover:text-white transition-colors duration-150 ease-in"
          href="https://brittanychiang.com"
          aria-label="Brittany Chiang's website (opens in a new tab)"
        >
          Brittany Chiang
        </a>{" "}
        and{" "}
        <a
          className="text-neutral-300 hover:text-white transition-colors duration-150 ease-in"
          href="https://meikopoulos.com"
          aria-label="Alexander Meikopoulos's website (opens in a new tab)"
        >
          Alexander Meikopoulos
        </a>
        &#39;s websites. Coded in{" "}
        <a
          className="text-neutral-300 hover:text-white transition-colors duration-150 ease-in"
          href="https://code.visualstudio.com/"
          aria-label="Visual Studio Code (opens in a new tab)"
        >
          Visual Studio Code.
        </a>{" "}
        Built with{" "}
        <a
          className="text-neutral-300 hover:text-white transition-colors duration-150 ease-in"
          href="https://nextjs.org/"
          aria-label="Next.js (opens in a new tab)"
        >
          Next.js
        </a>
        ,{" "}
        <a
          className="text-neutral-300 hover:text-white transition-colors duration-150 ease-in"
          href="https://tailwindcss.com/"
          aria-label="Tailwind CSS (opens in a new tab)"
        >
          Tailwind CSS
        </a>
        , deployed with{" "}
        <a
          className="text-neutral-300 hover:text-white transition-colors duration-150 ease-in"
          href="https://vercel.com/"
          aria-label="Vercel (opens in a new tab)"
        >
          Vercel
        </a>
        .
      </p>
    </section>
  );
}
