import React, { useContext } from "react";
import { GlobalContext } from "../../context";
import { VscSearch } from "react-icons/vsc";
import { Link } from "react-router-dom";

const SideBar = () => {
  const { fromLocalForBlog } = useContext(GlobalContext);

  return (
    <div className="flex flex-col w-[30%] hidden md:block hidden md:block  bg-white p-4 px-6">
      <div className="flex flex-col mb-8">
        <span className="text-xl font-semibold text-[#023047]">Search</span>
        <div className="border flex justify-between items-center mt-4 px-2 pr-4 rounded-md">
          <input
            placeholder="type and hit enter..."
            type="text"
            className=" p-[10px]"
          />
          <VscSearch size={18} />
        </div>
      </div>
      <hr />

      <div className="mt-8 font-semibold text-xl text-[#023047]">
        Other Posts{" "}
      </div>

      <div className="mb-8">
        {fromLocalForBlog &&
          fromLocalForBlog.map((item) => {
            return (
              <div key={item.id}>
                <Link to={`/blog/${item.id}`}>
                  <h3 className="mt-4 hover:text-[#ffa500] cursor-pointer">
                    {item.title}
                  </h3>
                </Link>
              </div>
            );
          })}
      </div>

      <hr />
      <div className="mt-8 font-semibold text-xl text-[#023047]">Archives </div>

      <div className="mt-6 flex flex-col leading-8 cursor-pointer ">
        <span className="text-[#023047]">January 2022</span>
        <span className="text-[#023047]">February 2022</span>
        <span className="text-[#023047]">March 2022</span>
        <span className="text-[#023047]">April 2022</span>
        <span className="text-[#023047]">May 2022</span>
        <span className="text-[#023047]">June 2022</span>
        <span className="text-[#023047]">July 2022</span>
        <span className="text-[#023047]">August 2022</span>
        <span className="text-[#023047]">September 2022</span>
        <span className="text-[#023047]">October 2022</span>
        <span className="text-[#023047]">November 2022</span>
        <span className="text-[#023047]">December 2022</span>
      </div>
    </div>
  );
};

export default SideBar;
