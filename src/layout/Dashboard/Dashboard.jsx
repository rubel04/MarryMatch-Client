import { NavLink, Outlet, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { FaHeart, FaHome } from "react-icons/fa";
import { VscEditSession } from "react-icons/vsc";
import { TfiViewListAlt } from "react-icons/tfi";
import { RiContactsBookUploadLine } from "react-icons/ri";
import { CiLogout } from "react-icons/ci";

const Dashboard = () => {
  const { logoutUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser()
      .then(() => {
        Swal.fire({
          title: "You logout successfully!",
          icon: "success",
        });
        navigate("/");
      })
      .catch((err) => {
        Swal.fire({
          title: err?.message,
          icon: "error",
        });
      });
  };
  return (
    <div className="bg-gray-50">
      <div className="w-7xl min-h-screen mx-auto grid grid-cols-4 gap-6">
        {/* side menubar */}
        <div className="col-span-1 py-6 px-4 bg-white">
          <ul className="flex flex-col justify-between h-full">
            <div className="space-y-4">
              <li className="font-medium rounded p-2 hover:bg-gray-50">
                {/* <NavLink className={`${({isActive}) => isActive && 'text-[#d9383b]'} flex items-center gap-3`} to="/"><FaHome/> Home</NavLink> */}
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#d9383b] flex items-center gap-3"
                      : "flex items-center gap-3"
                  }
                  to="/"
                >
                  <span className="text-white bg-black text-xl p-1.5 rounded">
                    <FaHome />
                  </span>{" "}
                  Home
                </NavLink>
              </li>
              <li className="font-medium rounded p-2 hover:bg-gray-50">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#d9383b] flex items-center gap-3"
                      : "flex items-center gap-3"
                  }
                  to="/dashboard/edit-biodata"
                >
                  <span className="text-white bg-teal-400 text-xl p-1.5 rounded">
                    <VscEditSession />
                  </span>{" "}
                  Edit Biodata
                </NavLink>
              </li>
              <li className="font-medium rounded p-2 hover:bg-gray-50">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#d9383b] flex items-center gap-3"
                      : "flex items-center gap-3"
                  }
                  to="/dashboard/view-biodata"
                >
                  <span className="text-white bg-indigo-500 text-xl p-1.5 rounded">
                    <TfiViewListAlt />
                  </span>
                  View Biodata
                </NavLink>
              </li>
              <li className="font-medium rounded p-2 hover:bg-gray-50">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#d9383b] flex items-center gap-3"
                      : "flex items-center gap-3"
                  }
                  to="/dashboard/contact-requests"
                >
                  <span className="text-white bg-lime-400 text-xl p-1.5 rounded">
                    <RiContactsBookUploadLine />
                  </span>
                  My Contact Request
                </NavLink>
              </li>
              <li className="font-medium rounded p-2 hover:bg-gray-50">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#d9383b] flex items-center gap-3"
                      : "flex items-center gap-3"
                  }
                  to="/dashboard/favourites"
                >
                  <span className="text-white bg-[#F1494C] text-xl p-1.5 rounded">
                    <FaHeart />
                  </span>
                  Favourites Biodata
                </NavLink>
              </li>
            </div>
            <li className=" hover:bg-gray-50 rounded p-2 ">
              <button
                onClick={handleLogout}
                className="font-semibold text-xl cursor-pointer flex items-center gap-3"
              >
                <CiLogout />
                Logout
              </button>
            </li>
          </ul>
        </div>
        {/* main content */}
        <div className="col-span-3 py-6 px-4 bg-white">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
