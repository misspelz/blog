import React, { useContext, useState } from "react";
import { FaWindowClose } from "react-icons/fa";
import { GlobalContext } from "../../context";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";

const CheckoutForm = () => {
  const { setCheckOutForm, totalPrice } = useContext(GlobalContext);

  const [state, setState] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const { name, email, phone } = state;

  // checkout onchange handler
  const handleChange = (event) => {
    const { name, value } = event.target;

    setState({
      ...state,
      [name]: value,
    });
  };

  console.log(state);

  //   check out submit button
  const handlePostSubmit = (e) => {
    e.preventDefault();
  };

  // buy now button
  const handleBuyNowButton = () => {
    handleFlutterPayment({
      callback: (response) => {
        console.log(response);
        closePaymentModal(); // this will close the modal programmatically
      },
      onClose: () => {},
    });

    setCheckOutForm(false);
  };

  const config = {
    public_key: "FLWPUBK_TEST-ca524f8fa19657a9003450f8936140b0-X",
    tx_ref: Date.now(),
    amount: totalPrice,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: email,
      phone_number: phone,
      name: name,
    },
    customizations: {
      title: "Payment for Books",
      description: "Payment for Items in Cart",
      logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  return (
    <>
      <div className="text-white ">
        <form
          onSubmit={handlePostSubmit}
          className="flex flex-col bg-white h-[350px] w-[400px] rounded-md leading-8 p-4"
        >
          <div className="flex justify-between">
            <span className="text-[#023047] font-bold text-xl mb-4">
              Fill the Details below
            </span>
            <span
              onClick={() => setCheckOutForm(false)}
              className="text-[#023047] font-bold text-xl cursor-pointer mt-[6px] hover:text-orange-500"
            >
              <FaWindowClose />
            </span>
          </div>

          <label className="text-[#023047]">Full Name</label>
          <input
            className="border rounded px-4 text-[#023047]"
            type="text"
            placeholder="Enter your full name"
            name="name"
            value={name}
            onChange={handleChange}
          />

          <label className="text-[#023047]">Email Address</label>
          <input
            className="border rounded px-4 text-[#023047]"
            type="text"
            placeholder="Enter your email address"
            name="email"
            value={email}
            onChange={handleChange}
          />

          <label className="text-[#023047]">Phone Number</label>
          <input
            className="border rounded px-4 text-[#023047]"
            type="text"
            placeholder="Enter your phone number"
            name="phone"
            value={phone}
            onChange={handleChange}
          />

          <button
            className="text-white bg-[#023047] rounded mt-8"
            onClick={handleBuyNowButton}
          >
            BUY NOW
          </button>
        </form>
      </div>
    </>
  );
};

export default CheckoutForm;
