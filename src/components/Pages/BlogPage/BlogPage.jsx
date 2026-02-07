import BlogContent from './BlogContent';
function BlogPage() {
    return (
        <section>
            <div className="lg:max-w-[1200px] mx-auto mt-[40px] bg-white">
                {/* top container */}
                <div className="flex flex-col text-center gap-4">
                    <h1 className="text-4xl font-medium ">Tất cả Blogs</h1>
                    <p className="text-xl text-[var(--color-description)]">
                        Khám phá các bài viết chọn lọc cùng những góc nhìn chuyên sâu.
                    </p>
                </div>
                {/* bottom container */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-[20px] ">
                    <BlogContent></BlogContent>
                </div>
            </div>
        </section>
    );
}

export default BlogPage;
