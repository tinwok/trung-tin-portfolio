import Button from './subCompoments/Button';
import { Link } from 'react-router';
import BlogContent from './Pages/BlogPage/BlogContent';
import { BlogsData } from '../data/BlogsData';
function BlogPosts() {
    return (
        <section className="mb-[20px]">
            <div className="max-w-[1200px] mx-auto ">
                {/* top container */}
                <div className="flex justify-between items-center mb-10">
                    <h1 className="text-4xl">
                        {BlogsData.header.map((item, index) => {
                            if (typeof item === 'string') {
                                return item;
                            } else {
                                return (
                                    <span key={index} className="text-[var(--color-orange)] ">
                                        {item.highlight}
                                    </span>
                                );
                            }
                        })}
                    </h1>
                    <Link to={'/blogs'}>
                        <Button
                            hoverSetting="hover:!bg-[var(--color-orange)] hover:text-white hover:border hover:border-[var(--color-orange)] ] "
                            className="p-2"
                        >
                            Xem thêm
                        </Button>
                    </Link>
                </div>
                {/* bottom container */}
                <div className="w-full mx-auto grid grid-cols-1 lg:grid-cols-3 gap-3">
                    <BlogContent></BlogContent>
                </div>
            </div>
        </section>
    );
}

export default BlogPosts;
