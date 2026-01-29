function Button({ children, className = '', ...props }) {
    const baseClasses =
        'box-border flex items-center justify-center px-[18px] bg-white rounded-full lg:text-[24px] border border-solid border-[#9D9696]  cursor-pointer';
    return (
        <>
            <button className={`${baseClasses} ${className}`}>{children}</button>
        </>
    );
}

export default Button;
