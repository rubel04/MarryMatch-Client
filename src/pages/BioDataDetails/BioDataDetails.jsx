import React from "react";
import { useLoaderData } from "react-router-dom";

const BioDataDetails = () => {
    const bioData = useLoaderData();

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
  return (
    <div className="w-7xl mx-auto p-4 sm:p-8 bg-white shadow-lg rounded-xl mt-10">
      <div className="flex flex-col lg:flex-row items-center gap-8">
        {/* Profile Image */}
        <div className="w-48 h-48 rounded-full overflow-hidden shadow-md">
          <img
            src={profileImage}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Basic Info */}
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>
          <p className="text-gray-500 text-sm mt-1">
            Biodata ID: #{biodataId} • {biodataType}
          </p>
          <div className="mt-4 flex flex-wrap gap-4 justify-center lg:justify-start text-sm">
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
              Age: {age}
            </span>
            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">
              Occupation: {occupation}
            </span>
            <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full">
              Division: {permanentDivision}
            </span>
          </div>
        </div>
      </div>

      {/* Details Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 text-gray-700">
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
          <h4 className="font-semibold mb-1 text-gray-600">Expected Partner Age</h4>
          <p>{expectedPartnerAge}</p>
        </div>
        <div>
          <h4 className="font-semibold mb-1 text-gray-600">Expected Partner Height</h4>
          <p>{expectedPartnerHeight}</p>
        </div>
        <div>
          <h4 className="font-semibold mb-1 text-gray-600">Expected Partner Weight</h4>
          <p>{expectedPartnerWeight}</p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="mt-10 border-t pt-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Contact Information</h3>
        <p>
          📧 <a href={`mailto:${email}`} className="text-blue-600">{email}</a>
        </p>
        <p>
          📞 <span className="text-gray-700">{mobile}</span>
        </p>
      </div>
    </div>
  );
};

export default BioDataDetails;
