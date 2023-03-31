import React from "react";
import PostCard from "./PostCard";
import HomeHero from "./HomeHero";
import SideBar from "../Layout/SideBar";

const Homepage = () => {
  return (
    <div className="bg-[#f8f9fa] group">
      <div className="w-full">
        <HomeHero />
      </div>

      <div className="mx-6 ">
        <h3 className="text-xl md:text-2xl font-bold  text-[#023047] py-2">
          Recent Posts
        </h3>
        <div className=" bg-[#ffa500] w-full h-[2px]"></div>
      </div>

      {/* NEW POST FORM */}
      <div className="w-full flex">
        <PostCard />
        <SideBar />
      </div>
    </div>
  );
};

export default Homepage;
