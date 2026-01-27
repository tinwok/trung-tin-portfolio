import { navBarData } from '../../data/navBavdata';
import { FaBars } from 'react-icons/fa';
import { useState } from 'react';
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
                    {navBarData.map((item) => {
                        if (item.icon) {
                            return;
                        } else {
                            return (
                                <li className="hover:text-[#FE4619] hover:text-semibold text-sm">
                                    <a href="#">{item.title} </a>
                                </li>
                            );
                        }
                    })}
                </ul>
            )}
        </div>
    );
}

export default NavBarMobible;
