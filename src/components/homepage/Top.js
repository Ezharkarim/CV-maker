import React from "react";

const Top = () => {
  return (
    <div>
      <div className="block max-w-screen-xl items-center  mx-auto w-[100%]">
        <h1 className="tracking-tighter	text-center text-2xl lg:text-start lg:text-4xl font-mono mt-8 text-gray-600 font-semibold">
          The online resume builder getting folks <br />
          hired by BBC, Google, Apple, Tesla, and <br />
          Airbnb.
        </h1>
      </div>
      <div class="flex flex-col items-center justify-center lg:grid lg:grid-cols-3 gap-4 max-w-screen-xl mx-auto mt-12">
        <div className=" justify-items-center">
          <h3 className="block text-center lg:text-start text-[20px] lg:text-2xl  text-gray-600 font-normal">
            Build your brand-new <br />
            resume in as little as 5 <br />
            minutes.
          </h3>
          <h4 className=" block text-center lg:text-start text-gray-600 font-bold text-2xl">
            Try it for free.
          </h4>
          <button class=" ml-3 bg-blue-500 rounded-full hover:bg-blue-700 text-white font-bold py-2 px-4 border-none">
            Get Started Now
          </button>
        </div>
        <div class="col-span-2 h-24 z-10">
          <img
            className="backdrop-blur-xl"
            src="https://d.novoresume.com/images/landing_page/header/desktop.webp"
            alt=""
          />
        </div>
      </div>
      {/* animation */}
      <div>
        <div className="bg-[#38bdf8] right-0 left-0 w-full overflow-hidden h-96">
          <svg
            className="block relative w-[calc(155% + 1.3px)] h-123px"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="fill-white"
            ></path>
          </svg>
        </div>
        <div className=" w-full overflow-hidden">
          <svg
            className="block relative w-[calc(155% + 1.3px)] h-123px"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="fill-[#38bdf8]"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Top;
