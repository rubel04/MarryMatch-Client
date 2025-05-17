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
import ManageUsers from "../pages/Dashboard/ManageUsers/ManageUsers";
import CreateBiodata from "../pages/Dashboard/CreateBiodata/CreateBiodata";
import EditBiodata from "../pages/Dashboard/EditBiodata/EditBiodata";
import AdminRoute from "./AdminRoute";
import ApprovedPremium from "../pages/Dashboard/ApprovedPremium/ApprovedPremium";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Payments from "../pages/Payments/Payments";
import MyContactRequest from "../pages/Dashboard/MyContactRequest/MyContactRequest";
import ApprovedContactRequest from "../pages/Dashboard/ApprovedContactRequest/ApprovedContactRequest";
import GotMarried from "../pages/GotMarried/GotMarried";
import SuccessStory from "../pages/Dashboard/SuccessStory/SuccessStory";
import AboutUs from "../pages/AboutUs/AboutUs";

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
      },
      {
        path: "/about",
        element: <AboutUs/>
      }
    ],
    errorElement: <ErrorPage />,
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      // user route
      {
        path: "view-biodata",
        element: (
          <PrivateRoute>
            <ViewBiodata />
          </PrivateRoute>
        ),
      },
      {
        path: "favourites",
        element: (
          <PrivateRoute>
            <FavoriteBiodata />
          </PrivateRoute>
        ),
      },
      {
        path: "create-biodata",
        element: (
          <PrivateRoute>
            <CreateBiodata />
          </PrivateRoute>
        ),
      },
      {
        path: "edit-biodata",
        element: (
          <PrivateRoute>
            <EditBiodata />
          </PrivateRoute>
        ),
      },
      {
        path: "checkout/:id",
        element: (
          <PrivateRoute>
            <Payments />
          </PrivateRoute>
        ),
      },
      {
        path: "contact-requests",
        element: (
          <PrivateRoute>
            <MyContactRequest />
          </PrivateRoute>
        ),
      },{
        path: "got-married",
        element: <PrivateRoute><GotMarried/></PrivateRoute>
      },
      // admin dashboard
      {
        path: "",
        element: (
          <AdminRoute>
            <AdminDashboard />
          </AdminRoute>
        ),
      },
      {
        path: "manage-users",
        element: (
          <AdminRoute>
            <ManageUsers />
          </AdminRoute>
        ),
      },
      {
        path: "approved-premium",
        element: (
          <AdminRoute>
            <ApprovedPremium />
          </AdminRoute>
        ),
      },
      {
        path: "approved-contact",
        element: (
          <AdminRoute>
            <ApprovedContactRequest />
          </AdminRoute>
        ),
      },
      {
        path:"success-story",
        element: <AdminRoute><SuccessStory/></AdminRoute>
      }
    ],
  },
]);

export default router;
