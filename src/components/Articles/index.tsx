import Image from "next/image";

export default function Articles() {
  return (
    <section>
      <div
        className="h-[40rem] bg-fixed bg-center bg-cover"
        style={{
          backgroundImage: `url('https://ik.imagekit.io/dsmblx6kfve/General/post_HD76rucor.jpeg?updatedAt=1737791483999')`,
        }}
      ></div>
      <div className="h-full pt-12 -mt-[8rem] bg-white lg:w-4/5 2xl:w-3/5 mx-auto px-8">
          <div>
            <h6 className="text-md text-secondaryText mb-1">
              I Share
            </h6>
            <h2 className="text-5xl font-Playfair_Display font-bold">
              Stories and Learnings
            </h2>
          </div>
          <ul className="mt-16">
            <li className="flex justify-between mb-10 items-center lg:items-start">
              <div>
                <h4 className="text-lg font-semibold text-primaryText">Create Your First Angular Library — Beginner Guide</h4>
                <p className="text-secondaryText">When our projects become larger, we may have to split them into...</p>
                <a className="text-sm font-light text-blue-500 hover:text-blue-800 underline underline-offset-4 cursor-pointer" href="https://medium.com/@diaslalinda/create-your-first-angular-library-beginner-guide-4e0d98b13475" rel="noreferrer" target="_blank">Read the whole story</a>
              </div>
              <Image src = "https://ik.imagekit.io/dsmblx6kfve/personal-site/banner2_m7lmFAu2f.jpg?updatedAt=1737938970416" alt = "Article 1 Image" width={80} height={80} className="w-20 h-20 md:w-20 md:h-20 ml-10" />
            </li>
            <li className="flex justify-between mb-10">
              <div>
                <h4 className="text-lg font-semibold text-primaryText">Which Text Case to Use</h4>
                <p className="text-secondaryText">Ever wondered which text case to use ? A little thing like capitalization...</p>
                <a className="text-sm font-light text-blue-500 hover:text-blue-800 underline underline-offset-4 cursor-pointer" href="https://medium.com/@diaslalinda/which-text-case-to-use-d583b2ad2006" rel="noreferrer" target="_blank">Read the whole story</a>
              </div>
              <Image src = "https://ik.imagekit.io/dsmblx6kfve/personal-site/banner2_m7lmFAu2f.jpg?updatedAt=1737938970416" alt = "Article 1 Image" width={80} height={80} className="w-20 h-20 md:w-20 md:h-20 ml-10" />
            </li>
            <li className="flex justify-between mb-10">
              <div>
                <h4 className="text-lg font-semibold text-primaryText">Managing Large UI Development Projects</h4>
                <p className="text-secondaryText">Usually people thinks that CSS or SASS can be written in any way.</p>
                <a className="text-sm font-light text-blue-500 hover:text-blue-800 underline underline-offset-4 cursor-pointer" href="https://medium.com/@diaslalinda/managing-large-ui-development-projects-61a7166834f7" rel="noreferrer" target="_blank">Read the whole story</a>
              </div>
              <Image src = "https://ik.imagekit.io/dsmblx6kfve/personal-site/banner2_m7lmFAu2f.jpg?updatedAt=1737938970416" alt = "Article 1 Image" width={80} height={80} className="w-20 h-20 md:w-20 md:h-20 ml-10" />
            </li>
            <li className="flex justify-between mb-10">
              <div>
                <h4 className="text-lg font-semibold text-primaryText">UX for Call Center Applications</h4>
                <p className="text-secondaryText">Recently I wanted to travel to USA. I decided to book flights...</p>
                <a className="text-sm font-light text-blue-500 hover:text-blue-800 underline underline-offset-4 cursor-pointer" href="https://medium.com/@diaslalinda/ux-for-call-center-applications-7b47116b6862" rel="noreferrer" target="_blank">Read the whole story</a>
              </div>
              <Image src = "https://ik.imagekit.io/dsmblx6kfve/personal-site/banner2_m7lmFAu2f.jpg?updatedAt=1737938970416" alt = "Article 1 Image" width={80} height={80} className="w-20 h-20 md:w-20 md:h-20 ml-10" />
            </li>
          </ul>
      </div>
    </section>
  );
}
