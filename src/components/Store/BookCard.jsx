import React, { useContext } from "react";
import { GlobalContext } from "../../context";

const BookCard = () => {
  const { fromLocalForBook, handleAddToCart } = useContext(GlobalContext);
  console.log(fromLocalForBook);

  // getPostFromStorage and useEffect is in context

  // delete button is in context

  // Add To Cart Button is in context

  return (
    <div className="text-black grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 w-[100%] md:max-h-[1200px] md:overflow-y-scroll w-[100%]">
      {fromLocalForBook &&
        fromLocalForBook.map((item) => {
          return (
            <div
              key={item.id}
              className="flex flex-col justify-between my-6 mx-6 p-8 md:p-6 rounded-md bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] h-[820px] md:h-[600px]"
            >
              <div>
                <img
                  src={item.image}
                  alt={item.title}
                  className="mb-2 w-full"
                />
                <h3 className="mb-2 font-bold text-xl text-[#023047] hover:text-[#ffa500] cursor-pointer">
                  {item.title}
                </h3>
                <p className="text-[12px] font-bold text-[#023047]">
                  written by: {item.writer}
                </p>
                <p className="text-[14px] font-bold text-[#023047] mt-4">
                  $ {item.price}
                </p>
              </div>

              <div className="flex flex-row justify-between md:mt-[18px] h-[50px] w-full">
                <button
                  onClick={() => handleAddToCart(item)}
                  className="w-full bg-[#023047] rounded py-2 text-white font-semibold"
                >
                  Add To Cart
                </button>
              </div>
            </div>
          );
        })}

        
    </div>
  );
};

export default BookCard;
