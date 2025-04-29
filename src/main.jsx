import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import MainLayout from "./layout/MainLayout/MainLayout";
import router from "./router/Routes";
import AuthProvider from "./context/AuthProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}>
        <MainLayout />
      </RouterProvider>
    </AuthProvider>
  </StrictMode>
);
