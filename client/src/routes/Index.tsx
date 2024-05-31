import Login from "../Login/Login";
import Manage from "../Manage/Index";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";
// import { useAuth } from "../provider/authProvider";
import Landing from "../landing/Index"


const Routes = () => {
    const routesForPublic = [
        {
            path: "/",
            element: <Landing />,
        },
        {
            path: "/admin/login",
            element: <Login />
        },
    ];

    const routesForAuthenticatedOnly = [
        {
            path: "/manage",
            element: <ProtectedRoute />,
            children: [
                {
                    path: "/manage",
                    element: <Manage />
                }
            ]
        }
    ];

    const router = createBrowserRouter([
        ...routesForPublic,
        ...routesForAuthenticatedOnly,
    ]);

    // Provide the router configuration using RouterProvider
    return <RouterProvider router={router} />;

};

export default Routes;

