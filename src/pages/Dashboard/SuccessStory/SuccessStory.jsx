import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";
import NoData from "../../../components/NoData/NoData";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
const SuccessStory = () => {
  const axiosSecure = useAxiosSecure();
  const { data: stories = [] } = useQuery({
    queryKey: ["all-success-stories"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/success-story`);
      return res.data;
    },
  });

  const handleDetails = async (id) => {
    const res = await axiosSecure.get(`/success-story/${id}`);
    const story = res?.data;
    Swal.fire({
    title: "Success Story",
    width: 600,
    showCloseButton: true,
    showConfirmButton: false,
    html: `
      <div style="text-align: left;">
        <img src="${story.coupleImage}" alt="Couple" style="width: 100%; height: 200px; object-fit: cover; border-radius: 8px;" />
        <p style="margin-top: 10px;"><strong>Marriage Date:</strong> ${story.marriageDate}</p>
        <p><strong>Rating:</strong> ${story.reviewStar} </p>
        <p style="margin-top: 10px;">${story.story}</p>
      </div>
    `,
  });
    
  };

  return (
    <div>
      <Helmet>
        <title>Explore All Success Story | Dashboard | Marry Match</title>
      </Helmet>
      <h2 className="text-3xl font-medium">Success Stories</h2>
      <p className="text-gray-8700 mt-1">
        Explore the success stories with matched Male and Female Biodata IDs.{" "}
        <br /> Click 'View Details' to see their full journey.
      </p>
      <div className="mt-8">
        {stories.length !== 0 ? (
          <div className="overflow-x-auto mt-4">
            <Table>
              <TableHead>
                <TableRow>
                  <TableHeadCell>Male Biodata ID</TableHeadCell>
                  <TableHeadCell>Female Biodata ID</TableHeadCell>
                  <TableHeadCell></TableHeadCell>
                </TableRow>
              </TableHead>
              <TableBody className="">
                {stories.map((story) => (
                  <TableRow
                    key={story?._id}
                    className="bg-white dark:border-gray-700 dark:bg-gray-800"
                  >
                    <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      #
                      {story?.selfBiodataType == "Male"
                        ? story?.selfBiodataId
                        : story?.partnerBiodataId}
                    </TableCell>
                    <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      #
                      {story?.selfBiodataType == "Male"
                        ? story?.partnerBiodataId
                        : story?.selfBiodataId}
                    </TableCell>
                    <TableCell className="flex gap-2">
                      <button
                        onClick={() => handleDetails(story?._id)}
                        className=" text-amber-500 hover:text-amber-600 underline py-1 px-2 cursor-pointer font-medium rounded  transition"
                      >
                        View Details
                      </button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        ) : (
          <NoData text="No success story found" />
        )}
      </div>
    </div>
  );
};

export default SuccessStory;
