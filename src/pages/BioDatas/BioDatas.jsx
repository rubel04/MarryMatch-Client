import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import BioDataCard from "../../components/BioDataCard/BioDataCard";
import { useState } from "react";
import NoData from "../../components/NoData/NoData";
import { Helmet } from "react-helmet";

const BioDatas = () => {
  const axiosPublic = useAxiosPublic();
  const [filter, setFilter] = useState({});
  const { data: bioDatas = [], isPending } = useQuery({
    queryKey: ["all-bioData", filter],
    queryFn: async () => {
      const query = new URLSearchParams(filter).toString();
      const res = await axiosPublic.get(`/biodata?${query}`);
      return res.data;
    },
  });

  const handleFilter = (e) => {
    e.preventDefault();
    const form = e.target;
    const bioDataType = form.bioDataType.value;
    const division = form.division.value;
    const ageFrom = form.ageFrom.value;
    const ageTo = form.ageTo.value;
    const newFilter = { bioDataType, division, ageFrom, ageTo };
    setFilter(newFilter);
  };

  return (
    <div className="grid grid-cols-4 gap-4 md:w-7xl mx-auto mb-12 md:mt-12 p-4 md:p-0">
      <Helmet>
        <title>Browse All Matrimony Biodata | Marry Match</title>
      </Helmet>
      {/* filter option */}
      <div className="col-span-4 md:col-span-1">
        <div className="border-2 border-gray-200 rounded px-2 pt-6 pb-12">
          <h3 className="text-xl text-[#F1494C] font-medium text-center mb-1">
            Find your special someone
          </h3>
          <p className="text-sm text-center text-gray-600">
            Filter results to match your specific preferences.
          </p>
          <form onSubmit={handleFilter} className="mt-6 px-4 space-y-6">
            {/* select type option */}
            <div>
              <label
                htmlFor="type"
                className="block mb-1 font-medium text-gray-700"
              >
                Biodata Type:
              </label>
              <select
                className="border-2 border-gray-200 rounded w-full text-sm py-1.5 pr-12 pl-2"
                name="bioDataType"
                id=""
              >
                <option value="" disabled={true}>
                  Select Type
                </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            {/* select division option */}
            <div>
              <label
                htmlFor="division"
                className="block mb-1 font-medium text-gray-700"
              >
                Division:
              </label>
              <select
                //   onChange={(e) => setSortOrder(e.target.value)}
                //   value={sortOrder}
                defaultValue="type"
                className="border-2 border-gray-200 rounded w-full text-sm py-1.5 pr-12 pl-2"
                name="division"
                id=""
              >
                <option value="" disabled={true}>
                  Select Division
                </option>
                <option value="Dhaka">Dhaka</option>
                <option value="Chattagram">Chattagram</option>
                <option value="Rangpur">Rangpur</option>
                <option value="Barisal">Barisal</option>
                <option value="Khulna">Khulna</option>
                <option value="Mymensingh">Mymensingh</option>
                <option value="Sylhet">Sylhet</option>
                <option value="Rajshahi">Rajshahi</option>
              </select>
            </div>
            {/* select age range */}
            <div>
              <label
                htmlFor="type"
                className="block mb-1 font-medium text-gray-700"
              >
                Age Range:
              </label>
              <div className="flex items-center gap-4 w-full">
                <input
                  className="w-full border border-gray-200 p-1"
                  name="ageFrom"
                  placeholder="From"
                  type="number"
                />
                <input
                  className="w-full border border-gray-200 p-1"
                  name="ageTo"
                  placeholder="To"
                  type="number"
                />
              </div>
            </div>
            <button
              type="submit"
              className="text-[#F1494C] border-2 border-[#d9383b] hover:bg-gray-100/50 transition font-bold p-2 w-full rounded cursor-pointer"
            >
              Search
            </button>
          </form>
        </div>
      </div>
      {/* bio data card */}
      <div className="col-span-4 md:col-span-3">
        {isPending ? (
          <div className="animate-pulse grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="h-24 md:h-42 text-gray-800 bg-gray-200 rounded w-full flex items-center justify-center">
              Loading
            </div>
            <div className="h-24 md:h-42 text-gray-800 bg-gray-200 rounded w-full flex items-center justify-center">
              Loading
            </div>
            <div className="h-24 md:h-42 text-gray-800 bg-gray-200 rounded w-full flex items-center justify-center">
              Loading
            </div>
          </div>
        ) : (
          <div>
            {bioDatas.length !== 0 ? <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bioDatas.map((bioData) => (
              <BioDataCard bioData={bioData} key={bioData._id} />
            ))}
          </div>
          :
          <NoData text="No biodata found!"/>
          }
          </div>
        )}
      </div>
    </div>
  );
};

export default BioDatas;
