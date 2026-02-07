import RoundedButton from './RoundedButton';

function PortfolioCard({ img, className = '' }) {
    const baseClassName = ' lg:h-[316px] rounded-[24px] bg-gray-500 overflow-hidden relative  hover:cursor-pointer';
    return (
        <div className={`${baseClassName} ${className}`}>
            <div>
                <img className="w-full h-full object-cover" src={img.image} alt={img.name + 'image'} />
            </div>
            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <RoundedButton className="absolute right-4 bottom-4 group-hover:bg-[var(--color-orange)] group-hover:rotate-45 duration-300 "></RoundedButton>
        </div>
    );
}

export default PortfolioCard;
