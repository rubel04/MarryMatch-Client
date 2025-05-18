import React from "react";
import { Helmet } from "react-helmet";

function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <Helmet>
        <title>404 - Page Not Found | Marry Match</title>
      </Helmet>

      <h1 className="text-9xl font-extrabold text-[#d9383b]">404</h1>
      <h2 className="text-3xl md:text-4xl font-semibold mt-4 text-gray-800">
        Oops! Page Not Found
      </h2>
      <p className="mt-2 text-gray-600 max-w-md text-center">
        Sorry, the page you are looking for does not exist.
      </p>
      <a
        href="/"
        className="mt-6 inline-block bg-[#F1494C] hover:bg-[#d9383b] text-white px-6 py-3 rounded-md  transition"
      >
        Go back to Home
      </a>
    </div>
  );
}

export default ErrorPage;
