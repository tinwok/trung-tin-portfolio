function FeedBackCard({ content, authorname, authorCompany, authorPosition, avatar, quotationMark, fivestar }) {
    return (
        <div className="lg:h-[257px]  bg-[var(--color-card)] rounded-xl p-3 flex flex-col  text-white font-[var(--font-secondary)]">
            <div className="lg:p-7 p-2">
                <div className="flex gap-1 mb-2">
                    {fivestar.map((star, i) => (
                        <img key={i} src={star.image} alt="star" className="w-4 h-4" />
                    ))}
                </div>
                <p className="lg:text-l  text-xs mb-4 lg:mb-10">{content}</p>
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-4 lg:mt-3">
                        <div className="lg:w-[52px] lg:h-[52px] w-[32px] h-[32px] overflow-hidden rounded-full">
                            <img src={avatar} alt={authorname} className="object-cover w-full h-full" />
                        </div>
                        <div>
                            <h1 className="font-bold text-s lg:text-xl">{authorname + ', tác giả'}</h1>
                            <p className="lg:text-l text-xs">
                                {authorCompany}, {authorPosition}
                            </p>
                        </div>
                    </div>
                    <img className="lg:w-[48px] lg:h-[48px] opacity-30" src={quotationMark} alt=" quotationMark icon" />
                </div>
            </div>
        </div>
    );
}

export default FeedBackCard;
