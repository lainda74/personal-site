export default function Experience() {
    return (
        <section className="px-10 lg:px-0 mx-auto lg:w-4/5 2xl:w-3/5 w-full">
            <p className="text-4xl text-primaryText font-light leading-[3.5rem]">I have 9 years of experience working in tech both in <br />local and international level.</p>
            <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
                <li className="mb-8">
                    <h4 className="text-lg font-bold text-primaryText">Zuellig Pharma</h4>
                    <p className="text-secondaryText">Senior Engineer - Frontend</p>
                    <p className="text-secondaryText font-light">Jan, 2023 - Present</p>
                </li>
                <li className="mb-8">
                    <h4 className="text-lg font-bold text-primaryText">Axiata Digital Labs</h4>
                    <p className="text-secondaryText">Associate Tech Lead - Frontend</p>
                    <p className="text-secondaryText font-light">May, 2019 - Dec, 2022</p>
                </li>
                <li className="mb-8">
                    <h4 className="text-lg font-bold text-primaryText">CodeGen</h4>
                    <p className="text-secondaryText">Senior Engineer - Frontend</p>
                    <p className="text-secondaryText font-light">Feb, 2017 - April, 2019</p>
                </li>
                <li className="mb-8">
                    <h4 className="text-lg font-bold text-primaryText">Virtusa</h4>
                    <p className="text-secondaryText">Associate Engineer - Frontend</p>
                    <p className="text-secondaryText font-light">December, 2015 - January, 2017</p>
                </li>
            </ul>
        </section>
    )
}