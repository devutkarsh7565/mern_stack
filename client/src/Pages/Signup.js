import React from "react";
import { BsFillPeopleFill } from "react-icons/bs";
const Signup = () => {
  return (
    <div className="flex justify-center items-center w-full min-h-screen bg-[#EEF1FF]">
      <div className="flex flex-col justify-center items-start p-12 gap-8 w-[750px] h-[600px]  bg-[#E8F9FD] rounded-lg drop-shadow-xl">
        <h1 className="text-2xl  pl-4 text-[#6d6868]">Signup Now</h1>
        <div className="flex justify-between items-center">
          <div className="flex flex-col justify-start items-start gap-5 ">
            <div className="flex justify-center gap-3 items-center bg-[#E8F9FD] py-2 px-3 border-b border-black">
              <BsFillPeopleFill />
              <input
                className="bg-[#E8F9FD] outline-none "
                type="text"
                placeholder="Name"
              />
            </div>
            <div className="flex justify-center gap-3 items-center bg-[#E8F9FD] py-2 px-3 border-b border-black">
              <BsFillPeopleFill />
              <input
                className="bg-[#E8F9FD] outline-none "
                type="email"
                placeholder="Email"
              />
            </div>
            <div className="flex justify-center gap-3 items-center bg-[#E8F9FD] py-2 px-3 border-b border-black">
              <BsFillPeopleFill />
              <input
                className="bg-[#E8F9FD] outline-none "
                type="text"
                placeholder="Phone NUmber"
              />
            </div>
            <div className="flex justify-center gap-3 items-center bg-[#E8F9FD] py-2 px-3 border-b border-black">
              <BsFillPeopleFill />
              <input
                className="bg-[#E8F9FD] outline-none "
                type="text"
                placeholder="profession"
              />
            </div>
            <div className="flex justify-center gap-3 items-center bg-[#E8F9FD] py-2 px-3 border-b border-black">
              <BsFillPeopleFill />
              <input
                className="bg-[#E8F9FD] outline-none "
                type="password"
                placeholder="Password"
              />
            </div>
            <div className="flex justify-center gap-3 items-center bg-[#E8F9FD] py-2 px-3 border-b border-black">
              <BsFillPeopleFill />
              <input
                className="bg-[#E8F9FD] outline-none "
                type="email"
                placeholder="Email"
              />
            </div>
          </div>
          <img src="" alt="" />
        </div>
        <button className="py-2 px-5 bg-blue-500 text-white text-lg font-normal rounded-md mt-3 ">
          Register
        </button>
      </div>
    </div>
  );
};

export default Signup;
