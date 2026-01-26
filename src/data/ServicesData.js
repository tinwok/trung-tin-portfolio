import dataBaseImg from '../assets/dataBaseImg.jpeg';
import webDesignImg from '../assets/webDesign.jpeg';
import landingPageImg from '../assets/LandingPage.jpeg';
export const ServicesData = {
    header: [{ highlight: 'Dịch vụ ' }, 'thiết kế '],
    des: 'Cung cấp dịch vụ phát triển web trọn gói,  đảm bảo giải pháp ổn định, dễ mở rộng và phù hợp mục tiêu kinh doanh.',
    cardImage1: dataBaseImg,
    cardImage2: webDesignImg,
    cardImage3: landingPageImg,
    serviceCard: [
        { id: 1, header: 'Data Base', image: dataBaseImg },
        { id: 2, header: 'Web Design', image: webDesignImg },
        { id: 3, header: 'Landing page', image: landingPageImg },
    ],
};
