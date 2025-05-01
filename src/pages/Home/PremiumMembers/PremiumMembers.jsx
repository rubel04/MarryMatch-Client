import { useQuery } from "@tanstack/react-query";
import SectionHeading from "../../../components/SectionHeading/SectionHeading";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import BioDataCard from "../../../components/BioDataCard/BioDataCard";

const PremiumMembers = () => {
const axiosPublic = useAxiosPublic();
    const {data:members=[]} = useQuery({
        queryKey: ['bioData'],
        queryFn: async () =>{
            const res = await axiosPublic.get("/premium-member");
            return res.data
        }
    })
    console.log(members);
    
    return (
        <div className="w-7xl mx-auto mb-12">
            <SectionHeading headings="Premium Members" highlight="second" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {members.map(bioData => <BioDataCard bioData={bioData} key={bioData._id}/>)}
            </div>
        </div>
    );
};

export default PremiumMembers;