import LogIn from "./Components/LogIn";
import Root from "./Components/Root";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUp from "./Components/SignUp";
import AddCraft from "./Components/AddCraft";
import ProtectedRoute from "./Components/ProtectedRoute";
import MyCraft from "./Components/MyCraft";
import AllCrafts from "./Components/AllCrafts";
import Home from "./Components/Home";
import Update from "./Components/Update";
import Details from "./Components/Details";
import Subcategories from "./Components/Subcategories";
import Error from "./Error";


const Router = () => {

  const fetchCrafts = () => {
    return fetch("https://ph-assignment10-server-omega.vercel.app/crafts").then((res) => res.json());
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <Error/>,
      loader: () => fetch("https://ph-assignment10-server-omega.vercel.app/crafts").then((res) => res.json()),
      children: [
        {
          path: "/",
          element: <Home/>,
          loader: fetchCrafts,
        },
        {
          path: "/logIn",
          element: <LogIn/>,
        },
        {
          path: "/signUp",
          element: <SignUp/>,
        },
        {
          path: "/addCraft",
          element: <ProtectedRoute><AddCraft/></ProtectedRoute>,
        },
        {
          path: "/myCraft",
          element: <ProtectedRoute><MyCraft/></ProtectedRoute>,
          loader: fetchCrafts,
        },
        {
          path: "/update/:id",
          element: <ProtectedRoute><Update/></ProtectedRoute>,
          loader: async ({ params }) => {
            return fetch(`https://ph-assignment10-server-omega.vercel.app/crafts/${params.id}`).then((res) => res.json());
          },
        },
        {
          path: "/details/:id",
          element: <ProtectedRoute><Details/></ProtectedRoute>,
          loader: async ({ params }) => {
            return fetch(`https://ph-assignment10-server-omega.vercel.app/crafts/${params.id}`).then((res) => res.json());
          },
        },
        {
          path: "/subcategories/:id",
          element: <Subcategories/>,
          loader: async ({ params }) => {
            return fetch(`https://ph-assignment10-server-omega.vercel.app/subcategories/${params.id}`).then((res) => res.json());
          },   
        },
        {
          path: "/allCrafts",
          element: <AllCrafts/>,
          loader: fetchCrafts,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Router;
