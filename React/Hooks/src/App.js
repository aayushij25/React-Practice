import {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import ResMenu from "./components/ResMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router"; 
import Shimmer from "./components/Shimmer";

const AppLayout = () => (
    <div className="app-container">
        <Header />
        <Outlet />
    </div>
);

const Groceries = lazy(() => import('./components/Groceries'));

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children:[
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <About/>,
            },
            {
                path: "/contact",
                element: <Contact/>,
            },
            {
                path: "/restaurants/:resId",
                element: <ResMenu/>,
            },
            {
                path: "/groceries",
                element: <Suspense fallback={<Shimmer />}><Groceries/></Suspense>,
            },
        ],
        errorElement: <Error />
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);