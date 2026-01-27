import { ServicesData } from '../data/ServicesData';
import RoundedButton from './subCompoments/RoundedButton';
import Card from './subCompoments/Card';
import ServicesCardMobile from './subCompoments/ServicesCardMobile';
function Services() {
    return (
        <section className="px-6">
            <div className="lg:max-w-[1200px] mx-auto w-full  bg-[var(--color-secondary)] lg:h-[658px] rounded-[40px] relative">
                {/* top-container */}
                <div
                    className=" relative  w-full  flex flex-col items-center text-center  lg:flex-row lg:justify-around lg:items-center pt-[20px] lg:pt-[100px] 
                after:rounded-full after:content-[''] after:absolute after:bottom-[-20px] after:w-[85%] after:h-[2px] after:bg-[var(--color-description)] "
                >
                    <h1 className=" text-white text-xl lg:text-4xl ">
                        {ServicesData.header.map((item, index) => {
                            if (typeof item !== 'string') {
                                return (
                                    <span className="text-red-500 " key={index}>
                                        {item.highlight}
                                    </span>
                                );
                            } else {
                                return item;
                            }
                        })}
                    </h1>
                    <p className="text-white text-l max-w-[395px] ">{ServicesData.des}</p>
                </div>
                {/* bottom-container */}
                <div className=" mt-[50px] lg:flex justify-evenly hidden   ">
                    {ServicesData.serviceCard.map((card) => {
                        return (
                            <Card
                                image={card.image}
                                title={card.header}
                                key={card.id}
                                className="group transition-colors  hover:bg-[var(--color-orange)]"
                            >
                                {
                                    <RoundedButton className="absolute  bottom-5 right-6 group-hover:bg-[var(--color-orange)] z-100 group-hover:rotate-45 duration-100 "></RoundedButton>
                                }
                            </Card>
                        );
                    })}
                </div>
                <ServicesCardMobile></ServicesCardMobile>
            </div>
        </section>
    );
}

export default Services;
