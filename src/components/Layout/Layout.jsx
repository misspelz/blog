import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Newsletter from "../Home/Newsletter";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col w-[100%]">
      <NavBar />
      
      <main className="w-full">{children}</main>
      
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Layout;
