import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const usePremiumRequest = () => {
  const axiosSecure = useAxiosSecure();
  const { data: premiumRequest = [], refetch } = useQuery({
    queryKey: ["premiumRequest"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/premium-request`);
      return res.data;
    },
  });
  return [premiumRequest, refetch];
};

export default usePremiumRequest;
