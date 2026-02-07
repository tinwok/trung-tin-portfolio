import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import { Toaster } from 'react-hot-toast';
function Layout() {
    return (
        <div>
            <Navbar />
            <main>
                <Toaster position="top-right" reverseOrder={false} />
                <Outlet></Outlet>
            </main>
        </div>
    );
}

export default Layout;
