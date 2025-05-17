const ContactUs = () => {
  return (
    <div>
      <section className="bg-gradient-to-r from-[#F1494C] to-pink-500 text-white py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl md:text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg md:text-xl">
            We'd love to hear from you! Whether you have a question about
            features, pricing, or anything else, our team is ready to answer all
            your questions.
          </p>
        </div>
      </section>

      <section className="bg-white py-10 px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6 md:p-8">
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-2 rounded-md bg-gray-100 focus:outline-none focus:ring-0"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Your Email
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 rounded-md bg-gray-100 focus:outline-none focus:ring-0"
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Subject
              </label>
              <input
                type="text"
                placeholder="Message subject"
                className="w-full px-4 py-2 rounded-md bg-gray-100 focus:outline-none focus:ring-0"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Write your message here..."
                className="w-full px-4 py-2 rounded-md bg-gray-100 focus:outline-none focus:ring-0"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-[#F1494C] hover:bg-[#d9383b] text-white font-bold p-2 w-full rounded cursor-pointer"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
