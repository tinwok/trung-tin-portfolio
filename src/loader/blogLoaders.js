export async function blogListLoader() {
    const API_ENDPOINT = import.meta.env.VITE_API_ENDPOINT;

    const response = await fetch(`${API_ENDPOINT}/blogs`);
    if (!response.ok) {
        throw new Error(`Failed to fetch blogs: ${response.status} ${response.statusText}`);
    }

    const blogs = await response.json();
    return { blogs };
}

export async function blogListDetailLoader({ params }) {
    const API_ENDPOINT = import.meta.env.VITE_API_ENDPOINT;

    const response = await fetch(`${API_ENDPOINT}/blogs/${params.id}`);

    if (!response.ok) {
        throw new Error(`Failed to fetch blogs: ${response.status} ${response.statusText}`);
    }

    const blog = await response.json();
    return { blog };
}

export async function blogEditLoader({ params }) {
    const API_ENDPOINT = import.meta.env.VITE_API_ENDPOINT;
    if (!params.id) {
        return { blog: null };
    }
    const response = await fetch(`${API_ENDPOINT}/blogs/${params.id}`);

    if (!response.ok) {
        throw new Error(`Failed to fetch blogs: ${response.status} ${response.statusText}`);
    }

    const blog = await response.json();
    return { blog };
}
