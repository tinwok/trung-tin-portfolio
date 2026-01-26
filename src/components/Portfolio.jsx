import { PortfolioData } from '../data/PortfolioData';
import PortfolioCard from './subCompoments/PortfolioCard';
import Button from './subCompoments/Button';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

function Portfolio() {
    return (
        <section className="my-container mb-[120px]">
            <div className="flex top-container justify-between items-center mt-[70px]">
                <h1 className="text-3xl">
                    {PortfolioData.header.map((item, index) => {
                        if (typeof item === 'string') return item;
                        return (
                            <span key={index} className="text-red-500">
                                {item.highlight}
                            </span>
                        );
                    })}
                </h1>
                <Button className="p-2 text-[28px]  hover:bg-[var(--color-orange)] hover:border-[var(--color-orange)] hover:text-white">
                    Xem thêm
                </Button>
            </div>
            <div className="portfolio-galery mt-[82px]  mb-[80px]">
                <Swiper
                    slidesPerView="auto"
                    spaceBetween={24}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    breakpoints={{
                        340: {
                            slidesPerView: 2,
                            spaceBetween: 15,
                        },
                        700: {
                            slidesPerView: 3,
                            spaceBetween: 15,
                        },
                    }}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[FreeMode, Pagination, Autoplay]}
                    className="max-w-[80%] lg:max-w-[100%] "
                >
                    {PortfolioData.portfolioImage.map((img) => (
                        <SwiperSlide key={img.id}>
                            <PortfolioCard img={img} className=" hover:bg-[var(--color-orange)] group" />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}

export default Portfolio;
