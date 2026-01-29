function Card({ image, title, className, children, ...props }) {
    const baseClasses =
        'lg:w-[282px] w-full h-[284px] lg:h-[370px] bg-[var(--color-card)] relative cursor-pointer rounded-[30px] text-white flex flex-col  justify-between ';
    return (
        <div className={`${baseClasses} ${className}`}>
            <h1 className="font-[var(--font-secondary)]  font-medium lg:text-2xl ml-[34px] mt-[18px] mb-[18px] after:rounded-full after:content-[''] lg:after:absolute after:top-[70px] after:left-[0px] after:w-full after:h-[1px] after:bg-[#555555]">
                {title}
            </h1>
            <div className="lg:w-[236px] h-[192px]  rounded-[30px] z-0 bg-[#767676] transform transition duration-300 group-hover:translate-y-[-60px] absolute bottom-0 left-6  group-hover:bg-[#FE7C5F]"></div>
            <div className="lg:w-[252px] h-[204px]  rounded-[30px] z-0 bg-[#9D9D9D]   transform transition duration-300 group-hover:translate-y-[-40px] absolute bottom-0 left-4 group-hover:bg-[#FEA28D] "></div>
            <div className="w-full h-[228px]  overflow-hidden rounded-[30px]  relative z-10">
                <img
                    src={image}
                    alt={title + ' image'}
                    className="w-full h-full object-cover object-cover object-[50%_0%]"
                />
            </div>
            {children}
        </div>
    );
}

export default Card;
