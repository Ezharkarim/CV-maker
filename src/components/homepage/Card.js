import React from 'react'

const Card = () => {
  return (
    <div className="block max-w-screen-xl items-center mt-60  mx-auto w-[100%]">
      <h1 className="mt-12 text-2xl text-center lg:text-3xl lg:text-left font-mono text-gray-600 font-semibold">
        Our Users Are Being Hired at the <br />
        World's Leading Companies.
      </h1>
      <div className="grid grid-rows-1 md:grid-cols-2 gap-6 mt-12">
        <div className="grid  gap-4">
          <div className="  rounded-3xl justify-items-end">
            <div className="w-[160px] h-[160px] float-right">
              <p className="flex items-center justify-center bg-[#51E2C2] font-bold rounded-3xl text-white text-9xl h-full">
                1
              </p>
            </div>
          </div>
          <div className="h-[314px] rounded-3xl bg-slate-200 ">
            <div className="h-full mx-auto w-[90%] grid place-content-center">
              <h1 className=" text-[24px] font-bold gray-600">
                Pick a Template
              </h1>
              <p className="text-[22px] from-neutral-200">
                Don't sabotage your job search before it has even <br />
                begun. Choose from our ATS-friendly, hand- <br />
                crafted resume templates
              </p>
            </div>
          </div>
        </div>

        <div className=" overflow-hidden rounded-3xl">
          <div className=" rounded-3xl w-[80%] h-full bg-lime-400"></div>
        </div>
      </div>

      <div className="grid grid-rows-1 md:grid-cols-2 gap-6 mt-16">
        <div className="rounded-3xl place-content-end">
          <div className=" float-right rounded-3xl w-[80%] h-full bg-lime-400"></div>
        </div>

        <div className="grid  gap-4">
          <div className="  rounded-3xl justify-items-end">
            <div className="w-[160px] h-[160px]">
              <p className="flex items-center justify-center bg-[#51E2C2] font-bold rounded-3xl text-white text-9xl h-full">
                2
              </p>
            </div>
          </div>
          <div className="h-[314px] rounded-3xl bg-slate-200 ">
            <div className="h-full mx-auto w-[90%] grid place-content-center">
              <h1 className=" text-[24px] font-bold gray-600">
                Pick a Template
              </h1>
              <p className="text-[22px] from-neutral-200">
                Don't sabotage your job search before it has even <br />
                begun. Choose from our ATS-friendly, hand- <br />
                crafted resume templates
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card