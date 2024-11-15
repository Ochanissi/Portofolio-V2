import Nav from "@/components/Nav";
import About from "@/components/About";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4">
        <Nav />
        <main className="flex flex-col pt-6 lg:pt-24 lg:w-1/2 lg:py-24 gap-8">
          <About />
          <Experience />
          {/* <ExpCard />
          <Projects />
          <Contact />
          <Footer /> */}
        </main>
      </div>
    </div>
  );
}
