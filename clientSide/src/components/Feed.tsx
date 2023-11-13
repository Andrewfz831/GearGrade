import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaRegThumbsUp } from "react-icons/fa";
import Rating from "./Rating";

const Feed = () => {
  const currentLocation = useLocation();

  return (
    <>
      <div className="h-20"></div>
      <div className="grid grid-cols-1 mx-auto md:grid-cols-3 gap-1">
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 sm:mx-auto">
          <img className="rounded-t-lg" src="./src/images/imgTest.png" alt="" />
          <div className="p-5">
            <div className="p-2 flex justify-between">
              <div className="flex flex-row">
                <FaRegThumbsUp
                  className={`${""}dark:text-white`}
                ></FaRegThumbsUp>
                <span className="px-1 dark:text-white text-gray-900">23</span>
              </div>
              <Rating />
            </div>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Granite Gear Crown60
            </h5>
            <h6 className="font-bold text-green-500">Description</h6>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              This is bussin. This is way better than North Face
            </p>
            <h6 className="font-bold text-green-500">Type</h6>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Backpack
            </p>
            <div className="flex flex-row justify-between">
              <Link
                to="post"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              >
                View Post
                <svg
                  className="w-3.5 h-3.5 ml-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </Link>
              <button
                type="button"
                className={`${
                  currentLocation.pathname === "/MyPost"
                    ? "inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                    : "hidden"
                }`}
              >
                Delete
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 sm:mx-auto">
          <img
            className="rounded-t-lg"
            src="./src/images/IMG_9896.jpeg"
            alt=""
          />
          <div className="p-5">
            <div className="p-2 flex justify-between">
              <div className="flex flex-row">
                <FaRegThumbsUp className="dark:text-white"></FaRegThumbsUp>
                <span className="px-1 dark:text-white text-gray-900">23</span>
              </div>
              <Rating />
            </div>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Bishop pass
            </h5>
            <h6 className="font-bold text-green-500">Description</h6>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Amazing views! worth camping out in the cold
            </p>
            <h6 className="font-bold text-green-500">Type</h6>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Trail
            </p>
            <div className="flex flex-row justify-between">
              <Link
                to="post"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              >
                View Post
                <svg
                  className="w-3.5 h-3.5 ml-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </Link>
              <button
                type="button"
                className={`${
                  currentLocation.pathname === "/MyPost"
                    ? "inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                    : "hidden"
                }`}
              >
                Delete
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 sm:mx-auto">
          <img className="rounded-t-lg" src="./src/images/imgTest.png" alt="" />
          <div className="p-5">
            <div className="p-2 flex justify-between">
              <div className="flex flex-row">
                <FaRegThumbsUp className="dark:text-white text-gray-900"></FaRegThumbsUp>
                <span className="px-1 dark:text-white text-gray-900">23</span>
              </div>
              <Rating />
            </div>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Granite Gear Crown60
            </h5>
            <h6 className="font-bold text-green-500">Description</h6>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              This is bussin. This is way better than North Face
            </p>
            <h6 className="font-bold text-green-500">Type</h6>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Backpack
            </p>
            <div className="flex flex-row justify-between">
              <Link
                to="post"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              >
                View Post
                <svg
                  className="w-3.5 h-3.5 ml-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </Link>
              <button
                type="button"
                className={`${
                  currentLocation.pathname === "/MyPost"
                    ? "inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                    : "hidden"
                }`}
              >
                Delete
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 sm:mx-auto">
          <img
            className="rounded-t-lg"
            src="./src/images/IMG_9896.jpeg"
            alt=""
          />
          <div className="p-5">
            <div className="p-2 flex justify-between">
              <div className="flex flex-row">
                <FaRegThumbsUp className="dark:text-white"></FaRegThumbsUp>
                <span className="px-1 dark:text-white text-gray-900">23</span>
              </div>
              <Rating />
            </div>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Bishop pass
            </h5>
            <h6 className="font-bold text-green-500">Description</h6>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Amazing views! worth camping out in the cold
            </p>
            <h6 className="font-bold text-green-500">Type</h6>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Trail
            </p>
            <div className="flex flex-row justify-between">
              <Link
                to="post"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              >
                View Post
                <svg
                  className="w-3.5 h-3.5 ml-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </Link>
              <button
                type="button"
                className={`${
                  currentLocation.pathname === "/MyPost"
                    ? "inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                    : "hidden"
                }`}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feed;
