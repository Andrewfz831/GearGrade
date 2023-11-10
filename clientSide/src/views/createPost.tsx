import React, { ChangeEvent, useState } from 'react';
import Navbar from '../components/Navbar';

const FileUpload: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];

    if (selectedFile) {
      console.log(`Selected file: ${selectedFile.name}`);
    }
  };

  return (
    <>
      <Navbar />
      <div className="h-20"></div>
      <section className=" bg-gray-50 dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 ">
          <div className="flex flex-col justify-center"></div>
          <div>
            <div className="w-full lg:w-full p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow-xl dark:bg-gray-800">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Create Post
              </h2>
              <form className="mt-8 space-y-6" action="#">
                <div>
                  <div>
                    <label
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      htmlFor="user_avatar"
                    >
                      Upload file
                    </label>
                    <input
                      className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                      aria-describedby="user_avatar_help"
                      id="user_avatar"
                      type="file"
                      onChange={handleFileChange} // Handle file selection change
                    />
                    <div
                      className="mt-1 text-sm text-gray-500 dark:text-gray-300"
                      id="user_avatar_help"
                    >
                      Add an Image!
                    </div>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Product Name
                  </label>
                  <input
                    name="productName"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                    required
                  />
                </div>

                <button
                  onClick={() => setOpen(!open)}
                  id="dropdownDefaultButton"
                  data-dropdown-toggle="dropdown"
                  className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                  type="button"
                >
                  Type{' '}
                  <svg
                    className="w-2.5 h-2.5 ml-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                <div
                  className={`${open ? 'close' : 'menu'} z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
                >
                  <ul
                    className={` ${
                      open ? '' : 'top-[-490px]'
                    } absolute py-2 text-sm bg-white text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton`}
                  >
                    <li>
                      <span className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                        Backpack
                      </span>
                    </li>
                    <li>
                      <span className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                        Sleeping Item
                      </span>
                    </li>
                    <li>
                      <span className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                        Shelter
                      </span>
                    </li>
                    <li>
                      <span className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                        Clothing
                      </span>
                    </li>
                    <li>
                      <span className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                        Cooking/food
                      </span>
                    </li>
                    <li>
                      <span className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                        Trail
                      </span>
                    </li>
                  </ul>
                </div>

                <label
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Description
                </label>
                <textarea
                  id="message"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                ></textarea>

                <button
                  type="submit"
                  className="w-full px-5 py-3 text-base font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:ring-green-300 sm:w-auto dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                >
                  Post
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FileUpload;
