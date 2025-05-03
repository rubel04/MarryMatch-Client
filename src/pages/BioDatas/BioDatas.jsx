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
        <div>

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
