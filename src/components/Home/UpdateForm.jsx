import React, { useContext, useState, useEffect } from "react";
import { FaWindowClose } from "react-icons/fa";
import { GlobalContext } from "../../context";
import Spinner from "../Spinner/Spinner";
import { toast } from "react-toastify";

const UpdateForm = ({ props: { id } }) => {
  console.log(id);
  const { loading, setLoading, setUpdateModal, getPostFromStorageForBlog } =
    useContext(GlobalContext);

  const [state, setState] = useState({
    image: "",
    title: "",
    description: "",
    writer: "",
  });

  // get post from local storage
  useEffect(() => {
    getLocalPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getLocalPosts = () => {
    const getPosts = JSON.parse(localStorage.getItem("posts"));
    const copy = [...getPosts];

    const singlepost = copy.find((post) => post.id === id);

    setState({
      image: singlepost.image,
      title: singlepost.title,
      description: singlepost.description,
      writer: singlepost.writer,
    });
  };

  const { image, title, description, writer } = state;

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

      const singlepost = copy.find((post) => post.id === id);

      singlepost.image = image;
      singlepost.title = title;
      singlepost.description = description;
      singlepost.writer = writer;

      localStorage.setItem("posts", JSON.stringify(allPosts));

      setLoading(false);

      toast.success("Post Updated");

      setUpdateModal(false);

      getPostFromStorageForBlog();
    }, 3000);
  };

  return (
    <div className="text-white">
      <form
        onSubmit={handlePostSubmit}
        className="flex flex-col bg-white h-[500px] w-[400px] rounded-md leading-8 p-4"
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
        <textarea
          className="border rounded px-4 text-[#023047]"
          type="text"
          placeholder="Enter post description"
          cols="10"
          rows="30"
          name="description"
          value={description}
          onChange={handleChange}
        ></textarea>

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
