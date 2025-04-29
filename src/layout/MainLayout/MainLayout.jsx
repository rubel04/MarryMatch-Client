import { Outlet } from "react-router-dom";
import NavBar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const MainLayout = () => {
  return (
    <div className="h-screen flex flex-col">
        <NavBar />
      <main className="flex-grow">
      <Outlet />
      </main>
      <Footer/>
    </div>
  );
};

export default MainLayout;
