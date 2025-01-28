import About from "@/components/about";
import Articles from "@/components/Articles";
import CaseStudies from "@/components/casestudies";
import Experience from "@/components/experience";
import Footer from "@/components/footer";
import Intro from "@/components/intro";

export default function Home() {

  return (
    <div className="">
      <Intro />
      <CaseStudies />
      <div className="my-[12rem]">
        <Experience />
      </div>
      <Articles />
      <div className="my-[8rem]">
        <About />
      </div>
      <div className="mb-[4rem]"><Footer /></div>
    </div>
  );
}
