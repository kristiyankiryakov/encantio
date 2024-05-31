import { Navigate, Outlet } from "react-router-dom";
import useAuthStore from "../stores/AuthStore";

export const ProtectedRoute = () => {
    const token = useAuthStore(state => state.token);
    if (!token) {
        return <Navigate to="/" />;
    }
    return <Outlet />;

};