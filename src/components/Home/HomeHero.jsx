import React, { useContext } from "react";
import { GlobalContext } from "../../context";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { RxDotFilled } from "react-icons/rx";
// import NewPost from "./NewPost"
import { Link } from "react-router-dom";

const ImageDiv = () => {
  
    const { imageIndex, setImageIndex } = useContext(GlobalContext);

    const slides = [
      { url: "./images/bg.webp" },
      {
        url: "https://img.freepik.com/free-vector/combination-circuit-head-shape-artificial-intelligence-moral-electronic-world-illustration_456031-123.jpg?size=626&ext=jpg&ga=GA1.1.658927123.1679747164&semt=sph",
      },
      { url: "./images/tech.webp" },
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
    <div className="group">
      <div className="w-full mt-[80px] relative">
        <img
          className="w-full h-[420px] md:h-[450px] brightness-50 duration-500"
          src={slides[imageIndex].url}
          alt=""
        />

        <div className="absolute top-[50%] - text-center flex flex-col justify-center items-center translate-y-[-50%]">
          <h3 className=" text-white font-bold text-4xl md:text-6xl">
            UNDERSTANDING TECHNOLOGY TODAY
          </h3>
          <p className="hidden md:block text-white md:text-2xl md:px-60 md:pt-10 ">
            Given all the time we spend with our gadgets and apps, it’s
            essential to understand the principles that determine how tech
            affects our lives.
          </p>

          <button className="bg-white rounded-full py-2 px-8 text-[#023047] mt-8 font-bold hover:bg-[#ffa500] hover:text-white">
            <Link to="https://www.technewsworld.com/section/tech-blog">
              Get Started
            </Link>
          </button>
        </div>
      </div>

      {/* left arrow */}
      <div
        onClick={() => prevSlide()}
        className="hidden group-hover:block absolute top-[45%] md:top-[45%] -translate-x-0 translate-y-[-50%] left-5 text-white cursor-pointer"
      >
        <MdArrowBackIosNew size={30} />
      </div>

      {/* right arrow */}
      <div
        onClick={() => nextSlide()}
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

      {/* ADD NEW POST */}
      {/* <NewPost /> */}
    </div>
  )
}

export default ImageDiv
