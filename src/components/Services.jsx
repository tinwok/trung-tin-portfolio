import { ServicesData } from '../data/ServicesData';
import RoundedButton from './subCompoments/RoundedButton';
import Card from './subCompoments/Card';
function Services() {
    return (
        <>
            <div className="my-container bg-[var(--color-secondary)] h-[658px] rounded-[40px] relative">
                <div
                    className="top-container relative  flex justify-around items-center pt-[100px] 
                after:rounded-full after:content-[''] after:absolute after:bottom-[-20px] after:w-[85%] after:h-[2px] after:bg-[var(--color-description)] "
                >
                    <h1 className=" text-white text-4xl">
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
                    <p className="text-white w-[395px]">{ServicesData.des}</p>
                </div>
                <div className="bottom-container mt-[50px] flex justify-evenly  ">
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
                    {/* <Card
                        title="Data Base"
                        className="group transition-colors  hover:bg-[var(--color-orange)] "
                        image={ServicesData.cardImage1}
                    >
                        {
                            <RoundedButton className="absolute  bottom-5 right-6 group-hover:bg-[var(--color-orange)] group-duration-300 z-100 group-hover:rotate-45 duration-100"></RoundedButton>
                        }
                    </Card>
                    <Card
                        title="Web Design"
                        className="group transition-colors duration-300 hover:bg-[var(--color-orange)] "
                        image={ServicesData.cardImage2}
                    >
                        {
                            <RoundedButton className="absolute  bottom-5 right-6 group-hover:bg-[var(--color-orange)] z-100 group-hover:rotate-45 duration-100"></RoundedButton>
                        }
                    </Card>
                    <Card
                        title="Landing page"
                        className="group transition-colors duration-300 hover:bg-[var(--color-orange)]"
                        image={ServicesData.cardImage3}
                    >
                        {
                            <RoundedButton className="absolute  bottom-5 right-6 group-hover:bg-[var(--color-orange)] z-100 group-hover:rotate-45 duration-100 "></RoundedButton>
                        }
                    </Card> */}
                </div>
            </div>
        </>
    );
}

export default Services;
