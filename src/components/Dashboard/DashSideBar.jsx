import React from "react";
import { Link } from "react-router-dom";

const DashSideBar = () => {
  return (
    <div className="flex flex-col justify-between fixed top-0 left-0 w-[200px] h-screen bg-[#023047] text-white">
      <ul className="ml-10 mt-8 leading-10">
        {/* <li className="hover:border hover:px-2 hover:w-[60%] rounded-md font-bold">
          <Link to="/dashboard/home">Dashboard</Link>
        </li> */}
        <li className="border px-2 w-[70%] rounded-md font-bold hover:bg-white hover:text-[#023047]">
          <Link to="/dashboard/newpost">NEW POST</Link>
        </li>
        <li className="border px-2 w-[70%] rounded-md font-bold hover:bg-white hover:text-[#023047] mt-10">
          <Link to="/dashboard/newbook">NEW BOOK</Link>
        </li>
        
        
      </ul>

      <button className="border py-2 px-[4px] mb-8 w-[60%] ml-10 hover:bg-white hover:text-[#023047] font-semibold hover:font-bold rounded-md">
        <Link to="/">Back to Home</Link>
      </button>
    </div>
  );
};

export default DashSideBar;
