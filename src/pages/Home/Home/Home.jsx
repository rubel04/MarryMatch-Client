import Banner from "../../../components/Banner/Banner";
import HowItWorks from "../HowItWorks/HowItWorks";
import PremiumMembers from "../PremiumMembers/PremiumMembers";
import SuccessCounter from "../SuccessCounter/SuccessCounter";

const Home = () => {
    return (
        <div>
           <Banner/>
           <HowItWorks/>
           <PremiumMembers/>
           <SuccessCounter/>
        </div>
    );
};

export default Home;