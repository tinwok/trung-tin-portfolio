import StarIcon from '../assets/star-icon.svg';
import baoAnhImg from '../assets/FeedBackIMG/bao_anh.jpg';
import min from '../assets/FeedBackIMG/min.webp';
import phuong_anh_dao from '../assets/FeedBackIMG/phuong_anh_dao.jpg';
import son_tung from '../assets/FeedBackIMG/son_tung.jpg';
import quotationMark from '../assets/dauphay.svg';

export const FeedBackData = {
    header: [{ highlight: 'Phản hồi ' }, 'của khách hàng nói lên tất cả'],
    feedBackCard: [
        {
            id: 1,
            content: 'Thiết kế hiện đại, chuẩn responsive trên cả desktop và mobile.',
            authorname: 'Min',
            authorCompany: 'Uni Corp',
            authorPosition: 'CEO',
            avatar: min,
            quotationMark: quotationMark,
            fivestar: Array(5)
                .fill(null)
                .map(() => ({ image: StarIcon })),
        },
        {
            id: 2,
            content: 'Website hoạt động mượt, load nhanh và giao diện rất dễ sử dụng.',
            authorname: 'Bảo anh',
            authorCompany: 'Home Credit',
            authorPosition: 'CEO',
            avatar: baoAnhImg,
            quotationMark: quotationMark,
            fivestar: Array(5)
                .fill(null)
                .map(() => ({ image: StarIcon })),
        },
        {
            id: 3,
            content: 'Code gọn gàng, bố cục rõ ràng, dễ mở rộng thêm tính năng.',
            authorname: 'Phương Anh Đào',
            authorCompany: 'Vni Bank',
            authorPosition: 'Manager',
            avatar: phuong_anh_dao,
            quotationMark: quotationMark,
            fivestar: Array(5)
                .fill(null)
                .map(() => ({ image: StarIcon })),
        },
        {
            id: 4,
            content: 'Sản phẩm ổn định, dễ bảo trì, đúng tiêu chuẩn web hiện đại.',
            authorname: 'Tùng',
            authorCompany: 'SOMO Mart',
            authorPosition: 'Manager',
            avatar: son_tung,
            quotationMark: quotationMark,
            fivestar: Array(5)
                .fill(null)
                .map(() => ({ image: StarIcon })),
        },
    ],
};
