import { Navigate, Outlet } from 'react-router';
import { useLocation } from 'react-router';
import { useAuth } from '@clerk/react-router';
function ProtectedRoute() {
    const { isSignedIn, isLoaded } = useAuth();
    const location = useLocation();
    if (!isLoaded) {
        return <div>...Loading</div>;
    }
    if (!isSignedIn) {
        return <Navigate to="/signin" state={{ from: location }} replace />;
    }
    return <Outlet />;
}

export default ProtectedRoute;
