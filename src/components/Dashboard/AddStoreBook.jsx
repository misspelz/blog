import React, {useContext} from "react";
import { GlobalContext } from "../../context";
import Modal from "../Modal";
import BookForm from "../Store/BookForm";
import BookCard from "../Store/BookCard";
// import { GiShoppingCart } from "react-icons/gi";
// import { Link } from "react-router-dom";

const AddBook = () => {
  const { bookModal, setBookModal } = useContext(GlobalContext);

//   useEffect(() => {
    // getCartLocalBooks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

  return (
    <>
      <div className="flex justify-center items-center mt-6">
        <button
          onClick={() => setBookModal(true)}
          className="bg-[#023047] py-2 px-4 rounded t mb-4 text-white font-semibold hover:bg-[#ffa500]"
        >
          Click here to Add a New Book
        </button>
      </div>

      {bookModal && (
        <Modal>
          <BookForm />
        </Modal>
      )}

      <BookCard />
    </>
  );
};

export default AddBook;
