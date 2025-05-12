import { MdOutlineMailOutline } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import useViewBiodata from "../../../hooks/useViewBiodata";
import usePremiumUser from "../../../hooks/usePremiumUser";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import NoData from "../../../components/NoData/NoData";

const ViewBiodata = () => {
  const [isPremiumUser] = usePremiumUser();
  const [bioData, isPending] = useViewBiodata();
  const axiosSecure = useAxiosSecure();

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

  const handleMakePremium = () => {
    Swal.fire({
      title: "Are you sure to make you premium?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .post("/users/make-premium", {
            biodataId: bioData?.biodataId,
            name: bioData?.name,
            email: bioData?.email,
            status: "pending",
          })
          .then((res) => {
            if (res.data.message) {
              Swal.fire({
                title: "Request failed!",
                text: res.data?.message,
                icon: "error",
                timer: 3000,
              });
            }
            if (res.data?.insertedId) {
              Swal.fire({
                title: "Request submitted!",
                text: "You’ll be notified once the admin approves it.",
                icon: "success",
                timer: 3000,
              });
            }
          })
          .catch(() => {
            Swal.fire({
              title: "Request failed!",
              text: "Please try again.",
              icon: "error",
              timer: 3000,
            });
          });
      }
    });
  };

  return (
    <div>
      {bioData && !isPending ? (
        <div>
          <div className="flex flex-col lg:flex-row items-center gap-8">
            {/* profile image */}
            <div className="relative">
              <div className="h-48 w-48 rounded-full overflow-hidden shadow-md">
                <img
                  className="w-full h-full object-cover"
                  src={profileImage}
                  alt="profile image"
                />
              </div>
              {isPremiumUser && (
                <span
                  title="Premium Member"
                  className="absolute bottom-4 right-4 bg-[#00D0FF] text-white text-sm text-center h-5 w-5 rounded-full font-bold overflow-hidden cursor-default"
                >
                  P
                </span>
              )}
            </div>
            {/* basic info */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>
              <p className="text-gray-500 text-sm mt-1 flex items-center gap-1">
                Biodata ID: #{biodataId}{" "}
                <span className="w-1.5 h-1.5 rounded-full inline-block bg-green-500"></span>{" "}
                {biodataType}
              </p>
              <div className="mt-4 text-sm flex flex-wrap gap-4 justify-center md:justify-start">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 text-gray-700">
            <div>
              <h4 className="font-semibold mb-1 text-gray-600">
                Father's Name
              </h4>
              <p>{fathersName}</p>
            </div>
            <div>
              <h4 className="font-semibold mb-1 text-gray-600">
                Mother's Name
              </h4>
              <p>{mothersName}</p>
            </div>
            <div>
              <h4 className="font-semibold mb-1 text-gray-600">
                Date of Birth
              </h4>
              <p>{dateOfBirth}</p>
            </div>
            <div>
              <h4 className="font-semibold mb-1 text-gray-600">
                Height & Weight
              </h4>
              <p>
                {height} | {weight}
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-1 text-gray-600">Race</h4>
              <p>{race}</p>
            </div>
            <div>
              <h4 className="font-semibold mb-1 text-gray-600">
                Present Division
              </h4>
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
            <div className="border-t border-gray-300 pt-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Contact Information
              </h3>
              <p className="flex items-center gap-1">
                <MdOutlineMailOutline />
                Email:
                <a href={`${email}`}>{email}</a>
              </p>
              <p className="flex items-center gap-1">
                <IoCall />
                Call: <span className="text-gray-700">{mobile}</span>
              </p>
              <div className="flex justify-center mt-8">
                {isPremiumUser || (
                  <button
                    onClick={handleMakePremium}
                    className="bg-[#F1494C] hover:bg-[#d9383b] text-white font-bold p-2 px-6 rounded cursor-pointer"
                  >
                    Make Premium Biodata
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <NoData
          text="You don’t have a biodata. Click here to create one now."
          button="Create Biodata"
          to="/dashboard/create-biodata"
        />
      )}
    </div>
  );
};

export default ViewBiodata;
