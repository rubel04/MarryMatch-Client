import { NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";

const Dashboard = () => {
    const {logoutUser} = useAuth();
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
        <div className="col-span-1 py-6 px-4 bg-white">
          <ul className="flex flex-col justify-between h-full">
            <div className="space-y-4">
              <li className="font-medium rounded p-2 hover:bg-gray-50">
                <NavLink className={({isActive}) => isActive && 'text-[#d9383b]'} to="/">Home</NavLink>
              </li>
              <li className="font-medium rounded p-2 hover:bg-gray-50">
                <NavLink className={({isActive}) => isActive && 'text-[#d9383b]'} to="/dashboard/edit-biodata">Edit Biodata</NavLink>
              </li>
              <li className="font-medium rounded p-2 hover:bg-gray-50">
                <NavLink className={({isActive}) => isActive && 'text-[#d9383b]'} to="/dashboard/view-biodata">View Biodata</NavLink>
              </li>
              <li className="font-medium rounded p-2 hover:bg-gray-50">
                <NavLink className={({isActive}) => isActive && 'text-[#d9383b]'} to="/dashboard/contact-requests">
                  My Contact Request
                </NavLink>
              </li>
              <li className="font-medium rounded p-2 hover:bg-gray-50">
                <NavLink className={({isActive}) => isActive && 'text-[#d9383b]'} to="/dashboard/favourites">Favourites Biodata</NavLink>
              </li>
            </div>
            <li className=" hover:bg-gray-50 rounded p-2 ">
              <button onClick={handleLogout} className="font-semibold text-xl cursor-pointer">
                Logout
              </button>
            </li>
          </ul>
        </div>
        <div className="col-span-3 py-6 bg-white"></div>
      </div>
    </div>
  );
};

export default Dashboard;
