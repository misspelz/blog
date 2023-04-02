import React, { useState, useContext,useEffect } from "react";
import { GlobalContext } from "../../context";
import { Link } from "react-router-dom";
import { DiTechcrunch } from "react-icons/di";
import { FaHamburger } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { GiShoppingCart } from "react-icons/gi";


const NavBar = () => {
  const { localCartBooks, getCartLocalBooks } = useContext(GlobalContext);
  console.log(localCartBooks)
  const [open, setOpen] = useState(false);

  const MenuBar = () => {
    setOpen((prev)=> !prev);
  };

  useEffect(() => {
    getCartLocalBooks()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="fixed z-10 w-full h-[80px] text-white bg-[#023047] flex justify-between">
      <div className="flex justify-between items-center w-[90%] mx-auto">
        <h1>
          <Link to="/">
            <DiTechcrunch size={80} />
          </Link>
        </h1>
        {open && (
          <ul className="uppercase font-semibold absolute text-[#023047] md:text-white top-[80px] left-0 px-[24px] text-center md:hidden bg-[#f1faee] w-[100%] leading-10">
            <li className="ml-6 my-[15px] hover:underline" onClick={()=>setOpen(false)}>
              <Link to="/">Home</Link>
            </li>
            <li className="ml-6 my-[15px] hover:underline" onClick={()=>setOpen(false)}  >
              <Link to="/blog">Blog</Link>
            </li>
            <li className="ml-6 my-[15px] hover:underline" onClick={()=>setOpen(false)}>
              <Link to="/store">Store</Link>
            </li>
            <li className="ml-6 my-[15px] hover:underline" onClick={()=>setOpen(false)}>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            
          </ul>
        )}

        {/* BIG SCREEN */}
        <ul className="uppercase font-semibold text-white hidden md:flex">
          <li className="ml-6 my-[15px] hover:underline">
            <Link to="/">Home</Link>
          </li>
          <li className="ml-6 my-[15px] hover:underline">
            <Link to="/blog">Blog</Link>
          </li>
          <li className="ml-6 my-[15px] hover:underline">
            <Link to="/store">Store</Link>
          </li>
          <li className="ml-6 my-[15px] hover:underline">
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
        <button className="md:hidden" onClick={MenuBar}>
          {open ? <FaTimes size={30} /> : <FaHamburger size={30} />}
        </button>
        <div className="hidden md:flex md:block md:justify-center items-center">
          <Link to="/cart"><span className="relative"><GiShoppingCart size={30}/></span></Link>
          <span className="absolute top-4 right-14 bg-white text-[#023047] px-[4px] rounded-full font-bold">{localCartBooks && localCartBooks.length}</span>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
