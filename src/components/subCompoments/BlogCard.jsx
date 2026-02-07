import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router';

function BlogCard({ title, content, createdAt, children, className, preline, hoverSetting, image }) {
    const location = useLocation();
    const isMaindeskop = location.pathname === '/';
    return (
        <div
            className={` w-[80%] lg:w-full  mx-auto  border border-gray-300 rounded-sm p-4 flex flex-col justify-between ${className} `}
        >
            {isMaindeskop ? (
                <div className="h-[300px] rounded-lg overflow-hidden mb-5 ">
                    <img src={image} alt={image + 'Image '} className="object-cover w-full h-full " />{' '}
                </div>
            ) : (
                ''
            )}

            <div>
                <h1 className={`text-2xl font-medium mb-2  ${hoverSetting} `}>{title}</h1>
                {isMaindeskop ? (
                    ''
                ) : (
                    <p className={`font-medium text-[var(--color-description)] mx-auto mb-4  ${preline} `}>{content}</p>
                )}
            </div>
            <div className="flex  gap-4 items-center ">
                <div>
                    <FontAwesomeIcon icon={faCircle} className="text-[var(--color-orange)] " />
                    <span className="text-gray-400"> {new Date(createdAt).toLocaleDateString()}</span>
                </div>
                {children}
            </div>
        </div>
    );
}

export default BlogCard;
