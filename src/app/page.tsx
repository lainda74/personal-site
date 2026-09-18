import About from "@/components/about";
import Header from "@/components/header";
import Articles from "@/components/sections/Articles";
import CaseStudies from "@/components/sections/casestudies";
import Experience from "@/components/sections/experience";
import Footer from "@/components/sections/footer";
import Intro from "@/components/sections/intro";

export default function Home() {
  return (
    <div>
      <Header />
      <Intro />
      <Experience />
      <CaseStudies />
      <section className="scroll-text">
        <Articles />
      </section>
      <section className="scroll-text mt-32">
        <About />
      </section>
      <section className="scroll-text mt-32 mb-[4rem]">
        <Footer />
      </section>
    </div>
  );
}
