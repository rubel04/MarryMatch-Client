import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";
import Swal from "sweetalert2";

const FavoriteBiodata = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { data: favoriteBiodata = [], refetch } = useQuery({
    queryKey: ["favorite-bioData"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/favoriteBiodata?email=${user?.email}`
      );
      return res.data;
    },
  });
  //   TODO: make confirm modal delete button
  //   TODO: when fovurite biodata is empty, show relevant message
  const handleDeleteFavouriteBiodata = (id) => {
    axiosSecure
      .delete(`/favoriteBiodata/${id}`)
      .then((res) => {
        console.log(res.data);
        if (res.data.deletedCount > 0) {
          Swal.fire({
            title: "Biodata deleted to the favorite list",
            icon: "success",
            timer: 2000,
          });
          refetch();
        }
      })
      .catch(() => {
        Swal.fire({
          title: "Something went wrong",
          icon: "error",
          timer: 2000,
        });
      });
  };
  return (
    <div className="overflow-x-auto">
      <Table hoverable>
        <TableHead>
          <TableRow>
            <TableHeadCell>Name</TableHeadCell>
            <TableHeadCell>Biodata ID</TableHeadCell>
            <TableHeadCell>Occupation</TableHeadCell>
            <TableHeadCell>Permanent Address</TableHeadCell>
            <TableHeadCell></TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody className="">
          {favoriteBiodata.map((biodata) => (
            <TableRow
              key={biodata?._id}
              className="bg-white dark:border-gray-700 dark:bg-gray-800"
            >
              <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {biodata?.name}
              </TableCell>
              <TableCell>#{biodata?.biodataId}</TableCell>
              <TableCell>{biodata?.occupation}</TableCell>
              <TableCell>{biodata?.permanentDivision}</TableCell>
              <TableCell>
                <button
                  onClick={() =>
                    handleDeleteFavouriteBiodata(biodata?.biodataId)
                  }
                  className="font-medium text-red-500 hover:underline cursor-pointer"
                >
                  Delete
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default FavoriteBiodata;
