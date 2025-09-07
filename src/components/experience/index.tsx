import type React from "react";
import ExperienceChip from "../experienceChip";
import SafeImage from "@/hooks/buggySafari";
import { BackgroundBeamsWithCollision } from "../ui/shadcn-io/background-beams-with-collision";

const chipsData = [
  {
    id: 1,
    className:
      "flex items-center justify-center gap-3 px-12 py-3 rounded-full bg-gray-200 transform min-w-60 z-1 top-15 left-40",
    style: {
      "--rotate": "-20deg",
      "--scale-from": "2",
      "--scale-to": "1",
      "--bottom": "80%",
      "--left": "20%",
    },
    content: (
      <>
        <SafeImage
          src="https://ik.imagekit.io/dsmblx6kfve/personal-site/image%201_4bnW-qHT2.svg?updatedAt=1756780175607"
          alt="Virtusa Logo"
          className="object-contain p-6"
          fill
        />
      </>
    ),
  },
  {
    id: 2,
    className:
      "flex items-center justify-center gap-3 px-12 py-3 rounded-full bg-blue-200 transform min-w-60 z-1 md:top-[20%] top-[24%] left-[60%]",
    style: {
      "--rotate": "7deg",
      "--scale-from": "2",
      "--scale-to": "1",
      "--bottom": "50%",
      "--right": "30%"
    },
    content: (
      <>
        <SafeImage
          src="https://ik.imagekit.io/dsmblx6kfve/personal-site/CG-Logo_flfk-EQMp.svg?updatedAt=1756780645848"
          alt="CodeGen Logo"
          // width={180}
          // height={120}
          className="object-contain p-6"
          fill
        />
      </>
    ),
  },
  {
    id: 3,
    className:
      "flex items-center justify-center gap-3 px-12 py-3 rounded-full bg-red-200 transform min-w-60 z-10 top-[40%] left-[40%]",
    style: {
      "--rotate": "25deg",
      "--scale-from": "2",
      "--scale-to": "1",
      "--bottom": "30%",
      "--right": "10%"
    },
    content: (
      <>
        <SafeImage
          src="https://ik.imagekit.io/dsmblx6kfve/personal-site/ADL(1)_Ma3HE3f2z.svg?updatedAt=1756781898056"
          alt="ADL Logo"
          // width={180}
          // height={120}
          className="object-contain p-6"
          fill
        />
      </>
    ),
  },
  {
    id: 4,
    className:
      "flex items-center justify-center gap-3 px-12 py-3 rounded-full bg-green-200 transform min-w-60 z-10 top-[55%] left-[20%]",
    style: {
      "--rotate": "-20deg",
      "--scale-from": "2",
      "--scale-to": "1",
      "--bottom": "10%",
      "--left": "30%",
      "--right": "unset"
    },
    content: (
      <SafeImage
        src="https://ik.imagekit.io/dsmblx6kfve/personal-site/zuellig_TdIy0fkI1.svg?updatedAt=1756782094054"
        alt="Zuellig Logo"
        // width={180}
        // height={120}
        className="object-contain p-6"
        fill
      />
    ),
  },
];

export default function Experience() {
  return (
    <>
      <section className="relative lg:px-0 mx-auto w-full h-[200vh] exp-timeline lg:w-4/5 2xl:w-3/5">
        <div className="sticky top-0 left-0 h-[100vh] flex flex-col justify-center items-center">
          <BackgroundBeamsWithCollision className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <></>
          </BackgroundBeamsWithCollision>
          <div className="subtitle-wrapper flex justify-end absolute top-[6rem] right-0">
            <p className="text-xl text-primaryText font-normal leading-[2rem] border-l-2 border-l-gray-300 pl-4 z-0 ">
              I have 10 years of experience working in tech <br />
              both in local and international levels.
            </p>
          </div>
          <h1 className="text-[3.5rem] md:text-[8rem] sm:text-[12rem] exp-heading-timeline flex justify-center z-5">
              {Array.from("Experience").map((ch, idx) => {
                return (
                  <span
                    key={idx}
                    className={`exp-char-rise font-bold px-1`}
                    style={
                      {
                        "--i": idx,
                        "--rise-from-y": `calc(0% + ${idx * 20}%)`,
                      } as React.CSSProperties
                    }
                  >
                    {ch === " " ? "\u00A0" : ch}
                  </span>
                );
              })}
          </h1>
        </div>
        <div className="w-[100%] h-[100vh] relative">
          {chipsData.map((chip) => (
            <ExperienceChip
              key={chip.id}
              className={chip.className}
              style={chip.style as React.CSSProperties}
            >
              {chip.content}
            </ExperienceChip>
          ))}
        </div>
      </section>
    </>
  );
}
