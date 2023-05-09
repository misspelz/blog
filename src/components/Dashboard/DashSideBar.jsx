import React from "react";
import { Link } from "react-router-dom";

const DashSideBar = () => {
  return (
    <div className="flex flex-col justify-between fixed top-0 left-0 w-[100px] md:w-[200px] h-screen bg-[#023047] text-white">
      <ul className="mx-2 md:ml-10 mt-8 leading-10">
        <li className="text-[14px] text-center border md:px-2  md:w-[70%] rounded-md font-bold hover:bg-white hover:text-[#023047]">
          <Link to="/dashboard/newpost">NEW POST</Link>
        </li>
        <li className="text-[14px] text-center border md:px-2 md:w-[70%] rounded-md font-bold hover:bg-white hover:text-[#023047] mt-10">
          <Link to="/dashboard/newbook">NEW BOOK</Link>
        </li>
      </ul>

      <button className="py-2 mx-2 md:ml-8 text-[14px] text-center border md:py-2 mb-8 md:w-[70%] hover:bg-white hover:text-[#023047] font-semibold hover:font-bold rounded-md">
        <Link to="/">HOME</Link>
      </button>
    </div>
  );
};

export default DashSideBar;
