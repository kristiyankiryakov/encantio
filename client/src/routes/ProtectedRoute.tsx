import { Navigate, Outlet } from "react-router-dom";
import useAuthStore from "../stores/AuthStore";
import SideBar from "../Manage/SideBar";

export const ProtectedRoute = () => {
    const token = useAuthStore(state => state.token);
    if (!token) {
        return <Navigate to="/" />;
    }
    return <>
        <div className="flex h-full">
            <SideBar />

            <Outlet />
        </div></>

};