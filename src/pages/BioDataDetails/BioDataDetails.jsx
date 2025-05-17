import React from "react";
import { IoCall } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { Link, useNavigate, useParams } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import usePremiumUser from "../../hooks/usePremiumUser";
import { useQuery } from "@tanstack/react-query";

const BioDataDetails = () => {
  const { id } = useParams();
  const navigate= useNavigate();
  const [isPremiumUser] = usePremiumUser();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { data: bioData = [] } = useQuery({
    queryKey: ["bioData-details", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/biodata/${id}`);
      return res.data;
    },
  });

  const { data: similarBiodata = [] } = useQuery({
    queryKey: ["similar-biodata", bioData?.biodataType],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/biodata/similar/${bioData?.biodataType}?currentId=${id}`
      );
      return res.data;
    },
  });

  // console.log(similarBiodata);

  const {
    biodataId,
    biodataType,
    name,
    profileImage,
    dateOfBirth,
    height,
    weight,
    age,
    occupation,
    race,
    fathersName,
    mothersName,
    permanentDivision,
    presentDivision,
    expectedPartnerAge,
    expectedPartnerHeight,
    expectedPartnerWeight,
    email,
    mobile,
  } = bioData || {};

  // add biodata to the favorite list
  const handleAddToFavorite = () => {
    const { _id, ...restBioData } = bioData;
    const newFavoriteBiodata = {
      ...restBioData,
      userName: user?.displayName,
      userEmail: user?.email,
    };

    axiosSecure
      .post("/favoriteBiodata", newFavoriteBiodata)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            title: "Biodata add to the favorite list",
            icon: "success",
            timer: 3000,
          });
          navigate("/dashboard/favourites")
        }
      })
      .catch(() => {
        Swal.fire({
          title: "Something went wrong",
          text: "try again",
          icon: "error",
          timer: 2000,
        });
      });
  };

  return (
    <div className="md:w-7xl mx-auto md:my-10 mt-0 p-4 md:p-0">
      <div className="flex flex-col lg:flex-row items-center gap-8">
        {/* profile image */}
        <div className="h-32 md:h-48 w-32 md:w-48 rounded-full overflow-hidden shadow-md">
          <img
            className="w-full h-full object-cover"
            src={profileImage}
            alt="profile image"
          />
        </div>
        {/* basic info */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>
          <p className="text-gray-500 text-sm mt-1 flex items-center justify-center md:justify-start gap-1">
            Biodata ID: #{biodataId}{" "}
            <span className="w-1.5 h-1.5 rounded-full inline-block bg-green-500"></span>{" "}
            {biodataType}
          </p>
          <div className="mt-4 text-xs md:text-sm flex flex-wrap gap-2 justify-center md:justify-start">
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
              Age: {age}
            </span>
            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">
              Occupation: {occupation}
            </span>
            <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full">
              Permanent Division: {permanentDivision}
            </span>
          </div>
        </div>
        {/* details */}
      </div>
      <div className="grid grid-cols-2 gap-6 mt-8 text-gray-700">
        <div>
          <h4 className="font-semibold mb-1 text-gray-600">Father's Name</h4>
          <p>{fathersName}</p>
        </div>
        <div>
          <h4 className="font-semibold mb-1 text-gray-600">Mother's Name</h4>
          <p>{mothersName}</p>
        </div>
        <div>
          <h4 className="font-semibold mb-1 text-gray-600">Date of Birth</h4>
          <p>{dateOfBirth}</p>
        </div>
        <div>
          <h4 className="font-semibold mb-1 text-gray-600">Height & Weight</h4>
          <p>
            {height} | {weight}
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-1 text-gray-600">Race</h4>
          <p>{race}</p>
        </div>
        <div>
          <h4 className="font-semibold mb-1 text-gray-600">Present Division</h4>
          <p>{presentDivision}</p>
        </div>
        <div>
          <h4 className="font-semibold mb-1 text-gray-600">
            Expected Partner Age
          </h4>
          <p>{expectedPartnerAge}</p>
        </div>
        <div>
          <h4 className="font-semibold mb-1 text-gray-600">
            Expected Partner Height
          </h4>
          <p>{expectedPartnerHeight}</p>
        </div>
        <div>
          <h4 className="font-semibold mb-1 text-gray-600">
            Expected Partner Weight
          </h4>
          <p>{expectedPartnerWeight}</p>
        </div>
      </div>
      {/* contact for premium users */}
      <div className="mt-10">
        {isPremiumUser ? (
          <div className="border-t border-gray-300 pt-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Contact Information
            </h3>
            <p className="flex items-center gap-1">
              <MdOutlineMailOutline />
              Email:
              <a href={`mailto:${email}`} className="text-blue-600">
                {email}
              </a>
            </p>
            <p className="flex items-center gap-1">
              <IoCall />
              Call: <span className="text-gray-700">{mobile}</span>
            </p>
            <button
              onClick={handleAddToFavorite}
              className="bg-[#F1494C] hover:bg-[#d9383b] text-white font-bold mt-2 p-2 px-6 rounded cursor-pointer"
            >
              Add to Favorite
            </button>
          </div>
        ) : (
          <div className="flex flex-wrap items-center gap-4 mt-4">
            <button
              onClick={handleAddToFavorite}
              className="border border-[#F1494C] text-[#F1494C] hover:bg-[#f1494c]/10 font-semibold px-5 py-2 cursor-pointer rounded-lg transition"
            >
              Add to Favorite
            </button>

            {/* redirect to the checkout page when user click the button */}
            <Link to={`/dashboard/checkout/${biodataId}`}>
              <button className="bg-[#F1494C] hover:bg-[#d9383b] text-white font-semibold px-5 py-2 cursor-pointer rounded-lg transition">
                Request Contact Information
              </button>
            </Link>
          </div>
        )}

        <div className="mt-16">
          <h4 className="text-xl font-medium text-gray-700 underline mb-3">
            Similar Biodata
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {similarBiodata.map((item) => (
              <div
                key={item._id}
                className="border border-gray-200 rounded-lg shadow p-3 flex gap-4 items-center"
              >
                <img
                  src={item.profileImage}
                  alt={item.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h5 className="text-lg font-semibold">{item.name}</h5>
                  <p className="text-sm text-gray-600">ID: #{item.biodataId}</p>
                  <p className="text-sm text-gray-600">Age: {item.age}</p>
                  <p className="text-sm text-gray-600">
                    Division: {item.permanentDivision}
                  </p>
                  <Link
                    to={`/biodata/info/${item.biodataId}`}
                    className="text-blue-500 hover:text-blue-600 text-sm font-medium underline mt-1 inline-block"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BioDataDetails;
