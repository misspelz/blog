import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import Blog from "./screens/Blog";
import Store from "./screens/Store";
import Layout from "./components/Layout/Layout";
import CartItem from "./components/Store/CartItem";
import BlogTitle from "./components/Home/PostDetail";
// import About from "./components/Dashboard/About";
// import Analytics from "./components/Dashboard/Analytics";
// import Product from "./components/Dashboard/Product";
// import Comments from "./components/Dashboard/Comments";
import DashPage from "./components/Dashboard/DashPage";
// import DashLayOut from "./components/Dashboard/DashLayout";
import DashLayOut from "./components/Dashboard/DashLayOut";
import NewPost from "./components/Home/NewPost";
import AddStoreBook from "./components/Dashboard/AddStoreBook"


const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/dashboard" element={<DashLayOut />}>
           <Route path="home" element={<DashPage />} />
           <Route path="newpost" element={<NewPost />} />
           <Route path="newbook" element={<AddStoreBook />} />
        </Route>

        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />

        <Route
          path="/blog"
          element={
            <Layout>
              <Blog />
            </Layout>
          }
        />

        <Route
          path="/blog/:id"
          element={
            <Layout>
              <BlogTitle />
            </Layout>
          }
        />

        <Route
          path="/store"
          element={
            <Layout>
              <Store />
            </Layout>
          }
        />

        <Route
          path="/cart"
          element={
            <Layout>
              <CartItem />
            </Layout>
          }
        />

      </Routes>
    </div>
  );
};

export default Router;
