import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout/MainLayout";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Home from "../pages/Home/Home/Home";
import BioDataDetails from "../pages/BioDataDetails/BioDataDetails";
import PrivateRoute from "./PrivateRoute";
import BioDatas from "../pages/BioDatas/BioDatas";

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
]);

export default router;
