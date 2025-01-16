import React, {lazy, suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import Grocery from "./components/Grocery";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appstore";
import Cart from "./components/Cart";


// const Grocery = lazy(() => import("./components/Grocery"));


const AppLayout = () =>{
const [userName, setUserName] = useState();

  useEffect(() => {
    const data = {
      name:"Ramya Sri",
    };
    setUserName(data.name)
  },[])

  return (
    <Provider store = {appStore}>
    <UserContext.Provider value={{loggedInUser : userName, setUserName}}>
        <div className="app">
          <Header/>
          <Outlet/>
        </div>
    </UserContext.Provider>
    </Provider>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children:
        [
          {
            path: "/",
            element: <Body/>,

          },
          {
            path: "/About",
            element: <About/>,
          },
          {
            path: "/Contact",
            element: <Contact/>,
          },
          // {
          //   path: "/Grocery",
          //   element: <suspense fallback={<h1>Loading...</h1>}><Grocery/></suspense>,
          // },
          {
            path: "/restaurant/:resId",
            element: <RestaurantMenu />,
          },
          {
            path: "/cart",
            element: <Cart />,
          }
        ],
        errorElement: <Error/>
    },
    
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router = {appRouter}/>);