import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { FaHeart, FaHome, FaTimes } from "react-icons/fa";
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
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Dashboard = () => {
  const { logoutUser } = useAuth();
  const navigate = useNavigate();
  const [isAdmin] = useAdmin();
  const [openDrawer, setOpenDrawer] = useState(false);

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

  const menuItems = () => (
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

      {isAdmin ? (
        <>
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
        </>
      ) : (
        <>
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
        </>
      )}
    </div>
  );

  return (
    <div className="bg-gray-50">
      <div className="md:w-7xl min-h-screen mx-auto md:grid md:grid-cols-4 gap-6">
        {/* menubar */}
        <div
          className={`fixed top-0 left-0 w-64 bg-white h-full p-4 z-50 shadow transform transition-transform duration-300 ease-in-out ${
            openDrawer ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0 md:relative md:col-span-1`}
        >
          <div className="flex justify-end md:hidden mb-2">
            <button
              onClick={() => setOpenDrawer(false)}
              className="text-xl p-1 text-red-500 hover:text-black"
            >
              <FaTimes />
            </button>
          </div>
          <div className="flex flex-col justify-between h-screen sticky top-0">
            <ul className="flex flex-col justify-between h-full">
              {menuItems()}
              <li className=" hover:bg-gray-50 rounded p-2">
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
        </div>

        {openDrawer && (
          <div
            onClick={() => setOpenDrawer(false)}
            className="fixed inset-0 bg-black/60 bg-opacity-30 z-40 md:hidden"
          />
        )}

        {/* Main Content */}
        <div className="col-span-3 p-4">
          <div className="md:hidden mb-6 flex justify-between items-center">
            <button
              onClick={() => setOpenDrawer(true)}
              className=" px-4 py-2 rounded shadow"
            >
              <GiHamburgerMenu />
            </button>
            <Link
              to="/"
              className="flex items-center gap-1 self-center whitespace-nowrap text-xl font-semibold dark:text-white"
            >
              <img
                className="w-10"
                src="https://i.ibb.co.com/VYBdzYWM/images.jpg"
                alt="logo"
              />
              MarryMatch
            </Link>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
