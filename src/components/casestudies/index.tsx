
import ProjectCard from "../projectCard";
import ClientCardStack from "./ClientCardStack";

const projects = [
  {
    "title": "Genie",
    "description": "Genie is the convenient, efficient, and smarter way to manage your finances, make easy bill payments, grow your wealth and track your loyalty points.",
    "link": "https://www.genie.lk/",
    "image": "https://ik.imagekit.io/dsmblx6kfve/personal-site/CS2_NJICDDqIgg.svg?updatedAt=1756652640331",
    "roles": ["Lead Frontend Engineer", "UI/UX"],
    "tools": ["Angular", "React"]
  },
  {
    "title": "Axonect",
    "description": "Axonect offers a suite of enterprise digital transformation products that seamlessly connect northbound and southbound systems. Enterprises can become agile digital service providers and quickly launch new services with faster time-to-market, reduce operational costs, and optimize their operations, leading to a more efficient and effective footprint.",
    "link": "https://axonect.com/",
    "image": "https://ik.imagekit.io/dsmblx6kfve/personal-site/cs3_rcYPZF_9c.svg?updatedAt=1756652640359",
    "roles": ["Frontend Lead", "UI/UX"],
    "tools": ["Angular", "Figma", "Protopie"]
  },
  {
    "title": "RouteSONAR",
    "description": "RouteSONAR is an innovative route optimization platform developed to find the most efficient travel route out of all possible outcomes mapped across the multiple last mile delivery locations.",
    "link": "https://www.behance.net/gallery/131223179/RouteSONAR-Route-Optimization-Web-Application",
    "image": "https://ik.imagekit.io/dsmblx6kfve/personal-site/CS1_tF5BSPKeO.svg?updatedAt=1756652642972",
    "roles": ["Frontend Developer", "Lo-fi & Hi-fi prototyping", "UI/UX"],
    "tools": ["React JS", "Next JS", "Figma"]
  }
];

export default function CaseStudies() {

  return (
    <section
      id="case-studies"
      className="px-10 lg:px-0 mx-auto lg:w-4/5 2xl:w-3/5 w-full my-8 relative"
    >
      <div className="text-center">
        <h6 className="text-md text-secondaryText mb-1">
          Some of the Projects Accomplished
        </h6>
        <h2 className="text-5xl font-Playfair_Display font-bold text-primaryText">
          Projects
        </h2>
      </div>

      {/* Stack container */}
      {/* The height is increased to allow space for the sticky cards to scroll over each other. */}
      <ClientCardStack>
        {projects.map((project, idx) => (
          <ProjectCard
            key={idx}
            index={idx}
            {...project}
            totalProjects={projects.length}
            top={`calc(2rem + ${idx * 24}px)`}
          />
        ))}
      </ClientCardStack>
    </section>
  );
}
