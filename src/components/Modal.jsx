import React from "react";

const Modal = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: `rgba(0, 0, 0, 0.5)`
      }}
      className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center z-50 "
    >
      {children}
    </div>
  );
};

export default Modal;
