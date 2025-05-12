import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";
import NoData from "../../../components/NoData/NoData";

const MyContactRequest = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { data: contactRequest = [] } = useQuery({
    queryKey: ["contactRequest"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user.email}`);
      return res.data;
    },
  });
  return (
    <div>
      <h2 className="text-3xl font-medium">My Contact Request</h2>
      <p className="text-gray-700 mt-1">
        Here you can see all the biodata contact requests you’ve made. Pending
        requests are <br /> awaiting admin approval, and approved ones show full
        contact details.
      </p>
      <div className="mt-8">
        {contactRequest.length !== 0 ? <div className="overflow-x-auto mt-4">
          <Table hoverable>
            <TableHead>
              <TableRow>
                <TableHeadCell>Biodata ID</TableHeadCell>
                <TableHeadCell>Name</TableHeadCell>
                <TableHeadCell>Email</TableHeadCell>
                <TableHeadCell>Mobile</TableHeadCell>
                <TableHeadCell>Status</TableHeadCell>
                <TableHeadCell></TableHeadCell>
              </TableRow>
            </TableHead>
            <TableBody className="">
              {contactRequest.map((user) => (
                <TableRow
                  key={user?._id}
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                >
                  <TableCell className="font-bold">#{user.biodataId}</TableCell>
                  <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {user?.name}
                  </TableCell>
                  {/* <TableCell>{user?.status === "Approved" ? user?.email : "No-access"}</TableCell>
                  <TableCell>{user?.status === "Approved" ? user?.email : "No-access"}</TableCell> */}
                  <TableCell
                    className={`${user?.status !== "Approved" && "blur-xs"}`}
                  >
                    {user?.email}
                  </TableCell>
                  <TableCell
                    className={`${user?.status !== "Approved" && "blur-xs"}`}
                  >
                    {user?.mobile}
                  </TableCell>
                  <TableCell
                    className={`${
                      user?.status === "pending"
                        ? "text-yellow-400"
                        : "text-green-400"
                    }`}
                  >
                    {user?.status}
                  </TableCell>
                  <TableCell>
                    <button className="bg-red-500 text-white py-1 px-2 cursor-pointer font-medium rounded hover:bg-red-600 transition">
                      Delete
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        :
        <NoData text="No contact request here." />
        }
      </div>
    </div>
  );
};

export default MyContactRequest;
