import { HireMeData } from '../data/HireMeData';
import { AboutData } from '../data/AboutData';
import Button from './subCompoments/Button';
function HireMe() {
    return (
        <div className="my-container h-[604px] bg-[#E2E2E2] rounded-4xl flex justify-evenly items-center">
            <div className="left-side w-[50%]">
                <h1 className="text-3xl font-medium">
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
                    <p className="text-xl ml-5 text-[var(--color-description)]">{HireMeData.description}</p>
                </div>
                <div className="flex gap-20 mb-[38px]  mt-[38px]">
                    {HireMeData.state.map((item) => {
                        return (
                            <div>
                                <span className="text-2xl font-semibold">{item.stateNumber}</span>
                                <p className="text-[var(--color-description)] text-xl font-medium">{item.stateDes}</p>
                            </div>
                        );
                    })}
                </div>
                <Button className="p-2 hover:bg-[var(--color-orange)] hover:border-[var(--color-orange)] hover:text-white">
                    Hire Me
                </Button>
            </div>
            <div className="right-side w-[440px] h-[440px] rounded-full bg-[var(--color-orange)] overflow-hidden">
                <img src={HireMeData.avatar2} alt="avatar" className="object-cover w-full h-full  object-[90%_20%]" />
            </div>
        </div>
    );
}

export default HireMe;
