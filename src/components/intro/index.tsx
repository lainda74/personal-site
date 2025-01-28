import Image from "next/image";
// import { IKImage } from "imagekitio-react";

// const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

// if (!urlEndpoint) {
//   throw new Error("Error: Please add urlEndpoint to .env or .env.local");
// }

export default function Intro() {
  return (
    <section className="flex flex-col-reverse lg:flex-row justify-center lg:items-center px-10 lg:px-0 mx-auto lg:px-0 lg:w-4/5 2xl:w-3/5 w-full h-screen">
      <div>
        <h1 className="text-6xl mb-4 font-Caveat_Brush">Lalinda Sampath Dias</h1>
        <p className="text-base text-secondaryText font-lightt">At the intersection of development and design. I&apos;m passionate about giving back so I share my learnings on Medium, and play on Dribble. Currently in Singapore. &#127480;&#127468;</p>
      </div>
      <Image
        src="https://ik.imagekit.io/dsmblx6kfve/personal-site/profile__wLahsl6M.jpg?updatedAt=1737863573813"
        alt="Profile Image"
        width={140} // Replace with the actual width
        height={140}
        className="lg:ml-20 mb-6 lg:mb-0"
      />
      
      {/* <IKImage
        urlEndpoint="https://ik.imagekit.io/dsmblx6kfve/personal-site/profile__wLahsl6M.jpg?updatedAt=1737863573813"
        alt="Profile Image"
        className=''
      /> */}
    </section>
  );
}
