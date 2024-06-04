import Login from "../Login/Login";
import Dashboard from "../Manage/Dashboard";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";
import Landing from "../landing/Index"
import Products from "../Manage/Product/Index";
import Single from "../Manage/Product/Single";


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
                    path: "",
                    element: <Dashboard />
                },
                {
                    path: 'products',
                    element: <Products />
                },
                {
                    path: 'products/:id',
                    element: <Single />
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

