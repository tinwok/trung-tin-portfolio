function MainIcon({ name, image, className = '' }) {
    return (
        <div className={`flex items-center gap-4  cursor-pointer hover:text-[#FE4619]  ${className}`}>
            <img src={image} alt={name + ' image'} className="w-20 h-20 object-contain" />
            <h1 className="font-(family-name:--font-logo) text-white  text-4xl hover:text-red-500">{name}</h1>
        </div>
    );
}

export default MainIcon;
