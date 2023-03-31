import React, { useContext, useState } from "react";
import { FaWindowClose } from "react-icons/fa";
import { GlobalContext } from "../../context";
import { v4 as uuidv4 } from "uuid";

const BookForm = () => {
  
  const {setBookModal} = useContext(GlobalContext)

  const [state, setState] = useState({
    image: "",
    title: "",
    writer: "",
    price: "",
  });

  const { image, title, writer, price } = state;

  // new book onchange handler
  const handleBookChange = (event) => {
    const { name, value } = event.target;

    setState({
      ...state,
      [name]: value,
    });
  };

  console.log(state);

  // new post submit button
  const handleBookSubmit = (e) => {
    e.preventDefault();

    console.log("Submitted");

    const bookToLocal = localStorage.getItem("books")
      ? JSON.parse(localStorage.getItem("books"))
      : [];

    const bookData = {id:uuidv4(), image, title, writer, price}

    const toBookLocalCopy = [bookData, ...bookToLocal]

    localStorage.setItem("books", JSON.stringify(toBookLocalCopy))

    setBookModal(false)


  };

  return (
    <div className="text-white">
      <form
        onSubmit={handleBookSubmit}
        className="flex flex-col bg-white h-[400px] w-[400px] rounded-md leading-8 p-4"
      >
        <div className="flex justify-between">
          <span className="text-[#023047] font-bold text-xl mb-4">
            Add New Book
          </span>
          <span
            onClick={() => setBookModal(false)}
            className="text-[#023047] font-bold text-xl cursor-pointer mt-[6px] hover:text-orange-500"
          >
            <FaWindowClose />
          </span>
        </div>

        <label className="text-[#023047]">Image</label>
        <input
          className="border rounded px-4 text-[#023047]"
          type="text"
          placeholder="Enter post image path/link"
          name="image"
          value={image}
          onChange={handleBookChange}
        />

        <label className="text-[#023047]">Title</label>
        <input
          className="border rounded px-4 text-[#023047]"
          type="text"
          placeholder="Enter post title"
          name="title"
          value={title}
          onChange={handleBookChange}
        />

        <label className="text-[#023047]">Writer</label>
        <input
          className="border rounded px-4 text-[#023047]"
          type="text"
          placeholder="Enter writer's name"
          name="writer"
          value={writer}
          onChange={handleBookChange}
        />

        <label className="text-[#023047]">Price</label>
        <input
          className="border rounded px-4 text-[#023047]"
          type="text"
          placeholder="Enter selling price"
          name="price"
          value={price}
          onChange={handleBookChange}
        /> 

        <button className="text-white rounded mt-4 font-semibold bg-[#023047] hover:bg-orange-500">
          Submit
        </button>
      </form>
    </div>
  );
};

export default BookForm;
