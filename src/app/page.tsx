import About from "@/components/about";
// import { AnimateOnScroll } from "@/components/animateOnScroll";
import Articles from "@/components/Articles";
import CaseStudies from "@/components/casestudies";
import Experience from "@/components/experience";
// import FadeIn from "@/components/fadein";
import Footer from "@/components/footer";
import Intro from "@/components/intro";
import { Suspense } from "react";

export const revalidate = 3600;

export default function Home() {
  return (
    <div className="">
      <Intro />
      <Suspense fallback={<div>Loading...</div>}>
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
      </Suspense>
    </div>
  );
}
