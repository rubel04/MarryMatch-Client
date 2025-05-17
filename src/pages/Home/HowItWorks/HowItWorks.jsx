import { FaUserPlus, FaSearch, FaComments } from "react-icons/fa";
import SectionHeading from "../../../components/SectionHeading/SectionHeading";

const HowItWorks = () => {
  const steps = [
    {
      icon: <FaUserPlus size={40} className="text-white" />,
      title: "Create Your Profile",
      description:
        "Sign up, upload your photo, and describe your perfect partner.",
      bg: "bg-gradient-to-r from-indigo-500 to-blue-500",
    },
    {
      icon: <FaSearch size={40} className="text-white" />,
      title: "Find Your Match",
      description:
        "Browse profiles based on your preferred age, location & interests.",
      bg: "bg-gradient-to-r from-[#d9383b] to-[#F1494C]",
    },
    {
      icon: <FaComments size={40} className="text-white" />,
      title: "Start Chatting",
      description: "Send messages to connect with your favorite profiles.",
      bg: "bg-gradient-to-r from-green-500 to-teal-400",
    },
  ];
  return (
    <section className="bg-pink-50 my-12 md:pb-20 pb-12 px-4">
      <SectionHeading heading1="How" heading2="MarryMatch Works" desc="Find your life partner in 3 simple steps." highlight="second" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:w-7xl mx-auto text-center">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className="bg-white shadow-lg p-6 rounded-xl hover:scale-105 transition-transform duration-300"
          >
            {/* step icon */}
            <div className={`w-26 h-26 flex items-center justify-center rounded-full mx-auto mb-4 ${step.bg}`}>
                {step.icon}
            </div>
            <h4 className="text-2xl font-semibold mb-2">{step.title}</h4>
            <p className="text-gray-600 text-sm">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
