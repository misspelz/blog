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
  
  //home page 
  useEffect(() => {
    getPostFromStorage();
  }, [openModal]);

  const getPostFromStorage = () => {
    const getPost = JSON.parse(localStorage.getItem("posts"));
    const slicedPosts = getPost;
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

  // post card
  const handleDelete = (item) => {
    const filteredData = fromLocal.filter((single) => single.id !== item.id);
    
    const decision = window.confirm("Do you want to delete this post?")

    if(decision){
      localStorage.setItem("posts", JSON.stringify(filteredData));
    }

    getPostFromStorage();
  };

  // const [cartItems, setCartItems] = useState([])

  // navbar function
  const getCartLocalBooks = ()=>{
    const getCartBooks = JSON.parse(localStorage.getItem("cartbooks"))
    setLocalCartBooks(getCartBooks)
  }



  const handleAddToCart = (item) => {
    const { id, image, title, writer, price } = item;

    const data = { id, image, title, writer, price, qty:1 };
// console.log(data,'chima1111')
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
    setUpdateModal
  };

  return (
    <GlobalContext.Provider value={store}>{children}</GlobalContext.Provider>
  );
};
export default GlobalContextProvider;
