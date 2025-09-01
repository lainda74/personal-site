import Image from "next/image";

export default function Intro() {
  return (
    <section className="relative overflow-hidden h-screen animate-on-scroll intro-section-animation flex flex-col items-center mx-auto">
      <div>
        <Image
          src="https://ik.imagekit.io/dsmblx6kfve/personal-site/bg_kvSKk6D73.svg?updatedAt=1756652945837"
          alt="Background pattern"
          fill
          className="absolute z-[-10] w-full h-full object-cover"
          priority
        />
        <Image
          src="https://ik.imagekit.io/dsmblx6kfve/personal-site/SIA_0KDsJs1SP.webp?updatedAt=1756652639285"
          alt="Flying plane"
          width={80}
          height={80}
          className="absolute top-[15%] -left-20 plane-animation z-[-6] opacity-70"
          priority
        />
        <Image
          src="https://ik.imagekit.io/dsmblx6kfve/personal-site/dome_NdhB573Wg.png?updatedAt=1756652946566"
          alt="Dome background"
          fill
          className="absolute top-0 left-0 w-full h-full object-cover z-[-4] dome-fade-in-animation"
          priority
        />
        <Image
          src="https://ik.imagekit.io/dsmblx6kfve/personal-site/floor_j36Gqhe5Z.png?updatedAt=1756652946360"
          alt="main floor"
          fill
          className="absolute bottom-0 left-0 w-full h-[20%] object-cover z-[-1] dome-fade-in-animation scale-x-[-1]"
          priority
        />
      </div>
      <header
        className="mt-5 flex items-center justify-center lg:flex-row h-12 z-30 
  bg-black/30 backdrop-blur-md rounded-full"
      >
        <nav className="flex items-center">
          <a
            href="#case-studies"
            className="text-white px-6 py-2 rounded-full transition-colors duration-300 hover:bg-white/20"
          >
            Projects
          </a>
          <a
            href="#"
            className="text-white px-6 py-2 rounded-full transition-colors duration-300 hover:bg-white/20"
          >
            About
          </a>
          <a
            href="#"
            className="text-white px-6 py-2 rounded-full transition-colors duration-300 hover:bg-white/20"
          >
            Contact
          </a>
        </nav>
      </header>

      <div className="lg:px-0 px-10 lg:w-4/5 2xl:w-3/5 w-full flex items-center lg:flex-row h-full">
        <div className="text-left lg:w-3/5 lg:-mt-60 md:-mt-[60px] -mt-[240px]">
          <h1 className="text-2xl mb-4 text-primaryText font-Playfair_Display">
            Hi, I’m <span className="font-extrabold">Lalinda.</span>
          </h1>
          <h2 className="text-4xl mb-4 text-primaryText font-bold leading-[3rem]">
            I bring ideas to life with seamless, <br /> delightful digital solutions.
          </h2>
          <div className="mt-5 relative h-8 w-full overflow-hidden text-lg font-medium text-left text-primaryText">
            <div className="absolute flex items-center">
              <span className="font-normal opacity-70 mr-3">Based in Singapore</span> <span className="font-medium opacity-100">&#127480;&#127468;</span>
            </div>
          </div>
          <button className="button bg-buttonText py-3 px-6 rounded-2xl mt-6 text-white">Get to know me more?</button>
        </div>
      </div>
    </section>
  );
}
