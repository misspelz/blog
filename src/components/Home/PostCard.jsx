import React, { useContext } from "react";
import { GlobalContext } from "../../context";
// import { FaEdit } from "react-icons/fa";
// import { MdDeleteForever } from "react-icons/md";
import { FaShareAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
// import Modal from "../Modal";
// import UpdateForm from "./UpdateForm";
import { RWebShare } from "react-web-share";
// import ScrollToTop from "react-scroll-to-top";

const PostCard = () => {
  const { fromLocal } = useContext(GlobalContext);

  // getPostFromStorage and useEffect is in context

  // delete function is in context

  // edit function is in context

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
      {/* {updateModal && (
                  <Modal>
                    <UpdateForm props={{ id: itemId }} />
                  </Modal>
                )} */}
      <div className="text-black grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 w-[100%] md:max-h-[1000px] md:overflow-y-scroll">
        {fromLocal &&
          fromLocal.length > 0 &&
          fromLocal.map((item) => {
            return (
              <div
                key={item.id}
                className="flex flex-col justify-between my-6 mx-6 p-6 rounded-md bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] h-[500px] sm:h-[450px]"
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
                    by {item.writer}
                  </p>
                </div>

                <div className="flex flex-row justify-between mt-8 md:mt-4 ">
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
                  {/* <div className="flex justify-between items-center w-[35%]"> */}
                  {/* <span
                        onClick={() => editFunc(item.id)}
                        className="cursor-pointer text-[#023047] rounded-full hover:text-[#ffa500] "
                      >
                        <FaEdit size={20} />
                      </span> */}
                  {/* <span
                        onClick={() => handleDelete(item)}
                        className="cursor-pointer text-[#023047] rounded-full hover:text-[#ffa500] hidden"
                      >
                        <MdDeleteForever size={20} />
                      </span> */}
                  {/* </div> */}
                </div>
              </div>
            );
          })}

        <div className="ml-8 font-bold text-center">
          {fromLocal && fromLocal.length > 0 ? (
            <Link to="/blog">
              <div className="flex justify-center items-center mb-10 font-bold hover:text-[#023047] italic text-md md:text-xl ">
                See more posts
              </div>
            </Link>
          ) : (
            <div>No Post? Add a New Post from the Dashboard</div>
          )}
        </div>
      </div>
    </>
  );
};

export default PostCard;
