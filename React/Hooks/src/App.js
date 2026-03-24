import {lazy, Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import ResMenu from "./components/ResMenu";
import { createBrowserRouter, RouterProvider, Outlet, data } from "react-router"; 
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";
import {Provider} from 'react-redux';
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

const AppLayout = () => {
    const [userName, setUserName] = useState();

    useEffect(() => {
        // API call that sends username and password
        const data = {
            name: "Aayushi",
        } 
        setUserName(data.name);
    }, []);

    return (
        <Provider store={appStore}>
            <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
                <div className="app-container">
                    <Header />
                    <Outlet />
                </div>
            </UserContext.Provider>
        </Provider>
    );
}

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
            {
                path: "/cart",
                element: <Cart />,
            },
        ],
        errorElement: <Error />
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);