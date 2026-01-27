import { navBarData } from '../data/navBavdata';
import NavBarMobible from './Mobile/NavBarMobile';
function Navbar() {
    return (
        <header className="mt-[20px]  flex gap-16 px-4">
            <div className=" lg:max-w-[1200px] w-full h-full mx-auto flex items-center lg:justify-center p-6 lg:px-14 bg-[#1E1D1D] text-white rounded-[56px] py-[16px] font-(--font-irish-grover) relative">
                <ul className=" hidden lg:flex items-center gap-16">
                    {navBarData.map((nav) => (
                        <li key={nav.id}>
                            <a
                                href="#"
                                className={
                                    nav.icon
                                        ? 'flex items-center gap-2  cursor-pointer hover:text-[#FE4619] text-xl logo '
                                        : 'cursor-pointer hover:text-[#FE4619] hover:text-semibold text-base'
                                }
                            >
                                {nav.icon && <img src={nav.icon} alt={nav.title} className="w-8 h-8" />}
                                <span>{nav.title}</span>
                            </a>
                        </li>
                    ))}
                </ul>
                <NavBarMobible className="lg:hidden text-xl cursor-pointer"></NavBarMobible>
            </div>
        </header>
    );
}

export default Navbar;
