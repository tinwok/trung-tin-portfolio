import { FeedBackData } from '../data/FeedBackData';

import FeedBackCard from './subCompoments/FeedBackCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
function FeedBack() {
    return (
        <section className="my-container bg-[var(--color-secondary)] rounded-[30px] h-[668px] flex flex-col items-center">
            <h1 className="text-white text-center mt-[82px] mb-[87px] text-4xl w-[474px]">
                {FeedBackData.header.map((item, index) => {
                    if (typeof item !== 'string')
                        return (
                            <span key={index} className="text-red-500">
                                {item.highlight}
                            </span>
                        );
                    return item;
                })}
            </h1>
            <div>
                <Swiper
                    speed={6000}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    slidesPerView="auto"
                    spaceBetween={24}
                    freeMode={{
                        enabled: true,
                        momentum: true,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[FreeMode, Pagination, Autoplay]}
                    className="w-[80%]"
                >
                    {FeedBackData.feedBackCard.map((item, index) => (
                        <SwiperSlide key={index} className="w-[380px]">
                            <FeedBackCard
                                content={item.content}
                                authorname={item.authorname}
                                authorCompany={item.authorCompany}
                                authorPosition={item.authorPosition}
                                avatar={item.avatar}
                                quotationMark={item.quotationMark}
                                fivestar={item.fivestar}
                            ></FeedBackCard>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}

export default FeedBack;
