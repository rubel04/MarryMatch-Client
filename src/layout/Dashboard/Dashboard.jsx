import { NavLink, Outlet, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { FaHeart, FaHome } from "react-icons/fa";
import { VscEditSession } from "react-icons/vsc";
import { TfiViewListAlt } from "react-icons/tfi";
import { RiContactsBookUploadLine } from "react-icons/ri";
import { CiLogout } from "react-icons/ci";
import {
  MdDashboard,
  MdManageAccounts,
  MdWorkspacePremium,
} from "react-icons/md";
import { GrContactInfo } from "react-icons/gr";
import useAdmin from "../../hooks/useAdmin";
import { FaHandHoldingHand } from "react-icons/fa6";

const Dashboard = () => {
  const { logoutUser } = useAuth();
  const navigate = useNavigate();
  const [isAdmin] = useAdmin();

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
        <div className="col-span-1 px-4 bg-white sticky top-0 h-screen">
          <ul className="flex flex-col justify-between h-screen py-6">
            {isAdmin ? (
              // admin menubar
              <div className="space-y-4">
                <li className="font-medium rounded p-2 hover:bg-gray-50">
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
                    end
                    className={({ isActive }) =>
                      isActive
                        ? "text-[#d9383b] flex items-center gap-3"
                        : "flex items-center gap-3"
                    }
                    to="/dashboard"
                  >
                    <span className="text-white bg-[#F1494C] text-xl p-1.5 rounded">
                      <MdDashboard />
                    </span>{" "}
                    Dashboard
                  </NavLink>
                </li>
                <li className="font-medium rounded p-2 hover:bg-gray-50">
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "text-[#d9383b] flex items-center gap-3"
                        : "flex items-center gap-3"
                    }
                    to="/dashboard/manage-users"
                  >
                    <span className="text-white bg-teal-400 text-xl p-1.5 rounded">
                      <MdManageAccounts />
                    </span>{" "}
                    Manage Users
                  </NavLink>
                </li>
                <li className="font-medium rounded p-2 hover:bg-gray-50">
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "text-[#d9383b] flex items-center gap-3"
                        : "flex items-center gap-3"
                    }
                    to="/dashboard/approved-premium"
                  >
                    <span className="text-white bg-indigo-500 text-xl p-1.5 rounded">
                      <MdWorkspacePremium />
                    </span>
                    Approve Premium
                  </NavLink>
                </li>
                <li className="font-medium rounded p-2 hover:bg-gray-50">
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "text-[#d9383b] flex items-center gap-3"
                        : "flex items-center gap-3"
                    }
                    to="/dashboard/approved-contact"
                  >
                    <span className="text-white bg-lime-400 text-xl p-1.5 rounded">
                      <GrContactInfo />
                    </span>
                    Approve Contact Request
                  </NavLink>
                </li>
                <li className="font-medium rounded p-2 hover:bg-gray-50">
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "text-[#d9383b] flex items-center gap-3"
                        : "flex items-center gap-3"
                    }
                    to="/dashboard/success-story"
                  >
                    <span className="text-white bg-amber-500 text-xl p-1.5 rounded">
                      <FaHandHoldingHand />
                    </span>
                    Success Story
                  </NavLink>
                </li>
              </div>
            ) : (
              // user menubar
              <div className="space-y-4">
                <li className="font-medium rounded p-2 hover:bg-gray-50">
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
                <li className="font-medium rounded p-2 hover:bg-gray-50">
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "text-[#d9383b] flex items-center gap-3"
                        : "flex items-center gap-3"
                    }
                    to="/dashboard/got-married"
                  >
                    <span className="text-white bg-amber-500 text-xl p-1.5 rounded">
                      <FaHandHoldingHand />
                    </span>
                    Got Married
                  </NavLink>
                </li>
              </div>
            )}
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
