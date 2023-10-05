import React from 'react'

const Card = () => {
  return (
    <div className="block max-w-screen-xl items-center mt-40  mx-auto w-[100%]">
      <h1 className="mt-12 text-2xl text-center lg:text-3xl lg:text-left font-mono text-gray-600 font-semibold">
        Our Users Are Being Hired at the <br />
        World's Leading Companies.
      </h1>
      <div className="grid grid-rows-1 md:grid-cols-2 gap-4">
        <div className='grid grid-rows-2'>
          <div className=" bg-slate-600 rounded-3xl justify-items-end">
            <div className="w-[160px] h-[160px] float-right">
              <p className="flex items-center justify-center bg-[#51E2C2] font-bold rounded-3xl text-white text-9xl h-full">
                1
              </p>
            </div>
          </div>
          <div>
            ezasdfsd
          </div>
        </div>

        <div className=" bg-orange-600">sdfsd</div>
      </div>
    </div>
  );
}

export default Card