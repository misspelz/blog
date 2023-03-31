import React, { useContext, useState, useEffect } from "react";
import { FaWindowClose } from "react-icons/fa";
import { GlobalContext } from "../../context";
// import { v4 as uuidv4 } from "uuid";
import Spinner from "../Spinner/Spinner";
import { toast } from "react-toastify";

const UpdateForm = ({ props: { id } }) => {
  console.log(id);
  const { loading, setLoading, setUpdateModal, getPostFromStorage } = useContext(GlobalContext);
  // const [reload, setReload] = useState(false);

  const [state, setState] = useState({
    image: "",
    title: "",
    description: "",
    writer: "",
  });

  const { image, title, description, writer } = state;

  // get post from local storage
  useEffect(() => {
    getLocalPosts();
  }, []);

  const getLocalPosts = () => {
    const getPosts = JSON.parse(localStorage.getItem("posts"));
    const copy = [...getPosts];

    const singlepostindex = copy.findIndex((post) => post.id === id);

    const post = copy[singlepostindex];

    setState({
      image: post.image,
      title: post.title,
      description: post.description,
      writer: post.writer,
    });
  };

  // update post onchange handler
  const handleChange = (event) => {
    const { name, value } = event.target;

    setState({
      ...state,
      [name]: value,
    });
  };


  // update post submit button
  const handlePostSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    setTimeout(() => {
      const allPosts = JSON.parse(localStorage.getItem("posts"));

      const copy = [...allPosts];

      const singlepostindex = copy.findIndex((post) => post.id === id);

      const post = copy[singlepostindex];

      post.image = image;
      post.title = title;
      post.description = description;
      post.writer = writer;

      localStorage.setItem("posts", JSON.stringify(copy));

      setLoading(false);

      toast.success("Post Updated");

      setUpdateModal(false);

      getPostFromStorage()
    }, 3000);

  };

  return (
    <div className="text-white">
      <form
        onSubmit={handlePostSubmit}
        className="flex flex-col bg-white h-[400px] w-[400px] rounded-md leading-8 p-4"
      >
        <div className="flex justify-between">
          <span className="text-[#023047] font-bold text-xl mb-4">
            Update Post
          </span>
          <span
            onClick={() => setUpdateModal(false)}
            className="text-[#023047] font-bold text-xl cursor-pointer mt-[6px] hover:text-orange-500"
          >
            <FaWindowClose />
          </span>
        </div>

        <label className="text-[#023047]">Image</label>
        <input
          className="border rounded px-4 text-[#023047]"
          type="text"
          placeholder="Enter post image path/link"
          name="image"
          value={image}
          onChange={handleChange}
        />

        <label className="text-[#023047]">Title</label>
        <input
          className="border rounded px-4 text-[#023047]"
          type="text"
          placeholder="Enter post title"
          name="title"
          value={title}
          onChange={handleChange}
        />

        <label className="text-[#023047]">Description</label>
        <input
          className="border rounded px-4 text-[#023047]"
          type="text"
          placeholder="Enter image post description"
          name="description"
          value={description}
          onChange={handleChange}
        />

        <label className="text-[#023047]">Writer</label>
        <input
          className="border rounded px-4 text-[#023047]"
          type="text"
          placeholder="Enter writer's name"
          name="writer"
          value={writer}
          onChange={handleChange}
        />

        {loading ? (
          <Spinner />
        ) : (
          <button
            // onClick={post.id}
            className="text-white rounded mt-4 font-semibold bg-[#023047] hover:bg-orange-500"
          >
            Submit
          </button>
        )}
      </form>
    </div>
  );
};

export default UpdateForm;
