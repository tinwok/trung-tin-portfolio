import Layout from './Layouts/mainLayout';
import Main from './components/Pages/MainPage';
import BlogPage from './components/Pages/BlogPage/BlogPage';
import BlogEditor from './components/Pages/BlogPage/BlogEditor';
import BlogDetail from './components/Pages/BlogPage/BlogDetail';
import SignInComponent from './components/SignInComponents';
import ProtectedRoute from './components/ProtectedRoute';
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import { blogEditLoader, blogListDetailLoader, blogListLoader } from './loader/blogLoaders';
import { blogEditAction, blogDeleteAction } from './action/blogAction';
import './App.css';
import './index.css';
const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Main />,
                loader: blogListLoader,
            },
            {
                path: '/blogs',
                element: <BlogPage />,
                loader: blogListLoader,
            },
            {
                path: '/blogs/:id',
                element: <BlogDetail />,
                loader: blogListDetailLoader,
                action: blogDeleteAction,
            },
            {
                element: <ProtectedRoute />,
                children: [
                    {
                        path: '/blogs/:id/edit',
                        element: <BlogEditor />,
                        loader: blogEditLoader,
                        action: blogEditAction,
                    },
                    {
                        path: '/blogs/create',
                        element: <BlogEditor />,
                        loader: blogEditLoader,
                        action: blogEditAction,
                    },
                ],
            },

            {
                path: '/signin/*',
                element: <SignInComponent />,
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
