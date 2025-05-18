import { Helmet } from "react-helmet";
import Banner from "../../../components/Banner/Banner";
import HowItWorks from "../HowItWorks/HowItWorks";
import PremiumMembers from "../PremiumMembers/PremiumMembers";
import SuccessCounter from "../SuccessCounter/SuccessCounter";
import SuccessStory from "../SuccessStory/SuccessStory";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home | Marry Match</title>
      </Helmet>
      <Banner />
      <HowItWorks />
      <PremiumMembers />
      <SuccessCounter />
      <SuccessStory />
    </div>
  );
};

export default Home;
