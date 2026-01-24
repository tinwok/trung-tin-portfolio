function Button({ children, className = '', ...props }) {
    const baseClasses =
        'box-border flex items-center px-[18px] bg-white rounded-full border border-solid border-[#9D9696] text-[24px] cursor-pointer';
    return (
        <>
            <button className={`${baseClasses} ${className}`}>{children}</button>
        </>
    );
}

export default Button;
