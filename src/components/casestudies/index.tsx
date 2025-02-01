import Image from "next/image";

export default function CaseStudies() {
  return (
    <section className="px-10 lg:px-0 mx-auto lg:w-4/5 2xl:w-3/5 w-full">
      <div>
        <h6 className="text-md text-secondaryText mb-1">
          Projects Accomplished in My Free Time
        </h6>
        <h2 className="text-5xl font-Playfair_Display font-bold">
          Case Studies
        </h2>
      </div>
      <div className="mt-20">
        <div className="md:mt-0 md:flex">
          <Image
            src="https://ik.imagekit.io/dsmblx6kfve/personal-site/Banner-1_GkmxtYtTD.jpg?updatedAt=1738245948245"
            alt="Banner 1 Image"
            width={520}
            height={520}
            className="md:pr-2 md:w-1/2 transition-transform duration-300 hover:scale-110 object-cover"
            quality={100}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
          />
          <div className="md:w-1/2 md:pl-8 pt-4 md:pt-0">
            <h6 className="text-2xl font-bold mb-3">RouteSONAR</h6>
            <p className="text-md text-secondaryText font-light">
              RouteSONAR is an innovative route optimization platform developed
              to find the most efficient travel route out of all possible
              outcomes mapped across the multiple last mile delivery locations.
            </p>
            <a
              href="https://www.behance.net/gallery/131223179/RouteSONAR-Route-Optimization-Web-Application"
              className="md:flex mt-20 my-5 text-lg text-buttonText flex items-center"
              rel="noreferrer"
              target="_blank"
            >
              View Project{" "}
              <Image
                src="https://ik.imagekit.io/dsmblx6kfve/personal-site/view.face245a_rdVEXw_Ee.svg?updatedAt=1738382591186"
                alt="Forward button image"
                width={80}
                height={20}
                className="ml-5"
              />
            </a>
            <div className="grid grid-cols-2 gap-4 mt-3 md:mt-12">
              <div>
                <span className="mb-2">Roles</span>
                <ul>
                  <li className="text-sm text-list font-light leading-6">
                    Frontend Developer
                  </li>
                  <li className="text-sm text-list font-light leading-6">
                    Lo-fi & Hi-fi prototyping
                  </li>
                  <li className="text-sm text-list font-light leading-6">
                    UI/UX
                  </li>
                </ul>
              </div>
              <div>
                <span className="mb-2">Tools</span>
                <ul>
                  <li className="text-sm text-list font-light leading-6">
                    React JS
                  </li>
                  <li className="text-sm text-list font-light leading-6">
                    Figma
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20 md:mt-0 md:flex pt-20">
          <Image
            src="https://ik.imagekit.io/dsmblx6kfve/personal-site/Banner-2_YR4VE_kGz.jpg?updatedAt=1738247020705"
            alt="Banner 1 Image"
            width={520}
            height={520}
            className="md:pr-2 md:w-1/2 transition-transform duration-300 hover:scale-110 object-cover"
            quality={100}
          />
          <div className="md:w-1/2 md:pl-8 pt-4 md:pt-0">
            <h6 className="text-2xl font-bold mb-3">CampMo</h6>
            <p className="text-md text-secondaryText font-light">
              The platform that allows travellers to find their ideal
              campgrounds for their holidays and get recommendations based on
              their preferences.
            </p>
            <a
              href="https://www.behance.net/gallery/121582261/Camp-Search-mobile-app"
              className="md:flex mt-20 my-5 text-lg text-buttonText flex items-center"
              rel="noreferrer"
              target="_blank"
            >
              View Project{" "}
              <Image
                src="https://ik.imagekit.io/dsmblx6kfve/personal-site/view.face245a_rdVEXw_Ee.svg?updatedAt=1738382591186"
                alt="Forward button image"
                width={80}
                height={20}
                className="ml-5"
              />
            </a>
            <div className="grid grid-cols-2 gap-4 mt-3 md:mt-12">
              <div>
                <span className="mb-2">Roles</span>
                <ul>
                  <li className="text-sm text-list font-light leading-6">
                    Lo-fi & Hi-fi prototyping
                  </li>
                  <li className="text-sm text-list font-light leading-6">
                    UI/UX Lead
                  </li>
                  <li className="text-sm text-list font-light leading-6">
                    UI/UX
                  </li>
                </ul>
              </div>
              <div>
                <span className="mb-2">Tools</span>
                <ul>
                  <li className="text-sm text-list font-light leading-6">
                    Figma
                  </li>
                  <li className="text-sm text-list font-light leading-6">
                    Protopie
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
