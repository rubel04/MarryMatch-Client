import { useLocation } from "react-router-dom";
import NavBar from "../Navbar/NavBar";

const Banner = () => {
  const { pathname } = useLocation();
  return (
    <div
      style={{
        backgroundImage: `url(https://i.ibb.co.com/NnC5jfcz/full-shot-romantic-couple-seaside-23-2150439188.jpg)`,
      }}
      className="h-[600px] w-full mx-auto bg-no-repeat bg-cover bg-center"
    >
      <div className="pt-4 sticky top-0">{pathname === "/" && <NavBar />}</div>
    </div>
  );
};

export default Banner;
