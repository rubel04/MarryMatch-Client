import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";
import { useState } from "react";
import Swal from "sweetalert2";

const ManageUsers = () => {
  const axiosSecure = useAxiosSecure();
  const [search,setSearch] = useState('')
  const { data: users = [] } = useQuery({
    queryKey: ["users",search],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users?search=${search}`);
      return res.data;
    },
  });
  const handleMakeAdmin = (email) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to make admin this user.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .patch(`/users/admin?email=${email}`)
          .then((res) => {
            if (res.data.modifiedCount > 0) {
              Swal.fire({
                text: "Make admin successfully",
                icon: "success",
              });
            }
          })
          .catch((err) => {
            Swal.fire({
              text: err.message,
              icon: "success",
            });
          });
      }
    });
  };
  const handleMakePremium = (email) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to make premium this user.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .patch(`/users/premium?email=${email}`)
          .then((res) => {
            if (res.data.modifiedCount > 0) {
              Swal.fire({
                text: "Make premium successfully",
                icon: "success",
              });
            }
          })
          .catch((err) => {
            Swal.fire({
              text: err.message,
              icon: "success",
            });
          });
      }
    });
  };
  return (
    <div>
      <h2 className="text-3xl font-medium">All registered users</h2>
      <p className="text-gray-8700 mt-1">
        Admin overview of all registered users. You can manage user roles and{" "}
        <br /> upgrade users to premium or admin status.
      </p>
      <div className="mt-8">
        <label className="block font-medium text-gray-600 mb-1">
          Search user by username
        </label>
        <input
        onChange={e => setSearch(e.target.value)}
          className="border border-gray-300 rounded p-1.5 pl-2 md:w-3/11 w-full"
          name="search"
          placeholder="Type username"
          type="text"
        />
        <div className="overflow-x-auto mt-4">
          <Table hoverable>
            <TableHead>
              <TableRow>
                <TableHeadCell>User Name</TableHeadCell>
                <TableHeadCell>User Email</TableHeadCell>
                <TableHeadCell></TableHeadCell>
                <TableHeadCell></TableHeadCell>
              </TableRow>
            </TableHead>
            <TableBody className="">
              {users.map((user) => (
                <TableRow
                  key={user?._id}
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                >
                  <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {user?.userName}
                  </TableCell>
                  <TableCell>{user?.userEmail}</TableCell>
                  <TableCell>
                    {/* TODO: get original make premium request */}
                    <button
                      onClick={() =>
                        handleMakePremium(user?.userEmail)
                      }
                      className="font-medium text-blue-500 underline cursor-pointer"
                    >
                      Make Premium
                    </button>
                  </TableCell>
                  <TableCell>
                    <button
                      onClick={() => handleMakeAdmin(user?.userEmail)}
                      className="font-medium text-green-500 underline cursor-pointer"
                    >
                      Make Admin
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default ManageUsers;
