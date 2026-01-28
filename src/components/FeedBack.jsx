import { FeedBackData } from '../data/FeedBackData';

import FeedBackCard from './subCompoments/FeedBackCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

function FeedBack() {
    return (
        <section>
            <div className="max-w-[1200px] mx-auto bg-[var(--color-secondary)] lg:rounded-[30px] lg:h-[668px] flex flex-col items-center">
                <h1 className="text-white text-center mt-[22px] mb-[22px]  lg:mt-[82px] lg:mb-[87px] text-l lg:text-4xl w-[474px]">
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
                <div className="w-full pb-5 lg:h-[300px]">
                    <Swiper
                        speed={3000}
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        slidesPerView={1}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination, Autoplay]}
                        className="w-[80%]"
                    >
                        {FeedBackData.feedBackCard.map((item, index) => (
                            <SwiperSlide key={index}>
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
            </div>
        </section>
    );
}

export default FeedBack;
