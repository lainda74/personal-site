import Image from "next/image";

const articles = [
  {
    title: "Create Your First Angular Library — Beginner Guide",
    description:
      "When our projects become larger, we may have to split them into...",
    link: "https://medium.com/@diaslalinda/create-your-first-angular-library-beginner-guide-4e0d98b13475",
    image:
      "https://ik.imagekit.io/dsmblx6kfve/personal-site/Npm-logo%201_DZZizb9Dx.svg?updatedAt=1738383807505",
  },
  {
    title: "Micro Frontends: Introduction",
    description:
      "It’s not late to learn about micro frontends although the concept was first introduced in 2016...",
    link: "https://medium.com/@diaslalinda/micro-frontends-introduction-f51b82c99032",
    image:
      "https://ik.imagekit.io/dsmblx6kfve/personal-site/article2_vfhRmRJ6-.svg?updatedAt=1738384157468",
  },
  {
    title: "Which Text Case to Use",
    description:
      "Ever wondered which text case to use? A little thing like capitalization...",
    link: "https://medium.com/@diaslalinda/which-text-case-to-use-d583b2ad2006",
    image:
      "https://ik.imagekit.io/dsmblx6kfve/personal-site/article3_gAFGCYQ0P.svg?updatedAt=1738384263456",
  },
  {
    title: "Managing Large UI Development Projects",
    description:
      "Usually, people think that CSS or SASS can be written in any way...",
    link: "https://medium.com/@diaslalinda/managing-large-ui-development-projects-61a7166834f7",
    image:
      "https://ik.imagekit.io/dsmblx6kfve/personal-site/article4_Ov-y-7LvB.svg?updatedAt=1738384409932",
  },
  {
    title: "Monorepo: Nx + Storybook in Angular",
    description:
      "When you think about the architecture of front-end applications, you have to...",
    link: "https://medium.com/@diaslalinda/monorepo-nx-storybook-in-angular-7365bd1508ff",
    image:
      "https://ik.imagekit.io/dsmblx6kfve/personal-site/article5_cQkXSXKOO.svg?updatedAt=1738384551529",
  },
  {
    title: "Making your Website Accessible to Everyone",
    description:
      "If you open a store or a shop, it should serve all customers without any limitations...",
    link: "https://medium.com/design-bootcamp/making-your-website-accessible-to-everyone-2c702fa8a3c4",
    image:
      "https://ik.imagekit.io/dsmblx6kfve/personal-site/article6_-tkyxWp2H.jpg?updatedAt=1738384702113",
  },
];

const ArticleItem = ({
  title,
  description,
  link,
  image,
}: {
  title: string;
  description: string;
  link: string;
  image: string;
}) => (
  <li className="flex justify-between mb-10 items-center lg:items-start">
    <div>
      <h4 className="text-lg font-semibold text-primaryText">{title}</h4>
      <p className="text-secondaryText">{description}</p>
      <a
        className="text-sm font-light text-blue-500 hover:text-blue-800 underline underline-offset-4 cursor-pointer"
        href={link}
        rel="noreferrer"
        target="_blank"
      >
        Read the whole story
      </a>
    </div>
    <Image
      src={image}
      alt={title}
      width={80}
      height={80}
      className="w-20 h-20 md:w-20 md:h-20 ml-10"
      loading="lazy"
    />
  </li>
);

export default function Articles() {
  return (
    <section>
      <div className="relative bg-center">
        {/* <Image
          src="https://ik.imagekit.io/dsmblx6kfve/personal-site/p1_49_PZjkm49bp.jpg?updatedAt=1738397591448"
          alt="Parallax Background"
          width={1400}
          height={600}
          quality={100}
          className="absolute top-0 left-0 w-full h-[35rem] object-cover"
          loading="lazy"
        /> */}
        <div className="relative z-10 h-full mt-[8rem] lg:w-4/5 2xl:w-3/5 mx-auto px-8 md:px-0">
          <div>
            <h6 className="text-md text-secondaryText mb-1">I Share</h6>
            <h2 className="text-5xl font-Playfair_Display font-bold">
              Stories and Learnings
            </h2>
          </div>
          <ul className="mt-16">
            {articles.map((article, index) => (
              <ArticleItem key={index} {...article} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
