import React, { useContext } from "react";
import { GlobalContext } from "../../context";
import { CiSquareMinus } from 'react-icons/ci';
import { CiSquarePlus } from 'react-icons/ci';
import { GrFormClose } from 'react-icons/gr';

const CartItem = () => {
  const { localCartBooks, getCartLocalBooks } = useContext(GlobalContext);

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
  const handleDelete = (item)=>{
    const myData = JSON.parse(localStorage.getItem("cartbooks"));

    const filteredData = myData.filter((data)=> data.id !== item.id)

    localStorage.setItem("cartbooks", JSON.stringify(filteredData));

    getCartLocalBooks()
  }

  // Total
  const totalPrice = localCartBooks.reduce((price, item)=> price + item.qty*item.price, 0)
  

  return (
    <div className="flex flex-col justify-center items-center">
    <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-10">
      {localCartBooks &&
        localCartBooks.map((item) => {
          return (
            <div className="w-[400px] flex my-4 border p-2 rounded-md">
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
              <div onClick={()=>handleDelete(item)}>
                <GrFormClose size={20} />
              </div>
            </div>
          );
        })}
    </div>
    <div className="p-4 border w-[40%] md:w-[30%] rounded flex justify-center font-bold text-[18px] mdtext-2xl my-4">TOTAL: ${(totalPrice).toFixed(2)}</div>
    </div>
  );
};

export default CartItem;
