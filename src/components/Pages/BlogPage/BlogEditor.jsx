import { Form, Link } from 'react-router';
import { useLoaderData } from 'react-router';
import Button from '../../subCompoments/Button';
function BlogEditor() {
    const { blog } = useLoaderData();

    const isNew = !blog;
    return (
        <section>
            <div className="max-w-[1200px] mx-auto ">
                <div className="mt-[40px]   mx-auto shadow-lg rounded-lg pb-20 pt-10">
                    <h1 className="text-center text-3xl mb-[20px] font-semibold ">
                        {isNew ? 'Tạo bài mới' : 'Sửa bài viết'}
                    </h1>
                    <Form method="POST" className="text-center rounded-lg ">
                        <div className="flex flex-col">
                            <label className="text-lg font-medium text-[var(--color-description)] " htmlFor="title">
                                Tiêu đề
                            </label>
                            <input
                                className="border border-zinc-300 rounded-sm w-[80%] mx-auto text-gray-500 p-2"
                                type="text"
                                id="title"
                                name="title"
                                defaultValue={isNew ? '' : blog.title}
                                required
                                placeholder="Nhập tiêu đề...."
                            />
                        </div>
                        <div className="flex flex-col">
                            <label
                                className="text-lg font-medium  text-[var(--color-description)] mt-4"
                                htmlFor="content"
                            >
                                Văn bản
                            </label>
                            <textarea
                                className="border border-zinc-300 rounded-sm w-[80%] mx-auto text-gray-500 p-2"
                                type="text"
                                id="content"
                                name="content"
                                rows="30"
                                defaultValue={isNew ? '' : blog.content}
                                required
                                placeholder="Nhập văn bản...."
                            />
                        </div>
                        <div className="flex gap-4 mt-10 ml-24">
                            <Button
                                className="rounded-sm !bg-sky-400 border border-sky-400 hover:!bg-sky-500  hover:border-sky-500 text-white lg:!text-[20px] "
                                type="submit"
                            >
                                {isNew ? 'Thêm' : 'Sửa'}
                            </Button>
                            <Link to="/blogs">
                                <Button
                                    type="button"
                                    className="rounded-sm !bg-red-400  border border-red-400 hover:!bg-red-500  hover:border-red-500 text-white lg:!text-[20px]"
                                >
                                    Huỷ
                                </Button>
                            </Link>
                        </div>
                    </Form>
                </div>
            </div>
        </section>
    );
}

export default BlogEditor;
