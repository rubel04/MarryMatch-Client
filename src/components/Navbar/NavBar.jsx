import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { useLocation } from "react-router-dom";
const NavBar = () => {
  const {pathname} = useLocation();
  return (
    <div className="w-7xl mx-auto ">
      <Navbar className={pathname !== '/' ? "bg-[#F1494C] mt-4":  'bg-none'} fluid rounded>
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
        <NavbarLink href="#">About</NavbarLink>
        <NavbarLink href="#">Services</NavbarLink>
        <NavbarLink href="#">Contact</NavbarLink>
        <NavbarLink href="/login">Login</NavbarLink>
      </NavbarCollapse>
    </Navbar>
    </div>
  );
};

export default NavBar;
