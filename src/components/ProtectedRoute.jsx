import { Navigate, Outlet } from 'react-router';
import { useAuth } from '@clerk/react-router';
function ProtectedRoute() {
    const { isSignedIn, isLoaded } = useAuth();

    if (!isLoaded) {
        return <div>...Loading</div>;
    }
    if (!isSignedIn) {
        return <Navigate to="/sign-in" />;
    }
    return <Outlet />;
}

export default ProtectedRoute;
