import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useViewBiodata = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    // TODO: get original premium user
    // const isPremiumUser = false;
    const { data: bioData = [], isPending } = useQuery({
      queryKey: ["user-bioData"],
      queryFn: async () => {
        const res = await axiosSecure.get(`/viewBiodata?email=${user?.email}`);
        return res.data;
      },
    });
    return [bioData, isPending]
};

export default useViewBiodata;