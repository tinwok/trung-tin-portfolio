import { redirect } from 'react-router';
import toast from 'react-hot-toast';
export async function blogEditAction({ request, params }) {
    const formData = await request.formData();
    const title = formData.get('title');
    const content = formData.get('content');
    const isNew = !params.id;
    if (isNew) {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_ENDPOINT}/blogs`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json ' },
                body: JSON.stringify({
                    title,
                    content,
                    createdAt: new Date().toISOString(),
                }),
            });
            const newBlog = await response.json();
            toast.success('Đã thêm thành công');
            return redirect(`/blogs/${newBlog.id}`);
        } catch (error) {}
    } else {
        try {
            await fetch(`${import.meta.env.VITE_API_ENDPOINT}/blogs/${params.id}`, {
                method: 'PUT',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify({
                    id: params.id,
                    title,
                    content,
                    updatedAt: new Date().toISOString(),
                }),
            });
            toast.success('Đã sửa thành công');
            return redirect(`/blogs/${params.id}`);
        } catch (error) {
            toast.error('Sửa thất bại');
        }
    }
}

export async function blogDeleteAction({ params }) {
    try {
        await fetch(`${import.meta.env.VITE_API_ENDPOINT}/blogs/${params.id}`, {
            method: 'DELETE',
        });
        toast.success('Xoá blog thành công!');
    } catch (error) {
        toast.error('Xoá blog thất bại');
    }

    return redirect('/blogs');
}
