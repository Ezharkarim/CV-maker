import React from 'react'

const Card = () => {
  return (
    <div className="block max-w-screen-xl items-center  mx-auto w-[100%]">
      <h1 className="mt-12 text-4xl font-mono text-gray-600 font-semibold">
        Our Users Are Being Hired at the <br />
        World's Leading Companies.
      </h1>

      <div className="flex flex-wrap w-full h-96 bg-slate-400">
        <div className="w-[50%] basic-1/2 bg-red-400 ">
          <div className=" bg-slate-100  h-40 m-4">
            <div className="rounded-xl float-right	w-40 h-40 bg-green-600">
              <p className=" text-white">1</p>
            </div>
          </div>
          <div className=" bg-slate-400 w-full h-full"></div>
        </div>
        <div className="w-[50%] basic-1/2 bg-slate-500">werwerewr</div>
      </div>
    </div>
  );
}

export default Card