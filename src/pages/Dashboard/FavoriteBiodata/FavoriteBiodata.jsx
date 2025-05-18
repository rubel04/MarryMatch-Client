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
import NoData from "../../../components/NoData/NoData";
import { Helmet } from "react-helmet";

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

  const handleDeleteFavouriteBiodata = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this favourite biodata.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/favoriteBiodata/${id}`)
          .then((res) => {
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
      }
    });
  };
  return (
    <div>
      <Helmet>
        <title>Explore Your Favourites Biodata | Dashboard | Marry Match</title>
      </Helmet>
      {favoriteBiodata.length !== 0 ? (
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
                        handleDeleteFavouriteBiodata(biodata?._id)
                      }
                      className="bg-red-500 text-white py-1 px-2 cursor-pointer font-medium rounded hover:bg-red-600 transition"
                    >
                      Delete
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      ) : (
        <NoData
          text="Your favorites list is empty! Add biodatas you like to see them here."
          button="Add Biodata to Favorite List"
          to="/biodatas"
          icon="empty"
        />
      )}
    </div>
  );
};

export default FavoriteBiodata;
