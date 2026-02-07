function MainIcon({ name, image, textSize, logoSize, className = '' }) {
    return (
        <div className={`flex items-center gap-4  cursor-pointer hover:text-[#FE4619]  ${className}`}>
            <img
                src={image}
                alt={name + ' image'}
                className={`w-${logoSize} h-${logoSize} lg:w-12 lg:h-12 object-contain`}
            />
            <h1
                className={`font-(family-name:--font-logo) text-white text-${textSize} lg:text-3xl hover:text-[var(--color-orange)] `}
            >
                {name}
            </h1>
        </div>
    );
}

export default MainIcon;
