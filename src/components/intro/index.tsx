// 'use client';
// import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Intro() {
  return (
    <section className="relative overflow-hidden h-screen animate-on-scroll intro-section-animation flex flex-col items-center mx-auto">
      <div>
        <div className="flex justify-center">
          <Image
            src="https://res.cloudinary.com/du2jhfevw/image/upload/v1757607497/dome_NdhB573Wg_4_mavrte.webp"
            alt="Dome background"
            fill
            quality={100}
            className="object-cover z-[2] opacity-0 fade-in-left [animation-delay:2.7s] hidden md:block"
            sizes="100vw"
            priority
          />
          <Image
            src="https://res.cloudinary.com/du2jhfevw/image/upload/v1757665053/dome-mobile_dyb7z2.png"
            alt="Dome mobile background"
            fill
            quality={100}
            priority
            className="object-cover z-[2] block md:hidden"
            sizes="100vw"
          />
        </div>
        <Image
          src="https://res.cloudinary.com/du2jhfevw/image/upload/v1757656169/floor_j36Gqhe5Z_fvr0q7.png"
          alt="main floor"
          fill
          quality={100}
          className="absolute bottom-0 left-0 w-full h-[20%] object-cover z-[4] scale-x-[-1] opacity-0 fade-in-left [animation-delay:2.9s]"
          priority
          sizes="100vw"
        />
        <Image
          src="https://res.cloudinary.com/du2jhfevw/image/upload/v1757656413/SIA_tjissh.png"
          alt="Flying plane"
          width={80}
          height={80}
          quality={100}
          className="absolute top-[15%] -left-20 plane-animation z-1 [animation-delay:3.1s] hidden md:block"
        />
        <div className="absolute inset-0 bg-white/10 md:hidden"></div>
      </div>

      <div className="lg:px-0 px-10 lg:w-4/5 2xl:w-3/5 w-full flex items-center lg:flex-row h-full z-20">
        <div className="text-left lg:w-3/5 lg:-mt-60 md:-mt-[60px] -mt-[250px] opacity-0 fade-in-left [animation-delay:0.5s]">
          <div className="opacity-0 fade-in-left [animation-delay:0.7s]">
            <h1 className="text-3xl mb-4 text-primaryText font-Caveat_Brush opacity-80">
              Hi, I’m <span className="font-bold">Lalinda.</span>
            </h1>
          </div>
          <div className="opacity-0 fade-in-left [animation-delay:0.9s]">
            <h2 className="text-4xl mb-4 text-primaryText font-semibold leading-[3rem]">
              I bring ideas to life with seamless, <br /> delightful digital
              solutions.
            </h2>
          </div>
          <div className="opacity-0 fade-in-left [animation-delay:1.1s]">
            <div className="mt-5 relative h-8 w-full overflow-hidden text-lg font-medium text-left text-primaryText">
              <div className="absolute flex items-center">
                <span className="font-normal opacity-70 mr-3">
                  Based in Singapore
                </span>{" "}
                <span className="font-medium opacity-100">🇸🇬</span>
              </div>
            </div>
          </div>
          <div className="opacity-0 fade-in-left [animation-delay:1.3s] mt-8">
            <Link href={"#experience"} className="button bg-btnBg py-4 px-6 rounded-2xl text-[bg-btnText] font-semibold">
              Get to know me more
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
