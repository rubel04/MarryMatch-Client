import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import noBiodata from "../../assets/no-biodata.json";
// import noData from "../../assets/nodata.jpg";

const NoData = (props) => {
  const { text, button, to } = props || {};
  return (
    <div>
      <div className="flex items-center h-screen justify-center">
        <div className="h-full">
          <Lottie
            className="h-1/2"
            animationData={noBiodata}
          ></Lottie>
          {text && <p className="text-gray-700 text-center">{text}</p>}
          {button && (
            <Link to={to}>
              <button className="bg-[#F1494C] hover:bg-[#d9383b] text-white font-bold p-2 rounded cursor-pointer block m-auto mt-4">
                {button}
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default NoData;
