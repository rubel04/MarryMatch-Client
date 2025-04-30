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
const NavBar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { user, logoutUser } = useAuth();
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
    <div className="w-7xl mx-auto ">
      <Navbar
        className={pathname !== "/" ? "bg-[#F1494C] mt-4" : "bg-none"}
        fluid
        rounded
      >
        <NavbarBrand>
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            MarryMatch
          </span>
        </NavbarBrand>
        <NavbarToggle />
        <NavbarCollapse>
          <NavbarLink href="/" active>
            Home
          </NavbarLink>
          {user && <NavbarLink href="/dashboard">Dashboard</NavbarLink>}
          <NavbarLink href="/biodatas">Biodatas</NavbarLink>
          <NavbarLink href="/about">About Us</NavbarLink>
          <NavbarLink href="/contact">Contact Us</NavbarLink>
          {user ? (
            <button onClick={handleLogout}>Log Out</button>
          ) : (
            <NavbarLink href="/login">Login</NavbarLink>
          )}
        </NavbarCollapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
