import { Helmet } from "react-helmet";

const AboutUs = () => {
  return (
    <div className="bg-white text-gray-800">
      <Helmet>
        <title>About Us | Marry Match</title>
      </Helmet>
      <section className="bg-gradient-to-r from-[#F1494C] to-pink-500 text-white py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl md:text-4xl font-bold mb-4">
            About Marry Match
          </h1>
          <p className="text-lg md:text-xl">
            Your trusted partner in finding the perfect life companion.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <img
              src="https://i.ibb.co/zWVGHmVQ/download.jpg"
              alt="Our Story"
              className="rounded-2xl shadow-lg w-full max-w-xl"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4 text-[#F1494C]">
              Our Story
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Marry Match started with a mission to connect hearts. We believe
              that everyone deserves love and a meaningful relationship. With
              years of experience, verified biodatas, and a commitment to
              authenticity, we aim to make the journey of finding your soulmate
              easy and trustworthy.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-[#F1494C]">
              Our Mission
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              To provide a safe and secure platform for individuals seeking
              meaningful relationships, while respecting tradition and values.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4 text-[#F1494C]">
              Our Vision
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              To be the most trusted matrimony service globally by helping
              millions build happy marriages with compassion, trust, and modern
              matchmaking.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#F1494C] mb-10">
            Why Thousands Trust Marry Match?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="p-6 border border-gray-300 rounded-lg hover:shadow-lg transition">
              <h4 className="text-xl font-semibold mb-2">
                100% Verified Biodata
              </h4>
              <p className="text-gray-600">
                All profiles go through a strict verification process to ensure
                authenticity.
              </p>
            </div>
            <div className="p-6 border border-gray-300 rounded-lg hover:shadow-lg transition">
              <h4 className="text-xl font-semibold mb-2">Advanced Matching</h4>
              <p className="text-gray-600">
                Our intelligent matchmaking algorithm ensures the best
                compatibility.
              </p>
            </div>
            <div className="p-6 border border-gray-300 rounded-lg hover:shadow-lg transition">
              <h4 className="text-xl font-semibold mb-2">Privacy & Security</h4>
              <p className="text-gray-600">
                Your data is safe with us. We use top-level security and privacy
                controls.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 text-center bg-gradient-to-r from-[#F1494C] to-pink-500 text-white mb-12">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Find Your Soulmate?
        </h2>
        <p className="mb-6">
          Join Marry Match today and start your journey toward a beautiful
          relationship.
        </p>
        <a
          href="/register"
          className="inline-block bg-white text-[#F1494C] font-semibold py-3 px-6 rounded-full hover:bg-gray-100 transition"
        >
          Register Now
        </a>
      </section>
    </div>
  );
};

export default AboutUs;
