import React, { useContext } from "react";
import { GlobalContext } from "../../context";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { RxDotFilled } from "react-icons/rx";
// import { Link } from "react-router-dom";

const StoreHero = () => {
  
    const { imageIndex, setImageIndex } = useContext(GlobalContext);

    const slides = [
      { url: "https://img.freepik.com/free-photo/book-library-with-open-textbook_1150-5920.jpg?size=626&ext=jpg&ga=GA1.2.658927123.1679747164&semt=sph" },
      {
        url: "https://img.freepik.com/free-photo/top-view-books-arrangement_23-2148882754.jpg?size=626&ext=jpg&ga=GA1.2.658927123.1679747164&semt=sph",
      },
      { url: "https://img.freepik.com/free-photo/library-with-books_1063-98.jpg?size=626&ext=jpg&ga=GA1.1.658927123.1679747164&semt=sph" },
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
          f
          alt=""
        />

        <div className="absolute top-[50%] - text-center flex flex-col justify-center items-center translate-y-[-50%]">
          <h3 className=" text-white font-bold text-4xl md:text-6xl px-20 lg:px-[260px]">
            Access Transformative Books
          </h3>
          
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

      {/* ADD NEW BOOK */}
      
    </div>
  )
}

export default StoreHero
