'use client'
import { useScrollTimelineFallback } from "@/hooks/useReparseScrollTimeline";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  index: number;
  title: string;
  description: string;
  link: string;
  image: string;
  roles: string[];
  tools: string[];
  totalProjects: number;
  top: string;
}

export default function ProjectCard({
  index,
  title,
  description,
  link,
  image,
  roles,
  tools,
  totalProjects,
  top,
}: ProjectCardProps) {
  const startRange = (index / totalProjects) * 100;
  const endRange = ((index + 1) / totalProjects) * 100;

  useScrollTimelineFallback({
    containerSelector: ".case-studies-timeline",
    cardSelector: ".project-card",
  });

  return (
    <div
      className="project-card sticky h-screen flex items-center justify-center"
      style={
        {
          top,
          "--start": `${startRange}%`,
          "--end": `${endRange}%`,
        } as React.CSSProperties
      }
    >
      <div className="h-[80vh] w-[80vw] flex flex-col justify-center lg:flex-row gap-10 mx-auto p-8 bg-white rounded-2xl shadow-lg">
        <div className="lg:w-3/5">
          <div className="relative h-full w-full rounded-lg overflow-hidden">
            <Image src={image} alt={title} layout="fill" loading="lazy" />
          </div>
        </div>
        <div className="lg:w-2/5 flex flex-col justify-center">
          <div>
            <h1 className="text-4xl font-bold text-primaryText mb-8">{title}</h1>
            <p className="text-secondaryText mb-6">{description}</p>
            <div className="mb-6">
              <h4 className="font-semibold mb-2">My Role</h4>
              <div className="flex flex-wrap gap-2">
                {roles.map((role) => (
                  <span key={role} className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm">
                    {role}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Tools</h4>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <span key={tool} className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <Link href={link} target="_blank" rel="noopener noreferrer" className="bg-black text-white px-4 py-4 mt-16 rounded-2xl text-center">
            View Project
          </Link>
        </div>
      </div>
    </div>
  );
}
