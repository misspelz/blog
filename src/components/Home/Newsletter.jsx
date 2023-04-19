import React from "react";
import { IoMdCheckmarkCircle } from "react-icons/io";

const Newsletter = () => {
  return (
    <div className="text-[#023047] h-[400px] flex md:flex-row justify-between items-center p-10  bg-[#023047]">
      <div className="w-[100%] md:ml-10">
        <h2 className="text-white text-2xl md:text-4xl mb-4 font-bold italic">
          GET THE LATEST <span className="text-[#ffa500]">INFO</span>
        </h2>

        <div className="leading-[30px] mb-8 mt-4">
          <div className="flex items-center font-semibold">
            <span className="text-white">
              <IoMdCheckmarkCircle size={20} />{" "}
            </span>
            <span className="text-white ml-4">
              Weekly industry news and updates
            </span>
          </div>
          <div className="flex items-center">
            <span className="text-white">
              <IoMdCheckmarkCircle size={20} />{" "}
            </span>
            <span className="text-white ml-4">
              Stay Informed with Exclusive Content
            </span>
          </div>
        </div>
        <div className="text-white">
          <div className="items-center">
            <input
              type="text"
              placeholder="   Email address"
              className="w-[100%] md:w-[85%] rounded border-0 py-2"
            />
            <button className="bg-[#023047] w-[100%] md:w-[85%] text-white border rounded px-4 font-semibold hover:bg-[#ffa500] hover:text-white hover:border-[#023047] py-2 mt-4 rounded">
              Subscribe
            </button>
            <h3 className="text-white text-[18px] md:text-xl mt-4 font-semibold">
              Stay up-to-date with new technologies emerging every day.
            </h3>
          </div>
        </div>
      </div>

      <div className="md:w-[100%]  hidden md:flex md:justify-center ">
        <img
          className="md:w-[50%]"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0A3KvckYJ0qCCLvAHKU8M2PghbJZFJeZ4Lg&usqp=CAU"
          alt=""
        />
      </div>
    </div>
  );
};

export default Newsletter;
