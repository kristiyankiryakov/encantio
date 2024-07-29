import { Navigate, Outlet } from "react-router-dom";
import useAuthStore from "../stores/AuthStore";
import SideBar from "../Manage/SideBar/SideBar";
import "react-toastify/dist/ReactToastify.css";

export const ProtectedRoute = () => {
    const token = useAuthStore(state => state.token);
    if (!token) {
        return <Navigate to="/" />;
    }
    return <>
        <div className="flex h-full dark:bg-[#212121]">
            <SideBar />

            <Outlet />

        </div></>

};