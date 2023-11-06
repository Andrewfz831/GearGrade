import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Carousel from "../components/carousel"

const Homepage = () => {
  return (
    <>
      <Navbar/>
      <Carousel/>
      <div className="px-4 py-10 bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-col justify-center p-4 md:p-20 text-center">
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            <span className="text-green-500">Gear Grade:</span> A place to rate, share, and gear up together!
          </h1>
          <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-4 md:px-16 xl:px-48 dark:text-gray-400">
            Join our vibrant backpacking community by creating your account and start sharing your gear experiences with fellow adventurers today!
          </p>
        </div>
        <div className="p-4 md:p-10 flex justify-center">
          <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-green-500 rounded-lg hover:bg-green-800 focus:ring-4 focus:ring-green-300 dark:focus:ring-green-800"
          >
            Create Account
            <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Homepage;
