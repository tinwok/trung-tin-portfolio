import { navBarData } from '../data/navBavdata';
import { Link, useLocation } from 'react-router';
import NavBarMobible from './Mobile/NavBarMobile';
import { BlogNavbarData } from '../data/navBavdata';
import Button from './subCompoments/Button';
import MainIcon from './subCompoments/MainIcon';
import tinlogo from '../assets/tinLogo.svg';
import { useAuth } from '@clerk/react-router';
import { UserButton } from '@clerk/react-router';
function Navbar() {
    const location = useLocation();
    const isBlog = location.pathname.startsWith('/blogs');
    const menu = isBlog ? BlogNavbarData : navBarData;
    const { isSignedIn } = useAuth();
    return (
        <nav>
            <div
                className={
                    isBlog
                        ? '  mt-[20px]  flex gap-16 px-4 lg:max-w-[1200px] w-full h-full mx-auto  items-center lg:justify-between p-6 lg:px-14 bg-[#1E1D1D] text-white rounded-[56px] py-[16px] font-(--font-irish-grover) relative'
                        : '  mt-[20px]  flex gap-16 px-4 lg:max-w-[1200px] w-full h-full mx-auto  items-center lg:justify-center p-6 lg:px-14 bg-[#1E1D1D] text-white rounded-[56px] py-[16px] font-(--font-irish-grover) relative'
                }
            >
                {isSignedIn && isBlog ? (
                    <UserButton
                        appearance={{
                            elements: {
                                avatarBox: '!w-12 !h-12',
                            },
                        }}
                    />
                ) : isBlog ? (
                    <Link to="/">
                        <MainIcon name="Tin" image={tinlogo} textSize="[24px]"></MainIcon>{' '}
                    </Link>
                ) : (
                    ''
                )}
                <ul className=" hidden lg:flex items-center gap-16">
                    {menu.map((nav) => (
                        <li key={nav.id}>
                            <Link
                                to={nav.path}
                                className={
                                    nav.icon
                                        ? 'flex items-center gap-2  cursor-pointer hover:text-[#FE4619] text-xl logo '
                                        : 'cursor-pointer hover:text-[#FE4619] text-base'
                                }
                            >
                                {nav.icon && <img src={nav.icon} alt={nav.title} className="w-8 h-8" />}
                                <span>{nav.title}</span>
                            </Link>
                        </li>
                    ))}

                    {isSignedIn && isBlog ? (
                        <li>
                            <Button className="!bg-sky-500 rounded-lg border border-sky-500 hover:opacity-75 duration-300">
                                <Link to="/blogs/create"> Thêm bài viết</Link>
                            </Button>
                        </li>
                    ) : (
                        isBlog && (
                            <li>
                                <Button className="!bg-sky-500 rounded-lg border border-sky-500 hover:opacity-75 duration-300">
                                    <Link to="/signin">Đăng nhập</Link>
                                </Button>
                            </li>
                        )
                    )}
                </ul>
                <NavBarMobible className="lg:hidden text-xl cursor-pointer"></NavBarMobible>
            </div>
        </nav>
    );
}

export default Navbar;
