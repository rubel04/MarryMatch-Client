import axios from "axios";

const useAxiosPublic = () => {
  const axiosPublic = axios.create({
    baseURL: "https://marry-match-server.vercel.app",
  });
  return axiosPublic;
};

export default useAxiosPublic;
