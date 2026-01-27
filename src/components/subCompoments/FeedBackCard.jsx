function FeedBackCard({ content, authorname, authorCompany, authorPosition, avatar, quotationMark, fivestar }) {
    return (
        <div className="h-[257px]  bg-[var(--color-card)] rounded-4xl p-3 flex flex-col  text-white font-[var(--font-secondary)]">
            <div className="p-7">
                <div className="flex gap-1 mb-2">
                    {fivestar.map((star, i) => (
                        <img key={i} src={star.image} alt="star" className="w-4 h-4" />
                    ))}
                </div>
                <p className="text-l  mb-10">{content}</p>
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2 lg:mt-3">
                        <div className="w-[52px] h-[52px]  overflow-hidden rounded-full">
                            <img src={avatar} alt={authorname} className="object-cover w-full h-full" />
                        </div>
                        <div>
                            <h1 className="font-bold lg:text-xl">{authorname + ', tác giả'}</h1>
                            <p className="lg:text-l">
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
