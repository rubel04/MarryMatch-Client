import { useQuery } from "@tanstack/react-query";
import SectionHeading from "../../../components/SectionHeading/SectionHeading";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import BioDataCard from "../../../components/BioDataCard/BioDataCard";
import { useState } from "react";

const PremiumMembers = () => {
  const axiosPublic = useAxiosPublic();
  const [sortOrder, setSortOrder] = useState("asc");
  const { data: members = [], isPending } = useQuery({
    queryKey: ["bioData", sortOrder],
    queryFn: async () => {
      const res = await axiosPublic.get(`/premium-member?sort=${sortOrder}`);
      return res.data;
    },
  });

  return (
    <div className="w-7xl mx-auto mb-12">
      <SectionHeading headings="Premium Members" desc="Meet verified premium members, find your match." highlight="second" />
      <div className="mb-8">
        <label htmlFor="sort" className="block mb-2 font-medium text-gray-800">
          Sort by Age:
        </label>
        <select
          onChange={(e) => setSortOrder(e.target.value)}
          value={sortOrder}
          className="border-2 rounded text-sm py-1.5 pr-12 pl-2 border-[#4169E1]/50"
          name=""
          id=""
        >
          <option value="asc">Low to High</option>
          <option value="dsc">High to Low</option>
        </select>
      </div>
      {isPending ? (
        <div className="animate-pulse grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="h-24 md:h-42 text-gray-800 bg-gray-200 rounded w-full flex items-center justify-center">Loading</div>
          <div className="h-24 md:h-42 text-gray-800 bg-gray-200 rounded w-full flex items-center justify-center">Loading</div>
          <div className="h-24 md:h-42 text-gray-800 bg-gray-200 rounded w-full flex items-center justify-center">Loading</div>
          <div className="h-24 md:h-42 text-gray-800 bg-gray-200 rounded w-full flex items-center justify-center">Loading</div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {members.map((bioData) => (
            <BioDataCard bioData={bioData} key={bioData._id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default PremiumMembers;
