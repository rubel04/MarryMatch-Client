import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import useAdmin from "../../hooks/useAdmin";
const NavBar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { user, logoutUser } = useAuth();
  const [isAdmin] = useAdmin();
  const handleLogout = () => {
    logoutUser()
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "You logout successfully.",
          timer: 1500,
        });
        navigate("/");
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Something went wrong!",
          timer: 1500,
        });
      });
  };

  return (
    <div className="md:w-7xl mx-auto">
      <Navbar
      // TODO: set navbar background color when user not have home page bg-[#F1494C]
        className={`${pathname !== "/" ? " mt-4" : "bg-none"}`}
        fluid
        rounded
      >
        <NavbarBrand>
          <span className="flex items-center gap-1 self-center whitespace-nowrap text-xl font-semibold dark:text-white">
           <img className="w-10" src="https://i.ibb.co.com/VYBdzYWM/images.jpg" alt="logo" />
            Marry Match
          </span>
        </NavbarBrand>
        <NavbarToggle />
        <NavbarCollapse>
          <NavbarLink href="/" active>
            Home
          </NavbarLink>
          {user && isAdmin && <NavbarLink href="/dashboard">Dashboard</NavbarLink>}
          {user && !isAdmin && <NavbarLink href="/dashboard/view-biodata">Dashboard</NavbarLink>}
          <NavbarLink href="/biodatas">Biodatas</NavbarLink>
          <NavbarLink href="/about">About Us</NavbarLink>
          <NavbarLink href="/contact">Contact Us</NavbarLink>
          {user ? (
            <NavbarLink className="cursor-pointer" onClick={handleLogout}>Log Out</NavbarLink>
          ) : (
            <NavbarLink href="/login">Login</NavbarLink>
          )}
        </NavbarCollapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
