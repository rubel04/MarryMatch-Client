import Banner from "../../../components/Banner/Banner";
import HowItWorks from "../HowItWorks/HowItWorks";
import PremiumMembers from "../PremiumMembers/PremiumMembers";
import SuccessCounter from "../SuccessCounter/SuccessCounter";
import SuccessStory from "../SuccessStory/SuccessStory";

const Home = () => {
  return (
    <div>
      <Banner />
      <HowItWorks />
      <PremiumMembers />
      <SuccessCounter />
      <SuccessStory />
    </div>
  );
};

export default Home;
