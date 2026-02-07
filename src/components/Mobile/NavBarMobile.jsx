import { navBarData } from '../../data/navBavdata';
import { FaBars } from 'react-icons/fa';
import { useState } from 'react';
import { Link } from 'react-router';
function NavBarMobible({ className = '', ...props }) {
    const [isOpen, setIsOpen] = useState(false);
    function handleMouseleave(event) {
        if (event) {
            setIsOpen(!isOpen);
        } else {
            return;
        }
    }
    return (
        <div className={` ${className}`}>
            <FaBars
                className="hover:text-[#FE4619] hover:text-semibold w-[24px] h-[24px]"
                onClick={() => {
                    setIsOpen(!isOpen);
                }}
            />
            {isOpen && (
                <ul
                    className="flex gap-4 top-10 flex-col absolute z-1  mt-4 bg-[#1E1D1D] px-6 py-5 rounded-l"
                    onMouseLeave={(e) => handleMouseleave(e)}
                >
                    {navBarData.map((item, index) => {
                        if (item.icon) {
                            return;
                        } else {
                            return (
                                <Link
                                    key={index}
                                    to={item.path}
                                    className="hover:text-[#FE4619] hover:text-semibold text-sm"
                                >
                                    {item.title}
                                </Link>
                            );
                        }
                    })}
                </ul>
            )}
        </div>
    );
}

export default NavBarMobible;
