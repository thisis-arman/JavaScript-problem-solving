import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/MainLayout/Main";
import Homepage from "../Pages/HomePage/Homepage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Homepage />
            }
        ]
    },
]);

export default router;