import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaTwitter, FaFacebook, FaLinkedinIn } from "react-icons/fa";
// import { RWebShare } from "react-web-share";

const PostDetail = () => {
  const { id } = useParams();
  const [postDetail, setPostDetail] = useState([]);
  

  useEffect(() => {
    getLocalPosts();
  }, []);

  const getLocalPosts = () => {
    const getPosts = JSON.parse(localStorage.getItem("posts"));
    setPostDetail(getPosts);
  };

  const SinglePost = postDetail.find((post) => post.id === id);
  

  return (
    <div className="mt-[100px] md:mt-20 flex flex-col md:flex-row w-[100%] pl-10 md:px-20 md:py-10">
      <div className="flex flex-col w-[90%] mr-10">
        <img
          className="w-[100%]"
          src={SinglePost && SinglePost.image}
          alt={SinglePost && SinglePost.title}
        />
        <p className="mt-4 text-slate-600 text-sm">
          According to Jerome Dilouya, CEO of InterCloud, financial institutions
          should leverage the capabilities of multicloud environments
        </p>
      </div>

      <div className="w-[80%]">
        <p className="hidden md:block text-sm font-semibold">TECHNOLOGY</p>
        <h3 className="text-3xl font-bold my-2">
          {SinglePost && SinglePost.title}
        </h3>
        <p className="text-sm mb-2 font-semibold">
          by {SinglePost && SinglePost.writer}
        </p>
        <p className="font-semibold mt-4 md:max-h-[365px] md:overflow-y-scroll">
          {SinglePost && SinglePost.description}
        </p>

        <div className="flex flex-col my-4">
          <hr />
          <span className="text-red-700 uppercase font-semibold mt-4">
            Share
          </span>
          <span className="cursor-pointer text-[#023047] rounded-full mt-2 flex ">
            <span className="hover:text-red-700">
              <FaFacebook size={20} />
            </span>
            <span className="ml-4 hover:text-red-700">
              <FaTwitter size={20} />
            </span>
            <span className="ml-4 hover:text-red-700">
              <FaLinkedinIn size={20} />
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
