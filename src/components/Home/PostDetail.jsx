import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const PostDetail = () => {
  const { id } = useParams();
  const [postDetail, setPostDetail] = useState([]);
  console.log(postDetail);

  useEffect(() => {
    getLocalPosts();
  }, []);

  const getLocalPosts = () => {
    const getPosts = JSON.parse(localStorage.getItem("posts"));
    setPostDetail(getPosts);
  };

  const SinglePost = postDetail.find((post) => post.id === id);
  console.log(SinglePost);

  return (
    <div className="mt-20 flex">
      <div>
        <img  src={SinglePost && SinglePost.image} alt={SinglePost && SinglePost.title} />
      </div>

      <div>
        <h3>{SinglePost &&  SinglePost.title }</h3>
        <p>{SinglePost &&  SinglePost.description }</p>
        <p>{SinglePost &&  SinglePost.writer }</p>
      </div>
    </div>
  );
};

export default PostDetail;
