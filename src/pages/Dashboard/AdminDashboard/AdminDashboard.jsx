import { useQuery } from "@tanstack/react-query";
import { BiMaleFemale } from "react-icons/bi";
import { FaDollarSign, FaFemale, FaMale } from "react-icons/fa";
import { MdWorkspacePremium } from "react-icons/md";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Statistics from "../Statistics/Statistics";
import { Helmet } from "react-helmet";
import CountUp from "react-countup";

const AdminDashboard = () => {
  const axiosSecure = useAxiosSecure();
    const { data: stats = [] } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/admin-stats`);
      return res.data;
    },
  });
  return (
    <div>
      <Helmet>
        <title>Dashboard Overview | Marry Match</title>
      </Helmet>
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
        <div className=" bg-gradient-to-r from-lime-500 to-lime-600 text-white py-12 flex items-center justify-center gap-4 rounded-xl">
          <span className="text-6xl">
            <BiMaleFemale />
          </span>
          <div>
            <p className="font-medium text-gray-100">Total Biodata</p>
            <h2 className="text-5xl font-bold text-white"><CountUp end={stats?.totalBiodata} duration={3} /></h2>
          </div>
        </div>
        <div className="bg-gradient-to-r from-teal-400 to-teal-500 text-white py-12 flex items-center justify-center gap-4 rounded-xl">
          <span className="text-6xl">
            <FaMale />
          </span>
          <div>
            <p className="font-medium text-gray-100">Male</p>
            <h2 className="text-5xl font-bold text-white"><CountUp end={stats?.male} duration={3} /></h2>
          </div>
        </div>
        <div className="bg-gradient-to-r from-indigo-400 to-indigo-500 text-white py-12 flex items-center justify-center gap-4 rounded-xl">
          <span className="text-6xl">
            <FaFemale />
          </span>
          <div>
            <p className="font-medium text-gray-100">Female</p>
            <h2 className="text-5xl font-bold text-white"><CountUp end={stats?.female} duration={3} /></h2>
          </div>
        </div>

        <div className=" bg-gradient-to-r from-[#d9383b]/80 to-[#d9383b] text-white py-12 flex items-center justify-center gap-4 rounded-xl">
          <span className="text-6xl">
            <MdWorkspacePremium />
          </span>
          <div>
            <p className="font-medium text-gray-100">Premium Biodata</p>
            <h2 className="text-5xl font-bold text-white"><CountUp end={stats?.premium} duration={3} /></h2>
          </div>
        </div>
        <div className="bg-gradient-to-r from-amber-400 to-amber-500 text-white py-12 flex items-center justify-center gap-4 rounded-xl">
          <span className="text-6xl">
            <FaDollarSign />
          </span>
          <div>
            <p className="font-medium text-gray-100">Total Revenue</p>
            <h2 className="text-5xl font-bold text-white"><CountUp end={stats?.revenue} duration={3} /></h2>
          </div>
        </div>
      </div>

      <Statistics stats={stats}/>
    </div>
  );
};

export default AdminDashboard;
