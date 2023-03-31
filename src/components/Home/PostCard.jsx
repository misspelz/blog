import React, { useContext, useState } from "react";
import { GlobalContext } from "../../context";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { FaShareAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Modal from "../Modal";
import UpdateForm from "./UpdateForm";

const PostCard = () => {
  const { handleDelete, fromLocal, updateModal, setUpdateModal } = useContext(GlobalContext);
  console.log(fromLocal);

  

  // getPostFromStorage and useEffect is in context

  // delete button is in context

  // edit button

  return (
    <>
      {/* {updateModal && <Modal><UpdateForm  /></Modal> } */}
      <div className="text-black grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 w-[100%] md:max-h-[800px] md:overflow-y-scroll">
        {fromLocal &&
          fromLocal.map((item) => {
            return (
          <>
              {updateModal && <Modal><UpdateForm  props={{id:item.id}}/></Modal> }
              <div
                key={item.id}
                className="flex flex-col justify-between my-6 mx-6 p-8 md:p-6 rounded-md bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] h-[580px]"
              >
                <div>
                  <Link to={`/blog/${item.id}`}>
                    <img src={item.image} alt={item.title} className="mb-2" />

                    <h3 className="mb-2 font-bold text-xl text-[#023047] hover:text-[#ffa500] cursor-pointer ">
                      {item.title}
                    </h3>
                  </Link>
                  <p className="mb-2 text-[#023047]">{item.description}</p>
                  <p className="text-[12px] font-bold text-[#023047]">
                    written by: {item.writer}
                  </p>
                </div>

                <div className="flex flex-row justify-between mt-8 h-[50px]">
                  <div className="flex justify-between items-center w-[35%]">
                    <span
                      onClick={() => setUpdateModal(true)}
                      className="cursor-pointer text-[#023047] hover:bg-[#023047] rounded-full p-2 hover:text-white"
                    >
                      <FaEdit size={20} />
                    </span>
                    <span
                      onClick={() => handleDelete(item)}
                      className="cursor-pointer text-[#023047] hover:bg-[#023047] rounded-full p-2 hover:text-white"
                    >
                      <MdDeleteForever size={20} />
                    </span>
                  </div>

                  <div className="flex items-center">
                    <span className=" cursor-pointer text-[#023047] hover:bg-[#023047] rounded-full p-2 hover:text-white">
                      <FaShareAlt size={20} />
                    </span>
                  </div>
                </div>
              </div>
          </>
               
            );
          })}
      </div>
    </>
  );
};

export default PostCard;
