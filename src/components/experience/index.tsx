import type React from "react";
import ExperienceChip from "../experienceChip";
import SafeImage from "@/hooks/buggySafari";

const chipsData = [
  {
    id: 1,
    className:
      "flex items-center justify-center gap-3 px-12 py-3 rounded-full bg-gray-200 transform min-w-60",
    style: {
      "--rotate": "-20deg",
      "--scale-from": "2",
      "--scale-to": "1",
      "--bottom": "50%",
      "--left": "-20%",
    },
    content: (
      <>
        <SafeImage
          src="https://ik.imagekit.io/dsmblx6kfve/personal-site/virtusa_IC_1sVK3v.svg"
          alt="Virtusa Logo"
          width={180}
          height={120}
          className="object-contain"
        />
      </>
    ),
  },
  {
    id: 2,
    className:
      "flex items-center justify-center gap-3 px-12 py-3 rounded-full bg-blue-200 transform min-w-60",
    style: {
      "--rotate": "7deg",
      "--scale-from": "2",
      "--scale-to": "1",
      "--bottom": "30%",
      "--left": "100%",
    },
    content: (
      <>
        <SafeImage
          src="https://ik.imagekit.io/dsmblx6kfve/personal-site/codegen_GirTFY4hw.svg?updatedAt=1756652639035"
          alt="CodeGen Logo"
          width={180}
          height={120}
          className="object-contain"
        />
      </>
    ),
  },
  {
    id: 3,
    className:
      "flex items-center justify-center gap-3 px-12 py-3 rounded-full bg-red-200 transform min-w-60",
    style: {
      "--rotate": "25deg",
      "--scale-from": "2",
      "--scale-to": "1",
      "--bottom": "0%",
      "--right": "10%",
    },
    content: (
      <>
        <SafeImage
          src="https://ik.imagekit.io/dsmblx6kfve/personal-site/adl_Efg85x_O9.svg?updatedAt=1756652639160"
          alt="ADL Logo"
          width={180}
          height={120}
          className="object-contain"
        />
      </>
    ),
  },
  {
    id: 4,
    className:
      "flex items-center justify-center gap-3 px-12 py-3 rounded-full bg-green-200 transform min-w-60",
    style: {
      "--rotate": "-20deg",
      "--scale-from": "2",
      "--scale-to": "1",
      "--bottom": "-20%",
      "--left": "0%",
      "--right": "unset",
    },
    content: (
      <SafeImage
        src="https://ik.imagekit.io/dsmblx6kfve/personal-site/zuellig_nqToG4CQF.svg?updatedAt=1756652639431"
        alt="Zuellig Logo"
        width={180}
        height={120}
        className="object-contain"
      />
    ),
  },
];

export default function Experience() {
  return (
    <section className="px-10 lg:px-0 mx-auto lg:w-4/5 2xl:w-3/5 w-full h-[300vh] relative exp-timeline overflow-x-clip">
      <div className="mt-[50vh] sticky top-1/3 z-10 -translate-y-1/2">
        <div className="subtitle-wrapper mb-48 flex justify-end">
          <p className="text-xl text-primaryText font-normal leading-[2rem] border-l-2 border-l-gray-300 pl-4">
            I have 10 years of experience working in tech <br />
            both in local and international levels.
          </p>
        </div>
        <h1 className="text-[3.5rem] sm:text-[12rem] font-light exp-heading-timeline flex justify-center">
          <span className="chars-rise-container">
            {Array.from("Experience").map((ch, idx) => {
              return (
                <span
                  key={idx}
                  className={`${
                    ch !== "E" ? "exp-char-rise" : ""
                  } font-bold`}
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
          </span>
        </h1>
      </div>

        {chipsData.map((chip) => (
          <ExperienceChip
            key={chip.id}
            className={chip.className}
            style={chip.style as React.CSSProperties}
          >
            {chip.content}
          </ExperienceChip>
        ))}
    </section>
  );
}
