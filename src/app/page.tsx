import About from "@/components/about";
import Articles from "@/components/Articles";
import CaseStudies from "@/components/casestudies";
import Experience from "@/components/experience";
import FadeIn from "@/components/fadein";
import Footer from "@/components/footer";
import Intro from "@/components/intro";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="">
      <Intro />
      <Suspense fallback={<div>Loading...</div>}>
        <FadeIn>
          <CaseStudies />
        </FadeIn>
        <FadeIn>
          <div className="my-[12rem] motion-safe:animate-fade-in">
            <Experience />
          </div>
        </FadeIn>
        <FadeIn>
          <Articles />
        </FadeIn>
        <FadeIn>
          <div className="my-[8rem]">
            <About />
          </div>
        </FadeIn>
        <FadeIn>
          <div className="mb-[4rem]">
            <Footer />
          </div>
        </FadeIn>
      </Suspense>
    </div>
  );
}
