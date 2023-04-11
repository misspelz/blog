import React, { useContext } from "react";
import { GlobalContext } from "../../context";
import { RxDotFilled } from "react-icons/rx";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
// import { FaEdit } from "react-icons/fa";
// import { MdDeleteForever } from "react-icons/md";
// import { FaShareAlt } from "react-icons/fa";
import SideBar from "../Layout/SideBar";
import Modal from "../Modal";
import UpdateForm from "../Home/UpdateForm";
// import { RWebShare } from "react-web-share";
// import { Link } from "react-router-dom";
import BlogCard from "./BlogCard";
// import ScrollToTop from "react-scroll-to-top";

const Blogpage = () => {
  // image slides
  const {
    // handleDelete,
    // fromLocalForBlog,
    imageIndex,
    setImageIndex,
    // editFunc,
    itemId,
    updateModal,
  } = useContext(GlobalContext);
  // console.log(fromLocalForBlog);

  const slides = [
    {
      url: "https://img.freepik.com/free-photo/toy-bricks-table-with-word-blog_144627-47465.jpg?size=626&ext=jpg&ga=GA1.1.658927123.1679747164&semt=sph",
    },
    {
      url: "https://img.freepik.com/free-photo/online-blog_53876-123696.jpg?size=626&ext=jpg&ga=GA1.2.658927123.1679747164&semt=sph",
    },
    {
      url: "https://img.freepik.com/free-photo/office-table-with-cup-coffee-keyboard-notepad_1220-4617.jpg?size=626&ext=jpg&ga=GA1.2.658927123.1679747164&semt=sph",
    },
  ];

  const prevSlide = () => {
    const isFirstSlide = imageIndex === 0;
    const isNextSlide = isFirstSlide ? slides.length - 1 : imageIndex - 1;
    setImageIndex(isNextSlide);
  };

  const nextSlide = () => {
    const isLastSlide = imageIndex === slides.length - 1;
    const isNextSlide = isLastSlide ? 0 : imageIndex + 1;
    setImageIndex(isNextSlide);
  };

  const goToSlide = (i) => {
    setImageIndex(i);
  };


  return (
    <>
      {updateModal && (
        <Modal>
          <UpdateForm props={{ id: itemId }} />
        </Modal>
      )}

      <div className="bg-[#f8f9fa] group">
        <div className="w-full mt-[80px] relative">
          <img
            className="w-full h-[420px] md:h-[450px] brightness-50 duration-500"
            src={slides[imageIndex].url}
            f
            alt=""
          />

          <div className="absolute top-[50%] - text-center flex flex-col justify-center items-center translate-y-[-50%]">
            <p className="text-white text-4xl md:text-6xl md:text-2xl md:px-40 md:pt-10 px-20 font-bold ">
              Discover More About Technology Today
            </p>
          </div>
        </div>

        {/* left arrow */}
        <div
          onClick={() => prevSlide}
          className="hidden group-hover:block absolute top-[45%] md:top-[45%] -translate-x-0 translate-y-[-50%] left-5 text-white cursor-pointer"
        >
          <MdArrowBackIosNew size={30} />
        </div>

        {/* right arrow */}
        <div
          onClick={() => nextSlide}
          className="hidden group-hover:block absolute top-[45%] md:top-[45%] -translate-x-0 translate-y-[-50%] right-5 text-white cursor-pointer"
        >
          <MdArrowForwardIos size={30} />
        </div>

        <div className="flex top-4 justify-center py-2">
          {slides.map((slide, i) => (
            <div
              key={i}
              onClick={() => goToSlide(i)}
              className="text-2xl cursor-pointer text-[#023047]"
            >
              <RxDotFilled />
            </div>
          ))}
        </div>

        <div className="w-full flex">
          <BlogCard />

          <SideBar />
        </div>
      </div>
    </>
  );
};

export default Blogpage;
