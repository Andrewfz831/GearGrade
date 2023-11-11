import React, { ChangeEvent, useState } from "react";
import Navbar from "../components/Navbar";

const items = [
  "Backpack",
  "Sleep System",
  "Shelter",
  "Clothong",
  "Cooking/Food",
  "Trail",
];
const stars = ["1 Star", "2 Star", "3 Star", "4 Star", "5 star"];

const FileUpload: React.FC = () => {
  const [productName, setProductName] = useState("");
  const [type, setSelect] = useState("");
  const [rate, setRate] = useState("");
  const [review, setReview] = useState("");

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
                    htmlFor="productName"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Product Name
                  </label>
                  <input
                    onChange={(event) => setProductName(event.target.value)}
                    id="productName"
                    name="productName"
                    value={productName}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                    required
                  />
                </div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Type
                  <select
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                    id="type"
                    value={type}
                    onChange={(event) => {
                      setSelect(event.target.value);
                    }}
                  >
                    <option />
                    {items.map((itemType) => (
                      <option key={type}>{itemType}</option>
                    ))}
                  </select>
                </label>

                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Rating
                  <select
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                    id="type"
                    value={rate}
                    onChange={(event) => {
                      setRate(event.target.value);
                    }}
                  >
                    <option />
                    {stars.map((rating) => (
                      <option key={rate}>{rating}</option>
                    ))}
                  </select>
                </label>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Review
                </label>
                <textarea
                  onChange={(event) => setReview(event.target.value)}
                  value={review}
                  id="message"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                  required
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
