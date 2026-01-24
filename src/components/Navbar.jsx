import { navBarData } from '../data/navBavdata';
function Navbar() {
    return (
        <header className="mt-[80px]">
            <div className="my-container h-full mx-auto flex items-center justify-center p-6 lg:px-14 bg-[#1E1D1D] text-white rounded-[56px] py-[16px] font-( --font-irish-grover)">
                <ul className="flex gap-16">
                    {navBarData.map((nav) => (
                        <li
                            key={nav.id}
                            className={
                                nav.icon
                                    ? 'flex items-center gap-2  cursor-pointer hover:text-[#FE4619] text-xl logo '
                                    : 'cursor-pointer hover:text-[#FE4619] text-base'
                            }
                        >
                            {nav.icon && <img src={nav.icon} alt={nav.title} className="w-8 h-8" />}
                            <span>{nav.title}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
}

export default Navbar;
