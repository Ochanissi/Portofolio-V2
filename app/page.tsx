import Nav from "@/components/Nav";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4">
        <Nav />
        <main className="flex flex-col pt-24 lg:w-1/2 lg:py-24">
          <About />
          <Experience />
          <Footer />
        </main>
      </div>
    </div>
  );
}
