import React, {lazy, Suspense} from "react";
import ReactDom from "react-dom/client"
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
// import Grocery from "./components/Grocery";


// Chunking 
// Code Splitting 
// Dynamic Bundling 
// lazy loading or on-demand loading (load based on user demand means if i want that my grocery component should only load when i click on grocery link not when our whole app loads then i will use lazy loading or on-demand loading so what happen when we load our react app it loads a single js file which contains our whole app so if we want to imporve our performance then we we load our component based on demand using lazy loading in differnt js file not in single js file wehn user loads the app )

const Grocery= lazy(()=> import("./components/Grocery"))


const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Outlet />
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                path: "/",
                element:<Body/>,
            },
 {
        path:"/about",
        element:<About/>,
    },
    {
        path:"/contact",
        element:<ContactUs/>
    },
    {
        path: "/restaurants/:resId",
        element:<RestaurantMenu/>
    },
       {
        path: "/grocery",
        element: <Suspense fallback={<h1>Loading....</h1>}><Grocery /></Suspense> 
    },
        ],

        errorElement:<Error/>
    },
   
])
const root = ReactDom.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter} />)
