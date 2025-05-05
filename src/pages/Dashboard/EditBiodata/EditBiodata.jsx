import Lottie from "lottie-react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useViewBiodata from "../../../hooks/useViewBiodata";
import noBioData from "../../../assets/no-biodata.json";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const EditBiodata = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const [bioData] = useViewBiodata();
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
    mobile,
  } = bioData || {};

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const initialData = Object.fromEntries(formData.entries());
    const { ...updateBiodata } = initialData;
    axiosSecure
      .patch(`/biodata/${biodataId}`, updateBiodata)
      .then((res) => {
        if (res.data?.modifiedCount > 0) {
          Swal.fire({
            title: ` Biodata updated successfully!`,
            text: `Your profile has been saved with the latest information.`,
            icon: "success",
          });
          navigate("/dashboard/view-biodata");
        }
      })
      .catch((err) => {
        Swal.fire({
          title: ` Biodata updated failed!`,
          text: err.message,
          icon: "error",
        });
      });
  };
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 bg-gray-50 min-h-screen">
      {bioData ? (
        <div>
          <h1 className="text-3xl font-bold">Edit Your Biodata</h1>
          <p className="mb-8 mt-1 text-gray-700">
            You don’t have a biodata yet. Please create one first to be able to
            edit it.
          </p>
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 rounded-2xl shadow"
          >
            <div className="md:col-span-2">
              <h2 className="text-xl font-semibold text-gray-700 border-b border-gray-300 pb-2 mb-4">
                Personal Information
              </h2>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Biodata Type
              </label>
              <select
                name="biodataType"
                defaultValue={biodataType}
                required
                className="mt-1 w-full rounded"
              >
                <option value="" disabled={true}>
                  Select Gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                required
                type="text"
                name="name"
                defaultValue={name}
                className="mt-1 w-full rounded"
                placeholder="Type Name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Profile Image Link
              </label>
              <input
                required
                type="text"
                name="profileImage"
                defaultValue={profileImage}
                className="mt-1 w-full rounded"
                placeholder="Type image URL"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Date of Birth
              </label>
              <input
                required
                type="date"
                name="dateOfBirth"
                defaultValue={dateOfBirth}
                className="mt-1 w-full rounded"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Height
              </label>
              <select
                required
                name="height"
                defaultValue={height}
                className="mt-1 w-full rounded"
              >
                <option value="" disabled={true}>
                  Select Height
                </option>
                <option value="5.0">5.0 ft</option>
                <option value="5.5">5.5 ft</option>
                <option value="6.0">6.0 ft</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Weight
              </label>
              <select
                required
                name="weight"
                defaultValue={weight}
                className="mt-1 w-full rounded"
              >
                <option value="" disabled={true}>
                  Select Weight
                </option>
                <option value="50">50 kg</option>
                <option value="60">60 kg</option>
                <option value="70">70 kg</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Race
              </label>
              <select
                required
                name="race"
                defaultValue={race}
                className="mt-1 w-full rounded"
              >
                <option value="" disabled={true}>
                  Select Race
                </option>
                <option value="Fair">Fair</option>
                <option value="Medium">Medium</option>
                <option value="Light Brown">Light Brown</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Age
              </label>
              <input
                required
                name="age"
                defaultValue={age}
                type="number"
                className="mt-1 w-full rounded"
                placeholder="Type age"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Occupation
              </label>
              <select
                required
                name="occupation"
                defaultValue={occupation}
                className="mt-1 w-full rounded"
              >
                <option value="" disabled={true}>
                  Select Occupation
                </option>
                <option value="student">Student</option>
                <option value="engineer">Engineer</option>
                <option value="doctor">Doctor</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <h2 className="text-xl font-semibold text-gray-700 border-b border-gray-300 pb-2 mt-6 mb-4">
                Family Details
              </h2>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Father's Name
              </label>
              <input
                required
                name="fathersName"
                defaultValue={fathersName}
                type="text"
                className="mt-1 w-full rounded"
                placeholder="Type Name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Mother's Name
              </label>
              <input
                required
                name="mothersName"
                defaultValue={mothersName}
                type="text"
                className="mt-1 w-full rounded"
                placeholder="Type Name"
              />
            </div>

            <div className="md:col-span-2">
              <h2 className="text-xl font-semibold text-gray-700 border-b border-gray-300 pb-2 mt-6 mb-4">
                Address Information
              </h2>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Permanent Division Name
              </label>
              <select
                required
                name="permanentDivision"
                defaultValue={permanentDivision}
                className="mt-1 w-full rounded"
              >
                <option value="" disabled={true}>
                  Select Division
                </option>
                <option value="Dhaka">Dhaka</option>
                <option value="Chattagram">Chattagram</option>
                <option value="Rangpur">Rangpur</option>
                <option value="Barisal">Barisal</option>
                <option value="Khulna">Khulna</option>
                <option value="Mymensingh">Mymensingh</option>
                <option value="Sylhet">Sylhet</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Present Division Name
              </label>
              <select
                required
                name="presentDivision"
                defaultValue={presentDivision}
                className="mt-1 w-full rounded"
              >
                <option value="" disabled={true}>
                  Select Division
                </option>
                <option value="Dhaka">Dhaka</option>
                <option value="Chattagram">Chattagram</option>
                <option value="Rangpur">Rangpur</option>
                <option value="Barisal">Barisal</option>
                <option value="Khulna">Khulna</option>
                <option value="Mymensingh">Mymensingh</option>
                <option value="Sylhet">Sylhet</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <h2 className="text-xl font-semibold text-gray-700 border-b border-gray-300 pb-2 mt-6 mb-4">
                Partner Preferences
              </h2>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Expected Partner Age
              </label>
              <input
                required
                name="expectedPartnerAge"
                defaultValue={expectedPartnerAge}
                type="number"
                className="mt-1 w-full rounded"
                placeholder="Partner age"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Expected Partner Height
              </label>
              <select
                required
                name="expectedPartnerHeight"
                defaultValue={expectedPartnerHeight}
                className="mt-1 w-full rounded"
              >
                <option value="" disabled={true}>
                  Select Height
                </option>
                <option value="5.0">5.0 ft</option>
                <option value="5.5">5.5 ft</option>
                <option value="6.0">6.0 ft</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Expected Partner Weight
              </label>
              <select
                required
                name="expectedPartnerWeight"
                defaultValue={expectedPartnerWeight}
                className="mt-1 w-full rounded"
              >
                <option value="" disabled={true}>
                  Select Weight
                </option>
                <option value="50">50 kg</option>
                <option value="60">60 kg</option>
                <option value="70">70 kg</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <h2 className="text-xl font-semibold text-gray-700 border-b border-gray-300 pb-2 mt-6 mb-4">
                Contact Information
              </h2>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={user?.email}
                readOnly
                className="mt-1 w-full rounded bg-gray-50 p-1"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Mobile Number
              </label>
              <input
                required
                name="mobile"
                defaultValue={mobile}
                type="number"
                className="mt-1 w-full rounded"
                placeholder="Type number"
              />
            </div>

            <div className="md:col-span-2 text-center mt-6">
              <button
                type="submit"
                className="bg-[#F1494C] hover:bg-[#d9383b] text-white font-bold py-2 px-6 rounded cursor-pointer block m-auto mt-4"
              >
                Edit and Publish
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="flex items-center h-screen justify-center">
          <div className="h-full">
            <Lottie className="h-1/2" animationData={noBioData}></Lottie>
            <p className="text-gray-700">
              You don’t have a biodata yet. Please create one first to be able
              to edit it.
            </p>
            <Link to="/dashboard/create-biodata">
              <button className="bg-[#F1494C] hover:bg-[#d9383b] text-white font-bold p-2 rounded cursor-pointer block m-auto mt-4">
                Create Biodata
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditBiodata;
