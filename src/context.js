import React, { createContext, useState, useEffect } from "react";

export const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [fromLocal, setFromLocal] = useState([]);
  const [fromLocalForBlog, setFromLocalForBlog] = useState([]);
  const [fromLocalForBook, setFromLocalForBook] = useState([]);
  const [imageIndex, setImageIndex] = useState(0);
  const [bookModal, setBookModal] = useState(false)
  const [localCartBooks, setLocalCartBooks] = useState([]);
  const [updateModal, setUpdateModal] = useState(false);
  const [checkoutform, setCheckOutForm] = useState(false)
  
  //home page 
  useEffect(() => {
    getPostFromStorage();
  }, [openModal]);

  const getPostFromStorage = () => {
    const getPost = JSON.parse(localStorage.getItem("posts"));
    const slicedPosts = getPost && getPost.slice(0,5)

    setFromLocal(slicedPosts);
  };
 
  //blog page 
  useEffect(() => {
    getPostFromStorageForBlog();
  }, [openModal]);

  const getPostFromStorageForBlog = () => {
    const getBlogPost = JSON.parse(localStorage.getItem("posts"));
    setFromLocalForBlog(getBlogPost);
  };

  //store page 
  useEffect(() => {
    getBookFromStorageForStore();
  }, [bookModal]);

  const getBookFromStorageForStore = () => {
    const getBooks = JSON.parse(localStorage.getItem("books"));
    setFromLocalForBook(getBooks);
  };

  // post delete function
  const handleDelete = (item) => {
    const filteredData = fromLocal.filter((single) => single.id !== item.id);
    
    const decision = window.confirm("Do you want to delete this post?")

    if(decision){
      localStorage.setItem("posts", JSON.stringify(filteredData));
    }

    getPostFromStorageForBlog();
  };


  // navbar function
  const getCartLocalBooks = ()=>{
    const getCartBooks = JSON.parse(localStorage.getItem("cartbooks"))
    setLocalCartBooks(getCartBooks)
  }


  // add to cart in store page
  const handleAddToCart = (item) => {
    const { id, image, title, writer, price } = item;

    const data = { id, image, title, writer, price, qty:1 };

    const localBookCartItems = localStorage.getItem("cartbooks")
      ? JSON.parse(localStorage.getItem("cartbooks"))
      : [];

    const itemExist = localBookCartItems.find((book) => book.id === id);

    if (itemExist) {
      alert("Item already in Cart");
    } else {
      const localBookCartItemsCopy = [...localBookCartItems, data];

      localStorage.setItem("cartbooks", JSON.stringify(localBookCartItemsCopy));
    }

    getCartLocalBooks()
  };

  const totalPrice = localCartBooks && localCartBooks.reduce(
    (price, item) => price + item.qty * item.price,
    0
  );

  // post edit function
  const [itemId, setitemId] = useState(null)

  const editFunc = (id)=>{
    setUpdateModal(true)
    setitemId(id)
    getPostFromStorageForBlog()
  }

  const store = {
    openModal,
    setOpenModal,
    fromLocal,
    setFromLocal,
    fromLocalForBlog,
    setFromLocalForBlog,
    imageIndex,
    setImageIndex,
    handleDelete,
    getPostFromStorage,
    getPostFromStorageForBlog,
    bookModal,
    setBookModal,
    fromLocalForBook,
    setFromLocalForBook,
    localCartBooks,
    setLocalCartBooks,
    handleAddToCart,
    getCartLocalBooks,
    loading,
    setLoading,
    updateModal,
    setUpdateModal,
    checkoutform,
    setCheckOutForm,
    totalPrice,
     editFunc,
     itemId
  };

  return (
    <GlobalContext.Provider value={store}>{children}</GlobalContext.Provider>
  );
};
export default GlobalContextProvider;
