import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SectionHeading from "../../../components/SectionHeading/SectionHeading";
import { MdOutlineUpdate } from "react-icons/md";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css';

const SuccessStory = () => {
  const axiosPublic = useAxiosPublic();
  const { data: successStory = [] } = useQuery({
    queryKey: ["successStory"],
    queryFn: async () => {
      const res = await axiosPublic.get("/success-story");
      return res.data;
    },
  });
  console.log(successStory);
  return (
    <section className="w-4xl mx-auto">
      <div>
        <SectionHeading
          heading1="Success"
          heading2="Stories"
          highlight="second"
        />
      </div>

      <Swiper className="mySwiper">
        {successStory.map((story) => (
          <SwiperSlide key={story._id}>
            <div className="cursor-pointer">
              <img
                className="h-72 w-full object-cover"
                src={story.image}
                alt=""
              />
              <div className="mt-4 mb-1 flex justify-between items-center">
                <p className="flex items-center gap-1">
                  <MdOutlineUpdate /> Married on:{" "}
                  <span className="font-semibold text-gray-700 ml-1">
                    {story.marriageDate}
                  </span>
                </p>
                <Rating
                  style={{ maxWidth: 120 }}
                  value={story.reviewStar}
                  readOnly
                />
              </div>
              <p className="text-gray-700">{story.story}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default SuccessStory;
