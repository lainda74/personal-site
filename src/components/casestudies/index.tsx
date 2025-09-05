
import ProjectCard from "../projectCard";
import ClientCardStack from "./ClientCardStack";

const projects = [
  {
    "title": "Genie",
    "description": "The platform that allows travellers to find their ideal campgrounds for their holidays and get recommendations based on their preferences.",
    "link": "https://www.genie.lk/",
    "image": "https://ik.imagekit.io/dsmblx6kfve/personal-site/CS2_NJICDDqIgg.svg?updatedAt=1756652640331",
    "roles": ["Lead Frontend Engineer", "UI/UX"],
    "tools": ["Angular", "React"]
  },
  {
    "title": "Axonect",
    "description": "Axonect offers a suite of enterprise digital transformation products that seamlessly connect northbound and southbound systems. By leveraging Axonect’s cost-effective products, enterprises can become agile digital service providers and quickly launch new services with faster time-to-market, reduce operational costs, and optimize their operations, leading to a more efficient and effective footprint.",
    "link": "https://axonect.com/",
    "image": "https://ik.imagekit.io/dsmblx6kfve/personal-site/cs3_rcYPZF_9c.svg?updatedAt=1756652640359",
    "roles": ["Lo-fi & Hi-fi prototyping", "UI/UX Lead", "UI/UX"],
    "tools": ["Figma", "Protopie"]
  },
  {
    "title": "RouteSONAR",
    "description": "RouteSONAR is an innovative route optimization platform developed to find the most efficient travel route out of all possible outcomes mapped across the multiple last mile delivery locations.",
    "link": "https://www.behance.net/gallery/131223179/RouteSONAR-Route-Optimization-Web-Application",
    "image": "https://ik.imagekit.io/dsmblx6kfve/personal-site/CS1_tF5BSPKeO.svg?updatedAt=1756652642972",
    "roles": ["Frontend Developer", "Lo-fi & Hi-fi prototyping", "UI/UX"],
    "tools": ["React JS", "Figma"]
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
          Projects Accomplished in My Free Time
        </h6>
        <h2 className="text-5xl font-Playfair_Display font-bold text-primaryText">
          Case Studies
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
