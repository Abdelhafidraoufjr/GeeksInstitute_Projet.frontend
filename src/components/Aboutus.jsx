import React from "react";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";

function Aboutus() {
  return (
    <div
      id="propos"
      class="w-full lg:h-screen h-full m-auto flex items-center justify-cetner py-20 bg-gray-50 dark:bg-gray-900"
    >
      <div class="w-full h-full flex flex-col justify-center items-center sm:px-4 px-2">
        <div class="lg:w-[90%] w-full mx-auto flex flex-col lg:gap-6 lg:flex-row items-center justify-center ">
          <div class="relative">
            <img
              class="absolute z-20 lg:left-[2rem] -top-4 left-[1rem] lg:w-[8rem] lg:h-[8rem] sm:w-[6rem] sm:h-[6rem] w-[3rem] h-[3rem] rounded-full"
              src={img1}
              alt="Side Image"
            />

            <img
              class="absolute z-20 lg:top-[12rem] sm:top-[11rem] top-[5rem] sm:-left-[3rem] -left-[2rem] lg:w-[8rem] lg:h-[8rem] sm:w-[6rem] sm:h-[6rem] w-[3rem] h-[3rem] rounded-full"
              src={img2}
              alt="Side Image 2"
            />

            <img
              class="absolute z-20 lg:top-[23rem] sm:top-[20.5rem] top-[10.5rem] left-[2rem] lg:w-[8rem] lg:h-[8rem] sm:w-[6rem] sm:h-[6rem] w-[3rem] h-[3rem] rounded-full"
              src={img3}
              alt="Side Image 3"
            />

            <img
              class="rounded-full relative object-cover right-0 lg:w-[30rem] lg:h-[30rem] sm:w-[25rem] sm:h-[25rem] w-[12rem] h-[12rem] outline sm:outline-offset-[.77em] outline-offset-[.37em] outline-red-600"
              src={img4}
              alt="About us"
            />
          </div>

          <div class="lg:w-[60%] p-4 w-full h-full shadow-xl shadow-green-300/40 flex flex-col justify-center items-center sm:px-6 px-4 rounded-xl">
            <h2 class="text-4xl text-center text-red-600 dark:text-red-600 font-bold px-4 py-1 md:mt-0 mt-10">
              About Us
            </h2>
            <p class="md:text-3xl text-2xl text-center text-gray-800 dark:text-gray-200 font-bold my-5">
              why we are doing that
            </p>
            <p class="md:text-xl sm:text-lg text-base mt-2 text-justify sm:px-2 dark:text-gray-300">
              Our platform connects individuals facing health challenges with a
              supportive community of peers who share practical solutions and
              firsthand experiences. Whether managing chronic conditions,
              recovering from illness, or seeking wellness tips, users can
              exchange reliable advice, personal insights, and encouragement.
              Together, we empower each other to navigate health journeys with
              confidence and collective wisdom
            </p>

            <button class="lg:mt-10 mt-6 lg:px-6 px-4 lg:py-4 py-2 bg-red-600 rounded-sm lg:text-xl text-lg text-white font-semibold">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
