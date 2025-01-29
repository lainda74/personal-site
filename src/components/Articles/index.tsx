import Image from "next/image";

export default function Articles() {
  return (
    <section>
      <div
        className="h-[40rem] bg-fixed bg-center bg-cover"
        style={{
          backgroundImage: `url('https://ik.imagekit.io/dsmblx6kfve/personal-site/WhatsApp%20Image%202025-01-29%20at%2010.45.30_IUFXIEUwo.jpeg?updatedAt=1738118841490')`,
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
              <Image src = "https://ik.imagekit.io/dsmblx6kfve/personal-site/Npm-logo_x3S85qlOG.png?updatedAt=1738117954522" alt = "Article 1 Image" width={80} height={80} className="w-20 h-20 md:w-20 md:h-20 ml-10" />
            </li>
            <li className="flex justify-between mb-10">
              <div>
                <h4 className="text-lg font-semibold text-primaryText">Micro Frontends: Introduction</h4>
                <p className="text-secondaryText">It’s not late to learn about micro frontends although the concept was first introduced in 2016...</p>
                <a className="text-sm font-light text-blue-500 hover:text-blue-800 underline underline-offset-4 cursor-pointer" href="https://medium.com/@diaslalinda/micro-frontends-introduction-f51b82c99032" rel="noreferrer" target="_blank">Read the whole story</a>
              </div>
              <Image src = "https://ik.imagekit.io/dsmblx6kfve/personal-site/1_aucGHg1tqynhECtJwQAsSQ_7H3iiR7pJ.webp?updatedAt=1738081287532" alt = "Article 1 Image" width={80} height={80} className="w-20 h-20 md:w-20 md:h-20 ml-10" />
            </li>
            <li className="flex justify-between mb-10">
              <div>
                <h4 className="text-lg font-semibold text-primaryText">Which Text Case to Use</h4>
                <p className="text-secondaryText">Ever wondered which text case to use ? A little thing like capitalization...</p>
                <a className="text-sm font-light text-blue-500 hover:text-blue-800 underline underline-offset-4 cursor-pointer" href="https://medium.com/@diaslalinda/which-text-case-to-use-d583b2ad2006" rel="noreferrer" target="_blank">Read the whole story</a>
              </div>
              <Image src = "https://ik.imagekit.io/dsmblx6kfve/personal-site/Screenshot%20(2)_yGixKIMMo.png?updatedAt=1738081191939" alt = "Article 1 Image" width={80} height={80} className="w-20 h-20 md:w-20 md:h-20 ml-10" />
            </li>
            <li className="flex justify-between mb-10">
              <div>
                <h4 className="text-lg font-semibold text-primaryText">Managing Large UI Development Projects</h4>
                <p className="text-secondaryText">Usually people thinks that CSS or SASS can be written in any way.</p>
                <a className="text-sm font-light text-blue-500 hover:text-blue-800 underline underline-offset-4 cursor-pointer" href="https://medium.com/@diaslalinda/managing-large-ui-development-projects-61a7166834f7" rel="noreferrer" target="_blank">Read the whole story</a>
              </div>
              <Image src = "https://ik.imagekit.io/dsmblx6kfve/personal-site/Screenshot%20(1)_zPnj6vOqw.png?updatedAt=1738080744704" alt = "Article 1 Image" width={80} height={80} className="w-20 h-20 md:w-20 md:h-20 ml-10" />
            </li>
            <li className="flex justify-between mb-10">
              <div>
                <h4 className="text-lg font-semibold text-primaryText">Monorepo: Nx + Storybook in Angular</h4>
                <p className="text-secondaryText">When you think about the architecture of front-end applications, you have to...</p>
                <a className="text-sm font-light text-blue-500 hover:text-blue-800 underline underline-offset-4 cursor-pointer" href="https://medium.com/@diaslalinda/monorepo-nx-storybook-in-angular-7365bd1508ff" rel="noreferrer" target="_blank">Read the whole story</a>
              </div>
              <Image src = "https://ik.imagekit.io/dsmblx6kfve/personal-site/image%20(5)_sLmdqe2BQ.png?updatedAt=1738080657803" alt = "Article 1 Image" width={80} height={80} className="w-20 h-20 md:w-18 md:h-18 ml-10" />
            </li>
            <li className="flex justify-between mb-10">
              <div>
                <h4 className="text-lg font-semibold text-primaryText">Making your Website Accessible to Everyone</h4>
                <p className="text-secondaryText">If you open a store or a shop, it should serve all customers without any limitations...</p>
                <a className="text-sm font-light text-blue-500 hover:text-blue-800 underline underline-offset-4 cursor-pointer" href="https://medium.com/design-bootcamp/making-your-website-accessible-to-everyone-2c702fa8a3c4" rel="noreferrer" target="_blank">Read the whole story</a>
              </div>
              <Image src = "https://ik.imagekit.io/dsmblx6kfve/personal-site/0_tred27_tDP9T5P6g_ba2e6CP4V.webp?updatedAt=1738080402789" alt = "Article 1 Image" width={80} height={80} className="w-20 h-20 md:w-18 md:h-18 ml-10" />
            </li>
          </ul>
      </div>
    </section>
  );
}
