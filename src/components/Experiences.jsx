import { ExperiencesData } from '../data/ExperiencesData';
function Experiences() {
    return (
        <section className=" font-[var(--font-secondary)] mt-[50px] px-6">
            <div className="max-w-[1200px] mx-auto">
                <h1 className="text-center font-semibold text-xl lg:text-5xl">{ExperiencesData.header}</h1>
                <div className="experiences-container flex  flex-col justify-around mt-[20px] lg:mt-[60px] gap-8">
                    {ExperiencesData.info.map((item, index) => {
                        return (
                            <div key={index} className="flex justify-around gap-5 ">
                                {/* left side */}
                                <div
                                    className={
                                        index % 2 === 0
                                            ? "left-side relative lg:after:bg-[var(--color-orange)] after:w-[24px]  after:h-[24px]  after:content-[''] after:rounded-full after:absolute after:top-[6px] after:right-[-250px]"
                                            : "left-side relative  lg:after:w-[24px]  after:h-[24px]  after:content-[''] after:bg-[var(--color-description)] after:rounded-full after:absolute after:top-[6px] after:right-[-250px]"
                                    }
                                >
                                    <span className="lg:text-3xl  font-semibold">{item.commpany}</span>
                                    <p className="text-[var(--color-description)] text-sm lg:text-xl">{item.date}</p>
                                </div>
                                {/* right side */}
                                <div className="right-side w-2/3 lg:w-[378px] relative  ">
                                    <span className="lg:text-3xl font-semibold">{item.job}</span>
                                    <p className="text-[var(--color-description)] text-sm lg:text-xl">{item.des}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default Experiences;
