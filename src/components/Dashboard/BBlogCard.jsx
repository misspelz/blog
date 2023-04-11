import React, { useContext } from "react";
import { GlobalContext } from "../../context";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { FaShareAlt } from "react-icons/fa";
import { RWebShare } from "react-web-share";
import { Link } from "react-router-dom";
import Modal from "../Modal";
import UpdateForm from "../Home/UpdateForm";

const BlogCard = () => {
  const { handleDelete, fromLocalForBlog, editFunc, itemId, updateModal } =
    useContext(GlobalContext);

  // truncate title
  const truncate = (str, num) => {
    if (str.length > num) {
      str = str.substring(0, num) + "...";
      return str;
    }
    return str;
  };

  return (
    <>
      {updateModal && (
        <Modal>
          <UpdateForm props={{ id: itemId }} />
        </Modal>
      )}
      <div className="text-black grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 w-[100%]">
        {fromLocalForBlog &&
          fromLocalForBlog.map((item) => {
            return (
              <div
                key={item.id}
                className="flex flex-col justify-between my-6 mx-6 p-6 rounded-md bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] h-[400px] sm:h-[450px]"
              >
                <div>
                  <Link to={`/blog/${item.id}`}>
                    <img src={item.image} alt={item.title} className="mb-2" />

                    <h3 className="mb-2 font-bold text-xl text-[#023047] hover:text-[#ffa500] cursor-pointer ">
                      {truncate(item.title, 50)}
                    </h3>
                  </Link>
                  {/* <p className="mb-2 text-[#023047]">{item.description}</p> */}
                  <p className="text-[12px] font-bold text-[#023047]">
                    by: {item.writer}
                  </p>
                </div>

                <div className="flex flex-row justify-between mt-4">
                  <div className="flex justify-between w-[35%]">
                    <span
                      onClick={() => editFunc(item.id)}
                      className="cursor-pointer text-[#023047] rounded-full hover:text-[#ffa500] "
                    >
                      <FaEdit size={20} />
                    </span>
                    <span
                      onClick={() => handleDelete(item)}
                      className="cursor-pointer text-[#023047] rounded-full hover:text-[#ffa500]"
                    >
                      <MdDeleteForever size={20} />
                    </span>
                  </div>
                  <RWebShare
                    data={{
                      text: "Like humans, flamingos make friends for life",
                      url: `http://localhost:3000/blog/${item.id}`,
                      title: `${item.title}`,
                    }}
                    onClick={() => console.log("shared successfully!")}
                  >
                    <div className="flex items-center">
                      <span className="cursor-pointer text-[#023047] rounded-full hover:text-[#ffa500]">
                        <FaShareAlt size={20} />
                      </span>
                    </div>
                  </RWebShare>
                </div>
              </div>
            );
            // <ScrollToTop/>
          })}
      </div>
    </>
  );
};
export default BlogCard;
