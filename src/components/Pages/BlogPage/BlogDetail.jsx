import Button from '../../subCompoments/Button';
import BlogCard from '../../subCompoments/BlogCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useLoaderData, Link, Form } from 'react-router';
function BlogDetail() {
    const { blog } = useLoaderData();
    const displayDate = blog.updatedAt ?? blog.createdAt;
    return (
        <section>
            <div className="mt-[40px] max-w-[1200px] mx-auto">
                <div className="mb-[20px] text-center">
                    <Link to="/blogs" className="text-xl font-medium hover:text-red-400 duration-300 text-sky-500">
                        <FontAwesomeIcon icon={faArrowLeft} /> Quay lại
                    </Link>
                </div>
                <BlogCard
                    title={blog.title}
                    content={blog.content}
                    createdAt={displayDate}
                    preline="whitespace-pre-line"
                >
                    <div className="flex gap-4 justify-center mt-[20px]">
                        <Link to={`/blogs/${blog.id}/edit`}>
                            <Button className="w-[130px] lg:!text-[20px] rounded-lg !bg-blue-600 text-white p-2 border border-blue-600 hover:opacity-75 duration-300 ">
                                Sửa
                            </Button>
                        </Link>
                        <Form
                            method="DELETE"
                            onSubmit={(e) => {
                                if (!confirm('Bạn có chắc là xoá blog này không ? ')) {
                                    e.preventDefault();
                                }
                            }}
                        >
                            <Button
                                type="submit"
                                className="w-[130px] lg:!text-[20px] rounded-lg !bg-red-600 !lg:text-[18px] text-white p-2 border border-red-600 hover:opacity-75 duration-300"
                            >
                                Xoá
                            </Button>
                        </Form>
                    </div>
                </BlogCard>
            </div>
        </section>
    );
}

export default BlogDetail;
