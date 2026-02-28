import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import { Toaster } from 'react-hot-toast';
import { ClerkProvider } from '@clerk/react-router';
import { useNavigate } from 'react-router';
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
if (!PUBLISHABLE_KEY) {
    throw new Error('Khong co publishable key');
}
function Layout() {
    const navigate = useNavigate();
    return (
        <div>
            <ClerkProvider
                publishableKey={PUBLISHABLE_KEY}
                routerPush={(to) => navigate(to)}
                routerReplace={(to) => navigate(to, { replace: true })}
            >
                <Navbar />
                <main>
                    <Toaster position="top-right" reverseOrder={false} />

                    <Outlet></Outlet>
                </main>
            </ClerkProvider>
        </div>
    );
}

export default Layout;
