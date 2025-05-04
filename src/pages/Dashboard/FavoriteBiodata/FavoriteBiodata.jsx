import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";


const FavoriteBiodata = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    // TODO: get original premium user
    // const isPremiumUser = false;
    const { data: favoriteBiodata = [] } = useQuery({
      queryKey: ["favorite-bioData"],
      queryFn: async () => {
        const res = await axiosSecure.get(`/favoriteBiodata?email=${user?.email}`);
        return res.data;
      },
    });
    return (
        <div className="overflow-x-auto">
      <Table hoverable>
        <TableHead>
          <TableRow>
            
            <TableHeadCell>Name</TableHeadCell>
            <TableHeadCell>Biodata ID</TableHeadCell>
            <TableHeadCell>Occupation</TableHeadCell>
            <TableHeadCell>Permanent Address</TableHeadCell>
            <TableHeadCell>
            </TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody className="">
          {favoriteBiodata.map(biodata => <TableRow key={biodata._id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            {biodata.name}
            </TableCell>
            <TableCell>#{biodata.biodataId}</TableCell>
            <TableCell>{biodata.occupation}</TableCell>
            <TableCell>{biodata.permanentDivision}</TableCell>
            <TableCell>
              <button className="font-medium text-red-500 hover:underline cursor-pointer">
                Delete
              </button>
            </TableCell>
          </TableRow>)}
        </TableBody>
      </Table>
    </div>
    );
};

export default FavoriteBiodata;