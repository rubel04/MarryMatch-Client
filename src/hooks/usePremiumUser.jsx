import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const usePremiumUser = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: isPremiumUser } = useQuery({
    queryKey: [user?.email, "isPremiumUser"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/premium?email=${user?.email}`);
      return res.data?.premium;
    },
  });
  return [isPremiumUser];
};

export default usePremiumUser;
