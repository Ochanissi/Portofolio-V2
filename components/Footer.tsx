export default function Footer() {
  return (
    <section className="flex flex-col gap-4 lg:px-6">
      <p className="text-sm text-start text-neutral-500">
        Based on{" "}
        <a className="text-neutral-300" href="https://brittanychiang.com">
          Brittany Chiang
        </a>{" "}
        and{" "}
        <a className="text-neutral-300" href="https://meikopoulos.com">
          Alexander Meikopoulos
        </a>
        &#39;s websites. Coded in{" "}
        <a className="text-neutral-300" href="https://code.visualstudio.com/">
          Visual Studio Code.
        </a>{" "}
        Built with{" "}
        <a className="text-neutral-300" href="https://nextjs.org/">
          Next.js
        </a>
        ,{" "}
        <a className="text-neutral-300" href="https://tailwindcss.com/">
          Tailwind CSS
        </a>
        , deployed with{" "}
        <a className="text-neutral-300" href="https://vercel.com/">
          Vercel
        </a>
        .
      </p>
    </section>
  );
}
