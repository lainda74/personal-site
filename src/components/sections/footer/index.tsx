export default function Footer() {
  return (
    <section className="px-10 lg:px-0 mx-auto lg:w-4/5 2xl:w-3/5 w-full md:flex justify-between">
      <div>
        <h6 className="text-md text-secondaryText mb-1">Don&apos;t be a Stranger</h6>
        <h2 className="text-5xl font-Playfair_Display font-bold">
          Let&#39;s Connect
        </h2>
      </div>
      <div className="text-primaryText mt-12 md:mt-0">
        <h3 className="font-bold text-2xl mb-4">diaslalinda@gmail.com</h3>
        <ul className="flex justify-between">
            <li><a href="https://x.com/laliyaD" className="underline underline-offset-4 cursor-pointer" rel="noreferrer" target="_blank">X</a></li>
            <li><a href="https://www.instagram.com/laliya_d/" className="underline underline-offset-4 cursor-pointer" rel="noreferrer" target="_blank">Instagram</a></li>
            <li><a href="https://www.linkedin.com/in/lalindasampath/" className="underline underline-offset-4 cursor-pointer" rel="noreferrer" target="_blank">LinkedIn</a></li>
        </ul>
      </div>
    </section>
  );
}
