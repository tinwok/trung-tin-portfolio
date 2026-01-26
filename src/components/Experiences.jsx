import { ExperiencesData } from '../data/ExperiencesData';
function Experiences() {
    return (
        <section className=" font-[var(--font-secondary)] mt-[50px]">
            <div className="my-container">
                <h1 className="text-center font-semibold text-5xl">{ExperiencesData.header}</h1>
                <div className="experiences-container flex  flex-col justify-around mt-[60px] gap-8">
                    {ExperiencesData.info.map((item, index) => {
                        return (
                            <div className="flex justify-around ">
                                <div
                                    className={
                                        index % 2 === 0
                                            ? "left-side relative after:bg-[var(--color-orange)] after:w-[24px]  after:h-[24px]  after:content-[''] after:rounded-full after:absolute after:top-[6px] after:right-[-250px]"
                                            : "left-side relative  after:w-[24px]  after:h-[24px]  after:content-[''] after:bg-[var(--color-description)] after:rounded-full after:absolute after:top-[6px] after:right-[-250px]"
                                    }
                                >
                                    <span className="text-3xl font-semibold">{item.commpany}</span>
                                    <p className="text-[var(--color-description)] text-xl">{item.date}</p>
                                </div>
                                <div
                                    className="right-side w-[378px] relative     
                                  after:border-dashed after:w-[32px]  after:h-[32px]  
                                    after:border-2  after:border-gray-400 after:p-2 
                                    after:rounded-full after:content-[''] after:absolute after:top-[2px] after:left-[-90px] "
                                >
                                    {/* LINE DỌC */}
                                    {/* <span className="absolute left-[-75px] top-6 h-full w-[2px] bg-gray-300"></span> */}
                                    <span className="text-3xl font-semibold">{item.job}</span>
                                    <p className="text-[var(--color-description)] text-xl">{item.des}</p>
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
