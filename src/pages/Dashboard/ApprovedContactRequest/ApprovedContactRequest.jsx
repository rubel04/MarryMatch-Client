import { useQuery } from "@tanstack/react-query";
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

const ApprovedContactRequest = () => {
  const axiosSecure = useAxiosSecure();
  //   const [premiumRequest, refetch] = usePremiumRequest();
  const { data: requests = [], refetch } = useQuery({
    queryKey: ["approved-requests"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/contact-request`);
      return res.data;
    },
  });
  const handleRequestApproved = ( email) => {
      axiosSecure
        .patch(`/approved-contact-request?email=${email}`)
        .then((res) => {
        //   console.log(res.data);
          if (res.data?.modifiedCount > 0) {
            Swal.fire({
              title: "Approved",
              text: "Contact request approved.",
              icon: "success",
              timer: 3000,
            });
            refetch();
          }
        })
        .catch(() => {
          Swal.fire({
            title: "Something went wrong",
            icon: "error",
            timer: 3000,
          });
        });
    };
  return (
    <div>
      <h2 className="text-3xl font-medium">All Contact Request</h2>
      <p className="text-gray-700 mt-1">
        View all user contact requests here. Review each request and approve <br /> to grant access to contact information.
      </p>
      <div className="mt-8">
        {requests.length !== 0 ? (
          <div className="overflow-x-auto mt-4">
            <Table hoverable>
              <TableHead>
                <TableRow>
                  <TableHeadCell>Biodata ID</TableHeadCell>
                  <TableHeadCell>Name</TableHeadCell>
                  <TableHeadCell>Email</TableHeadCell>{" "}
                  <TableHeadCell></TableHeadCell>
                </TableRow>
              </TableHead>
              <TableBody className="">
                {requests.map((req) => (
                  <TableRow
                    key={req?._id}
                    className="bg-white dark:border-gray-700 dark:bg-gray-800"
                  >
                    <TableCell className="font-bold">
                      #{req.biodataId}
                    </TableCell>
                    <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      {req?.name}
                    </TableCell>
                    <TableCell>{req?.email}</TableCell>

                    <TableCell>
                      <button
                        onClick={() =>
                          handleRequestApproved(req?.email)
                        }
                        className="bg-blue-600 text-white py-1 px-2 cursor-pointer font-medium rounded hover:bg-blue-700 transition"
                      >
                        Approve
                      </button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        ) : (
          <NoData text="No contact request here." />
        )}
      </div>
    </div>
  );
};

export default ApprovedContactRequest;
