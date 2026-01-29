import { HireMeData } from '../data/HireMeData';
import { AboutData } from '../data/AboutData';
import Button from './subCompoments/Button';
function HireMe() {
    return (
        <section className=" mt-[50px]">
            <div className="max-w-[1200px] mx-auto py-6 lh:h-[604px] bg-[#E2E2E2] lg:rounded-4xl flex justify-evenly items-center">
                <div className="left-side mx-6 lg:w-[50%]">
                    <h1 className="lg:text-3xl text-x font-medium">
                        {HireMeData.header.map((item) => {
                            if (typeof item === 'string') {
                                return item;
                            } else {
                                return (
                                    <span className="text-red-500" key={item}>
                                        {item.hightlight}
                                    </span>
                                );
                            }
                        })}
                    </h1>
                    <div>
                        <img src={AboutData.quotationIcon} alt="quotation Icon" />
                        <p className="lg:text-xl text-xs ml-5 text-[var(--color-description)]">
                            {HireMeData.description}
                        </p>
                    </div>
                    <div className="flex lg:gap-20 gap-5 lg:mb-[38px]  my-2  lg:mt-[38px]">
                        {HireMeData.state.map((item) => {
                            return (
                                <div>
                                    <span className="lg:text-2xl text-m font-semibold">{item.stateNumber}</span>
                                    <p className="text-[var(--color-description)] text-xs lg:text-xl font-medium">
                                        {item.stateDes}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                    <Button className="px-6 lg:py-2 hover:bg-[var(--color-orange)] hover:border-[var(--color-orange)] hover:text-white">
                        Hire Me
                    </Button>
                </div>
                <div className="right-side w-[440px] h-[440px] rounded-full bg-[var(--color-orange)] overflow-hidden lg:block hidden">
                    <img
                        src={HireMeData.avatar2}
                        alt="avatar"
                        className="object-cover w-full h-full  object-[90%_20%]"
                    />
                </div>
            </div>
        </section>
    );
}

export default HireMe;
