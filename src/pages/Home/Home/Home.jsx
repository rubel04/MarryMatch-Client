import Banner from "../../../components/Banner/Banner";
import HowItWorks from "../HowItWorks/HowItWorks";
import PremiumMembers from "../PremiumMembers/PremiumMembers";

const Home = () => {
    return (
        <div>
           <Banner/>
           <PremiumMembers/>
           <HowItWorks/>
        </div>
    );
};

export default Home;