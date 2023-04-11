import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../context";
// import Modal from "../Modal";
// import BookForm from "./BookForm";
import { GiShoppingCart } from "react-icons/gi";
import { Link } from "react-router-dom";

const AddBook = () => {
  const { localCartBooks, getCartLocalBooks } =
    useContext(GlobalContext);

  useEffect(() => {
    getCartLocalBooks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="flex justify-center items-center mt-6">
        {/* <button
          onClick={() => setBookModal(true)}
          className="bg-[#023047] py-2 px-4 rounded t mb-4 text-white font-semibold hover:bg-[#ffa500]"
        >
          Add New Book
        </button> */}

        <div className="flex justify-center items-center md:mb-10">
          <span className="text-xl font-semibold">Your Cart</span>
          
          <Link to="/cart">
            <span className="relative ">
              <GiShoppingCart size={50} />
            </span>
          </Link>
          <span className="absolute top-[544px] md:top-[580px] bg-[#023047] h-10 w-10 flex items-center justify-center text-white rounded-full font-bold ml-28 ">
            {/* absolute top-[570px] right-[150px] bg-[#023047] h-6 w-6 text-center text-white rounded-full font-bold */}
            
            {localCartBooks && localCartBooks.length}
          </span>
          
        </div>
        <hr />
      </div>

      {/* {bookModal && (
        <Modal>
          <BookForm />
        </Modal>
      )} */}
    </>
  );
};

export default AddBook;
