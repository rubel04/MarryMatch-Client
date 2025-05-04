import { BiMaleFemale } from "react-icons/bi";
import { FaDollarSign, FaFemale, FaMale } from "react-icons/fa";
import { MdWorkspacePremium } from "react-icons/md";

const AdminDashboard = () => {
  return (
    <div>
      <div>
        <h2 className="text-3xl font-medium text-gray-800">
          Biodata & Revenue Overview
        </h2>
        <p className="text-gray-600 mt-1">
          Here's a quick summary of all biodata statistics and revenue generated{" "}
          <br /> from contact requests.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        <div className="bg-lime-500 text-white py-12 flex items-center justify-center gap-4 rounded-xl">
          <span className="text-6xl">
            <BiMaleFemale />
          </span>
          <div>
            <p className="font-medium text-gray-100">Total Biodata</p>
            <h2 className="text-5xl font-bold text-white">1500</h2>
          </div>
        </div>
        <div className="bg-teal-400 text-white py-12 flex items-center justify-center gap-4 rounded-xl">
          <span className="text-6xl">
            <FaMale />
          </span>
          <div>
            <p className="font-medium text-gray-100">Male</p>
            <h2 className="text-5xl font-bold text-white">1000</h2>
          </div>
        </div>
        <div className="bg-indigo-500 text-white py-12 flex items-center justify-center gap-4 rounded-xl">
          <span className="text-6xl">
            <FaFemale />
          </span>
          <div>
            <p className="font-medium text-gray-100">Female</p>
            <h2 className="text-5xl font-bold text-white">500</h2>
          </div>
        </div>

        <div className="bg-[#d9383b]/90 text-white py-12 flex items-center justify-center gap-4 rounded-xl">
          <span className="text-6xl">
            <MdWorkspacePremium />
          </span>
          <div>
            <p className="font-medium text-gray-100">Premium Biodata</p>
            <h2 className="text-5xl font-bold text-white">56</h2>
          </div>
        </div>
        <div className="bg-amber-400 text-white py-12 flex items-center justify-center gap-4 rounded-xl">
          <span className="text-6xl">
            <FaDollarSign />
          </span>
          <div>
            <p className="font-medium text-gray-100">Total Revenue</p>
            <h2 className="text-5xl font-bold text-white">545</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
