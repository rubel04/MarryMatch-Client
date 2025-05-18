import { useState } from "react";
import useViewBiodata from "../../../hooks/useViewBiodata";
import { Rating } from "@smastrom/react-rating";
import { MdOutlineUpdate } from "react-icons/md";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const GotMarried = () => {
  const [bioData] = useViewBiodata();
  const axiosSecure = useAxiosSecure();

  const [formData, setFormData] = useState({
    selfBiodataId: bioData?.biodataId,
    partnerBiodataId: "",
    coupleImage: "",
    story: "",
    marriageDate: "",
    reviewStar: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRatingChange = (newRating) => {
    setFormData((prev) => ({
      ...prev,
      reviewStar: newRating,
    }));
  };

  // submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      ...formData,
      partnerBiodataId: parseInt(formData.partnerBiodataId),
      selfBiodataType: bioData?.biodataType,
    };
    axiosSecure
      .post("success-story", data)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Success Story Submitted!",
            text: "Thanks for sharing your love story.",
            timer: 2000,
          });
        }
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong. Try again!",
        });
      });
  };

  return (
    <div className="max-w-6xl mx-auto p-4 pt-0">
      <Helmet>
        <title>Share Your Success Story | Got Married | Dashboard | Marry Match</title>
      </Helmet>
      <h2 className="text-3xl font-bold text-center mt-3 mb-6">
        Share Your Marriage Story
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="max-w-xl mx-auto p-6 bg-teal-50/30 rounded-lg shadow">
          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <label className="font-semibold">Your Biodata ID:</label>
              <input
                type="number"
                name="selfBiodataId"
                value={bioData?.biodataId || ""}
                readOnly
                className="w-full border border-gray-400 px-4 py-2 rounded mt-1 bg-gray-100"
              />
            </div>

            <div>
              <label className="font-semibold">Partner Biodata ID:</label>
              <input
                type="number"
                name="partnerBiodataId"
                value={formData.partnerBiodataId}
                onChange={handleChange}
                required
                className="w-full border border-gray-400 px-4 py-2 rounded mt-1"
                placeholder="Enter partner biodata ID"
              />
            </div>

            <div>
              <label className="font-semibold">Married Date:</label>
              <input
                type="date"
                name="marriageDate"
                value={formData.marriageDate}
                onChange={handleChange}
                required
                className="w-full border border-gray-400 px-4 py-2 rounded mt-1"
              />
            </div>

            <div>
              <label className="font-semibold">Image URL (Optional):</label>
              <input
                type="text"
                name="coupleImage"
                value={formData.coupleImage}
                onChange={handleChange}
                placeholder="Paste image URL"
                className="w-full border border-gray-400 px-4 py-2 rounded mt-1"
              />
            </div>

            <div>
              <label className="font-semibold">Your Story:</label>
              <textarea
                name="story"
                value={formData.story}
                onChange={handleChange}
                required
                rows="4"
                className="w-full border border-gray-400 px-4 py-2 rounded"
                placeholder="Share your marriage journey..."
              ></textarea>
            </div>

            <div>
              <label className="font-semibold">Review Star:</label>
              <div className="flex items-center gap-4">
                <Rating
                  style={{ maxWidth: 160 }}
                  value={formData.reviewStar}
                  onChange={handleRatingChange}
                />
              </div>
            </div>

            <div className="text-center pt-2">
              <button
                type="submit"
                className="bg-[#F1494C] text-white px-8 py-2 rounded hover:bg-[#d93c3e] transition font-semibold cursor-pointer"
              >
                Share Story
              </button>
            </div>
          </form>
        </div>

        <div className="bg-white rounded-lg shadow p-4 h-fit">
          <h3 className="text-xl font-semibold mb-2 text-center text-gray-800">
            Preview
          </h3>
          {formData.coupleImage && (
            <img
              src={formData.coupleImage}
              alt="Couple Preview"
              className="mx-auto mb-4 h-52 w-full object-cover rounded"
            />
          )}
          <div className="flex justify-between items-center text-sm mb-2 text-gray-600">
            <p className="flex items-center gap-1">
              <MdOutlineUpdate className="text-lg" />
              Married on:{" "}
              <span className="font-semibold text-gray-700 ml-1">
                {formData.marriageDate || "N/A"}
              </span>
            </p>
            <Rating
              style={{ maxWidth: 120 }}
              value={formData.reviewStar}
              readOnly
            />
          </div>
          <p className="text-gray-700 whitespace-pre-wrap">
            {formData.story || "Your story will appear here..."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default GotMarried;
