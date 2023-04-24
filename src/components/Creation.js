import React, { useState } from "react";
import { db } from "../config";

function Creation() {
  const [product, setProduct] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [words, setWords] = useState("");

  const handleClick = (event) => {
    event.preventDefault(); // prevent the default form submission behavior

    // create a new object with the form data
    const formData = {
      product,
      type,
      description,
      link,
      words,
    };

    // save the form data to the database
    db.collection("adverts")
      .add(formData)
      .then(() => {
        console.log("Form data saved successfully!");
        // reset the form
        setProduct("");
        setType("");
        setDescription("");
        setLink("");
        setWords("");
      })
      .catch((error) => {
        console.error("Error saving form data: ", error);
      });
    alert(
      "Your advert has been submitted for review. Thank you for your interest in AdSense!"
    );
  };

  return (
    <section className="text-gray-600 body-font relative bg-white m-0.5">
      <div className="container px-5 py-4 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Apply for Adverts
          </h1>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2 mb-5">
            <div className="p-2 w-1/2">
              <div className="relative">
                <label for="name" className="leading-7 text-sm text-gray-600">
                  Product/Company
                </label>
                <input
                  type="text"
                  id="product"
                  name="product"
                  value={product} // bind the value of the input to the state variable
                  onChange={(event) => setProduct(event.target.value)} // update the state variable on input change
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label for="type" className="leading-7 text-sm text-gray-600">
                  Type
                </label>
                <select
                  id="type"
                  name="type"
                  value={type} // bind the value of the input to the state variable
                  onChange={(event) => setType(event.target.value)} // update the state variable on input change
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2.5 px-3 leading-8 transition-colors duration-200 ease-in-out"
                >
                  <option value="Quiz">Quiz</option>
                  <option value="Mini-Game">Mini-Game</option>
                </select>
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label
                  for="description"
                  className="leading-7 text-sm text-gray-600"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={description} // bind the value of the input to the state variable
                  onChange={(event) => setDescription(event.target.value)} // update the state variable on input change
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label for="name" className="leading-7 text-sm text-gray-600">
                  Link
                </label>
                <input
                  type="url"
                  id="link"
                  name="link"
                  value={link} // bind the value of the input to the state variable
                  onChange={(event) => setLink(event.target.value)} // update the state variable on input change
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            {/* <div className="p-2 w-1/2">
              <div className="relative">
                <label for="name" className="leading-7 text-sm text-gray-600">
                  Upload File
                </label>
                <input
                  type="file"
                  id="drive"
                  name="drive"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div> */}
            <div className="p-2 w-1/2">
              <div className="relative">
                <label for="name" className="leading-7 text-sm text-gray-600">
                  Keywords
                </label>
                <input
                  type="text"
                  id="words"
                  name="words"
                  value={words} // bind the value of the input to the state variable
                  onChange={(event) => setWords(event.target.value)} // update the state variable on input change
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            {/* <div className="p-2 w-1/2">
              <div className="relative">
                <label for="name" className="leading-7 text-sm text-gray-600">
                  Starting
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div> */}

            <div className="p-2 w-full">
              <button
                className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-2"
                onClick={handleClick}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Creation;
