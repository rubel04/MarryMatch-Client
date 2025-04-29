import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const MainLayout = () => {
  const {pathname} = useLocation();

  return (
    <div className="h-screen flex flex-col">
        {pathname !== "/" &&  <NavBar />}
      <main className="flex-grow">
      <Outlet />
      </main>
      <Footer/>
    </div>
  );
};

export default MainLayout;
