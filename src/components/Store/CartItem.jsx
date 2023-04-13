import React, { useContext } from "react";
import { GlobalContext } from "../../context";
import { CiSquareMinus } from "react-icons/ci";
import { CiSquarePlus } from "react-icons/ci";
import { GrFormClose } from "react-icons/gr";
import CheckoutForm from "./CheckoutForm";
import Modal from "../Modal";
import { Link } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";

const CartItem = () => {
  const {
    localCartBooks,
    getCartLocalBooks,
    setLocalCartBooks,
    checkoutform,
    setCheckOutForm,
    totalPrice,
  } = useContext(GlobalContext);

  // add button
  const addButton = (data) => {
    const myData = JSON.parse(localStorage.getItem("cartbooks"));

    const singleItem = myData.find((items) => items.id === data.id);
    singleItem.qty = singleItem.qty + 1;

    localStorage.setItem("cartbooks", JSON.stringify(myData));

    getCartLocalBooks();
  };

  // remove button
  const removeButton = (data) => {
    const myData = JSON.parse(localStorage.getItem("cartbooks"));

    const singleItem = myData.find((items) => items.id === data.id);
    singleItem.qty = singleItem.qty - 1;

    if (singleItem.qty === 0) {
      return (singleItem.qty = 1);
    }

    localStorage.setItem("cartbooks", JSON.stringify(myData));

    getCartLocalBooks();
  };

  // delete item in cart
  const handleDelete = (item) => {
    const myData = JSON.parse(localStorage.getItem("cartbooks"));

    const filteredData = myData.filter((data) => data.id !== item.id);

    const decision = window.confirm(
      "Do you want to remove this item from Cart?"
    );

    if (decision) {
      localStorage.setItem("cartbooks", JSON.stringify(filteredData));

      getCartLocalBooks();
    }
  };

  // Total price is in context

  // Check Out
  const handleCheckOut = () => {
    setCheckOutForm(true);
  };

  // Clear Cart
  const handleClearCart = () => {
    const decision = window.confirm("Do you want to clear your cart?");
    if (decision) {
      setLocalCartBooks([]);
    }
    // alert("Hello")
  };

  return (
    <>
      {checkoutform && (
        <Modal>
          <CheckoutForm />
        </Modal>
      )}
      <div className="flex flex-col justify-center items-center">
        <div>
          <h3
            className="text-black mt-24 
         font-semibold text-2xl"
          >
            CART ITEMS
          </h3>
          <hr />
        </div>
        {localCartBooks && localCartBooks.length === 0 && (
          <div>
            <h3
              className="text-black mt-10 
         font-semibold text-md"
            >
              No Item in Cart
            </h3>
          </div>
        )}
        <div>
          {localCartBooks && localCartBooks.length === 0 && (
            <>
              <Player
                autoplay
                loop
                src="https://assets6.lottiefiles.com/packages/lf20_kz2ylhyq.json"
                style={{ height: "300px", width: "300px" }}
              ></Player>
            </>
          )}
        </div>
        <div className="mt-6 flex">
          <Link to="/store">
            <div>
              <h3 className="text-black mx-10 p-4 rounded font-semibold text-white bg-[#023047]">
                BACK TO STORE
              </h3>
            </div>
          </Link>
          <div>
            {localCartBooks && localCartBooks.length >= 1 && (
              <h3
                onClick={handleClearCart}
                className="text-black bg-red-500 mx-10 p-4 rounded font-semibold text-white cursor-pointer"
              >
                CLEAR CART
              </h3>
            )}
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-10">
          {localCartBooks &&
            localCartBooks.map((item) => {
              return (
                <div key={item.id} className="w-[400px] flex my-4 border p-2 rounded-md">
                  <div className="w-[100%]">
                    <img
                      className="w-[200px] h-[200px]"
                      src={item.image}
                      alt={item.title}
                    />
                  </div>

                  <div className="flex flex-col mr-[10px] w-[100%]">
                    <h3 className=" font-bold pl-2">{item.title}</h3>
                    <h2 className="my-4 pl-2">${item.price}</h2>

                    <div className="flex pl-2">
                      <button
                        className="text-xl"
                        onClick={() => removeButton(item)}
                      >
                        <CiSquareMinus />
                      </button>
                      <span className="w-[20%] text-black flex justify-center">
                        {item.qty}
                      </span>
                      <button
                        className="text-xl"
                        onClick={() => addButton(item)}
                      >
                        <CiSquarePlus />
                      </button>
                    </div>

                    <h2 className="mt-4 pl-2 font-bold">
                      SubTotal: ${(item.price * item.qty).toFixed(2)}
                    </h2>
                  </div>
                  <div onClick={() => handleDelete(item)}>
                    <GrFormClose size={20} />
                  </div>
                </div>
              );
            })}
        </div>

        {localCartBooks && localCartBooks >= 1 && (
          <div className="p-4 border w-[40%] md:w-[30%] rounded flex justify-center font-bold text-[18px] mdtext-2xl my-4">
            TOTAL: ${totalPrice.toFixed(2)}
          </div>
        )}

        {localCartBooks && localCartBooks.length >= 1 && (
          <div
            onClick={handleCheckOut}
            className="p-4 border w-[40%] md:w-[30%] rounded flex justify-center font-bold text-[18px] mdtext-2xl my-4 cursor-pointer bg-[#023047] text-white hover:bg-[#ffa500]"
          >
            CHECKOUT
          </div>
        )}
      </div>
    </>
  );
};

export default CartItem;
