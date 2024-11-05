import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="relative bg-black min-h-screen flex flex-col justify-center items-center px-4 lg:px-0 overflow-hidden">
      <div className="absolute top-16 left-0 w-80 h-80 bg-green-600 rounded-full opacity-30 blur-3xl animate-float-slow"></div>
      <div className="absolute top-1/4 right-0 w-60 h-60 bg-green-500 rounded-full opacity-20 blur-2xl animate-float"></div>
      <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-green-700 rounded-full opacity-15 blur-3xl animate-float-reverse"></div>
      <div className="absolute bottom-10 right-10 w-full h-32 bg-gradient-to-r from-green-800 to-transparent opacity-30 blur-lg rounded-t-full"></div>

      <h1 className="text-4xl lg:text-5xl font-extrabold mb-6 text-white text-center leading-tight max-w-2xl">
        Join Our <span className="text-green-400">Community</span> for Exclusive
        Insights
      </h1>
      <p className="text-lg lg:text-xl text-gray-300 text-center max-w-lg mb-12">
        Be part of a growing network and unlock insights to elevate your
        success.
      </p>

      <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-md gap-4">
        <Link to="/signup" className="w-full lg:w-1/2">
          <button
            type="button"
            className="w-full bg-green-600 text-white font-semibold text-lg py-3 rounded-md shadow-lg transition-all duration-300 ease-in-out transform hover:bg-green-500 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-300"
          >
            Sign Up
          </button>
        </Link>
        <Link to="/signin" className="w-full lg:w-1/2">
          <button
            type="button"
            className="w-full bg-gray-700 text-white font-semibold text-lg py-3 rounded-md shadow-lg transition-all duration-300 ease-in-out transform hover:bg-gray-600 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-gray-500"
          >
            Sign In
          </button>
        </Link>
      </div>

      <p className="mt-12 text-gray-300 text-center text-lg max-w-md">
        Already a member?
      </p>
      <Link to="/blogs" className="mt-4">
        <button
          type="button"
          className="bg-green-800 text-white font-medium text-base px-6 py-3 rounded-md shadow-lg transition-all duration-300 ease-in-out transform hover:bg-green-700 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-600"
        >
          View Blogs
        </button>
      </Link>
    </div>
  );
};

export default Home;
