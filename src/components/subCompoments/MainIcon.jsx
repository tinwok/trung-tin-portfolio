function MainIcon({ name, image, textSize, logoSize, className = '' }) {
    return (
        <div className={`flex items-center gap-4  cursor-pointer hover:text-[#FE4619]  ${className}`}>
            <img
                src={image}
                alt={name + ' image'}
                className={`w-${logoSize} h-${logoSize} lg:w-15 lg:h-15 object-contain`}
            />
            <h1
                className={`font-(family-name:--font-logo) text-white text-${textSize} lg:text-4xl hover:text-[var(--color-orange)] `}
            >
                {name}
            </h1>
        </div>
    );
}

export default MainIcon;
