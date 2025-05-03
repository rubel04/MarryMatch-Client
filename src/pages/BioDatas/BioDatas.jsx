import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import BioDataCard from "../../components/BioDataCard/BioDataCard";

const BioDatas = () => {
  const axiosPublic = useAxiosPublic();
  //   const [sortOrder, setSortOrder] = useState("asc");
  const { data: bioDatas = [], isPending } = useQuery({
    queryKey: ["all-bioData"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/all-biodata`);
      return res.data;
    },
  });
  return (
    <div className="grid grid-cols-4 gap-4 w-7xl mx-auto my-12">
      {/* filter option */}
      <div className="col-span-1">
        <div className="border-2 border-gray-200 rounded px-2 pt-6 pb-12">
          <h3 className="text-2xl text-[#F1494C] font-medium text-center mb-1">
            Filter Option
          </h3>
          <p className="text-sm text-center text-gray-600">
            Filter results to match your specific preferences.
          </p>
          <div className="mt-6 px-4 space-y-6">
            {/* select type option */}
            <div>
              <label
                htmlFor="type"
                className="block mb-1 font-medium text-gray-700"
              >
                Biodata Type:
              </label>
              <select
                //   onChange={(e) => setSortOrder(e.target.value)}
                //   value={sortOrder}
                defaultValue="type"
                className="border-2 border-gray-200 rounded w-full text-sm py-1.5 pr-12 pl-2"
                name=""
                id=""
              >
                <option value="type" disabled={true}>
                  Select Type
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
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
                name=""
                id=""
              >
                <option value="type" disabled={true}>
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
                <input className="w-full border border-gray-200 p-1" name="from" placeholder="From" type="number" />
                <input className="w-full border border-gray-200 p-1" name="to" placeholder="To" type="number" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* bio data card */}
      <div className="col-span-3">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bioDatas.map((bioData) => (
              <BioDataCard bioData={bioData} key={bioData._id} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BioDatas;
