import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout/MainLayout";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Home from "../pages/Home/Home/Home";
import BioDataDetails from "../pages/BioDataDetails/BioDataDetails";
import PrivateRoute from "./PrivateRoute";
import BioDatas from "../pages/BioDatas/BioDatas";
import Dashboard from "../layout/Dashboard/Dashboard";
import ViewBiodata from "../pages/Dashboard/ViewBiodata/ViewBiodata";
import FavoriteBiodata from "../pages/Dashboard/FavoriteBiodata/FavoriteBiodata";
import AdminDashboard from "../pages/Dashboard/AdminDashboard/AdminDashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/biodatas",
        element: <BioDatas />,
      },
      {
        path: "biodata/info/:id",
        element: (
          <PrivateRoute>
            <BioDataDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/biodata/${params.id}`),
      },
    ],
  },
  {
    path: "/dashboard",
    element: <PrivateRoute><Dashboard/></PrivateRoute>,
    children: [
      // {
      //   index: true,
      //   element: <PrivateRoute><ViewBiodata/></PrivateRoute>
      // },
      {
        path: "view-biodata",
        element: <PrivateRoute><ViewBiodata/></PrivateRoute>
      },
      {
        path: "favourites",
        element: <PrivateRoute><FavoriteBiodata/></PrivateRoute>
      },
      // admin dashboard
      {
        path: "",
        element: <PrivateRoute><AdminDashboard/></PrivateRoute>
      }
    ]
  }
]);

export default router;
