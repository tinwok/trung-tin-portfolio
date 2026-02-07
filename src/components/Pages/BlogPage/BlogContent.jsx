import { BlogsData } from '../../../data/BlogsData';
import BlogCard from '../../subCompoments/BlogCard';
import { useLoaderData, Link, useLocation } from 'react-router';
function BlogContent() {
    const { blogs } = useLoaderData();
    const location = useLocation();
    const isMainDesktop = location.pathname === '/';
    let visibleBlog = [];

    if (Array.isArray(blogs)) {
        if (isMainDesktop) {
            visibleBlog = blogs.slice(0, 3);
        } else {
            visibleBlog = blogs;
        }
    }
    return (
        <>
            {visibleBlog.map((blog, index) => {
                const displayCreatedAt = blog.createdAt ?? blog.updatedAt;
                const blogImage = index < 3 ? (BlogsData.images[index]?.image ?? null) : null;

                return (
                    <Link key={blog.id} to={`/blogs/${blog.id}`}>
                        <BlogCard
                            image={blogImage}
                            className="shadow-xl "
                            title={blog.title}
                            content={(blog.content?.slice(0, 400) ?? '') + '...'}
                            createdAt={displayCreatedAt}
                            hoverSetting="hover:underline  decoration-red-500 cursor-pointer "
                        >
                            <span className="hover:text-red-500 font-semibold">Xem thêm</span>
                        </BlogCard>
                    </Link>
                );
            })}
        </>
    );
}

export default BlogContent;
