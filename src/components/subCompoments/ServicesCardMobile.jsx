import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { ServicesData } from '../../data/ServicesData';
import RoundedButton from './RoundedButton';
import Card from './Card';

import 'swiper/css';
import 'swiper/css/pagination';
function ServicesCardMobile() {
    return (
        <div className="mt-[50px] lg:hidden h-[370px]">
            <Swiper
                slidesPerView="auto"
                spaceBetween={24}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="max-w-[80%]"
            >
                {ServicesData.serviceCard.map((card) => {
                    return (
                        <SwiperSlide key={card.id}>
                            <Card
                                image={card.image}
                                title={card.header}
                                className="group transition-colors  hover:bg-[var(--color-orange)]"
                            >
                                <RoundedButton className="absolute  bottom-5 right-6 group-hover:bg-[var(--color-orange)] z-100 group-hover:rotate-45 duration-100 "></RoundedButton>
                            </Card>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
}

export default ServicesCardMobile;
