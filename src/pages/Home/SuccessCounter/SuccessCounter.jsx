import { FaHeart, FaMale, FaFemale } from "react-icons/fa";
import SectionHeading from "../../../components/SectionHeading/SectionHeading";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import CountUp from 'react-countup';
const SuccessCounter = () => {
  const axiosPublic = useAxiosPublic();
  const { data: count = [] } = useQuery({
    queryKey: ["successCount"],
    queryFn: async () => {
      const res = await axiosPublic.get("/successCount");
      return res.data;
    },
  });

  return (
    <section className="md:w-6xl mx-auto my-16 p-4 md:p-0">
      <SectionHeading
        heading1="Our Journey"
        heading2="So Far"
        desc="Our journey with MarryMatch has been about connecting hearts"
        highlight="first"
      />
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-12 gap-6">
        <div className="bg-teal-400 text-white py-12 flex items-center justify-center gap-4 rounded-xl">
          <span className="text-6xl">
            <FaMale />
          </span>
          <div>
            <h2 className="text-5xl font-bold text-white"><CountUp end={count.male} duration={3} />+</h2>
            <p>Male</p>
          </div>
        </div>
        <div className="bg-[#F1494C]/80 text-white py-12 flex items-center justify-center gap-4 rounded-xl">
          <span className="text-6xl">
            <FaFemale />
          </span>
          <div>
            
            <h2 className="text-5xl font-bold text-white"><CountUp end={count.female} duration={3} />+</h2>
            <p>Female</p>
          </div>
        </div>
        <div className="bg-indigo-500 text-white py-12 flex items-center justify-center gap-4 rounded-xl">
          <span className="text-6xl">
            <FaHeart className="text-red-600" />
          </span>
          <div>
            <h2 className="text-5xl font-bold text-white"><CountUp end={count.marriage} duration={3} /></h2>
            <p>Successful Marriages </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessCounter;
