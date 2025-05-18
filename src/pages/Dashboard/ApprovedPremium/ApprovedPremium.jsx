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
import usePremiumRequest from "../../../hooks/usePremiumRequest";
import { Helmet } from "react-helmet";

const ApprovedPremium = () => {
  const axiosSecure = useAxiosSecure();
  const [premiumRequest,refetch] = usePremiumRequest();
  const handleRequestApproved = (status, email) => {
    axiosSecure
      .patch(`/users/premium-request?email=${email}`, { status })
      .then((res) => {
        if (res.data?.modifiedCount > 0) {
          Swal.fire({
            title: "Approved",
            text: "Premium request accepted",
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
  const handleRequestReject = (status, email) => {
    axiosSecure
      .patch(`/users/premium-request?email=${email}`, { status })
      .then((res) => {
        if (res.data?.modifiedCount > 0) {
          Swal.fire({
            title: "Rejected",
            text: "Premium request rejected",
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
      <Helmet>
        <title>Approve Premium Request | Dashboard | Marry Match</title>
      </Helmet>
      <h2 className="text-3xl font-medium">All Premium Member Request</h2>
      <p className="text-gray-8700 mt-1">
        Review all user requests for premium membership. You can approve or{" "}
        <br /> reject requests based on eligibility.
      </p>
      <div className="mt-8">
        {premiumRequest.length !== 0 ? (
          <div className="overflow-x-auto mt-4">
            <Table>
              <TableHead>
                <TableRow>
                  <TableHeadCell>User Name</TableHeadCell>
                  <TableHeadCell>User Email</TableHeadCell>
                  <TableHeadCell></TableHeadCell>
                </TableRow>
              </TableHead>
              <TableBody className="">
                {premiumRequest.map((request) => (
                  <TableRow
                    key={request?._id}
                    className="bg-white dark:border-gray-700 dark:bg-gray-800"
                  >
                    <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      {request?.name}
                    </TableCell>
                    <TableCell>{request?.email}</TableCell>

                    <TableCell className="flex gap-2">
                      <button
                        onClick={() =>
                          handleRequestApproved("Approved", request?.email)
                        }
                        className="bg-blue-600 text-white py-1 px-2 cursor-pointer font-medium rounded hover:bg-blue-700 transition"
                      >
                        Approved
                      </button>
                      <button
                        onClick={() =>
                          handleRequestReject("Reject", request?.email)
                        }
                        className="bg-red-500 text-white py-1 px-2 cursor-pointer font-medium rounded hover:bg-red-600 transition"
                      >
                        Reject
                      </button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        ) : (
          <NoData text="No Request Here" />
        )}
      </div>
    </div>
  );
};

export default ApprovedPremium;
