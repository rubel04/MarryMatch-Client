import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay,Pagination } from "swiper/modules";
import "swiper/css";
import 'swiper/css/pagination';
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
  return (
    <section className="mb-12 bg-gray-100 p-4 md:p-0">
    <div className="md:w-4xl mx-auto">
      <div>
        <SectionHeading
          heading1="Success"
          heading2="Stories"
          highlight="second"
        />
      </div>
      <Swiper autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }} 
        pagination={true}
        modules={[Autoplay,Pagination]}
        className="mySwiper">
        {successStory.map((story) => (
          <SwiperSlide key={story._id}>
            <div className="cursor-pointer mb-12">
              <img
                className="h-72 w-full object-cover"
                src={story.coupleImage}
                alt=""
              />
              <div className="mt-4 mb-1 md:flex justify-between items-center">
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
              <p className="text-gray-700 mt-4 md:mt-0">{story.story}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </section>
  );
};

export default SuccessStory;
