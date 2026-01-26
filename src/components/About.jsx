import { AboutData } from '../data/AboutData';
import Button from './subCompoments/Button';
function About() {
    return (
        <>
            <section className=".my-container mx-auto mt-[50px] ">
                <div className="top-container flex flex-col items-center justify-evenly relative">
                    <h1 className="flex items-center px-[18px]  rounded-full border border-solid border-[#9D9696] text-[24px]  ">
                        {AboutData.miniHeader}
                        <img className="absolute top-[-30px] left-[53%]" src={AboutData.arrowIcon} alt="arrowIcon" />
                    </h1>

                    <h1 className="text-[82px] w-[550px] text-center font-medium">
                        {AboutData.header.map((item, index) => {
                            if (typeof item === 'string') {
                                return item;
                            } else {
                                return (
                                    <span key={index} className="text-red-500">
                                        {item.name}
                                    </span>
                                );
                            }
                        })}
                    </h1>
                </div>
                <div className="bottom-container flex justify-center items-center mt-[-80px]">
                    <div className="box w-[260px]">
                        <img src={AboutData.quotationIcon} alt="quotationMarkss" />
                        <p className="text-[var(--color-description)] font-medium ml-[20px] text-xm ">
                            {AboutData.des}
                        </p>
                        <div className="flex flex-col mt-[10px]">
                            <span className="font-semibold text-[25px]">{AboutData.stateNumber}</span>
                            <p className="text-[var(--color-description)] text-base"> {AboutData.stateDes}</p>
                        </div>
                    </div>
                    <div className="box z-1 relative">
                        <img className="w-auto h-full " src={AboutData.avatar} alt="Avatar " />
                        <div className="flex justify-center absolute bottom-5 left-1/10 gap-4 items-center">
                            <Button className="hover:bg-[var(--color-orange)] hover:border-[var(--color-orange)] hover:text-white">
                                Portfolio
                            </Button>
                            <Button className="hover:bg-[var(--color-orange)] hover:border-[var(--color-orange)] hover:text-white">
                                Hire Me
                            </Button>
                            <img
                                src={AboutData.blackarrowIcon}
                                className="z-10 absolute  left-[-70px] bottom-[5px]"
                                alt="black arrow icon"
                            />
                        </div>
                    </div>
                    <div className="box w-[260px] ml-[50px]">
                        <div className="justify-center">
                            <div className="star-icon-box flex  ">
                                <img src={AboutData.staricon} alt="Star icon" />
                                <img src={AboutData.staricon} alt="Star icon" />
                                <img src={AboutData.staricon} alt="Star icon" />
                                <img src={AboutData.staricon} alt="Star icon" />
                                <img src={AboutData.staricon} alt="Star icon" />
                            </div>
                            <div className="box-experience flex flex-col">
                                <span className="font-medium text-[36px]">{AboutData.experience}</span>
                                <p className="text-[24px] text-[var(--color-description)] ">
                                    {' '}
                                    {AboutData.experienceDes}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default About;
