import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Foot } from "../components/foot";
import { Header } from "../components/header";
import { NotFound } from "../pages/404";
import { CreatePost } from "../pages/createPost";
import { EditPost } from "../pages/editPost";
import { HomePage } from "../pages/home";
import { Post } from "../pages/post";
import { Posts } from "../pages/posts";
import { EditUser } from "../pages/user/editUser";

export const LoggedInRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/createPost" element={<CreatePost />} />
        <Route path="/editUser" element={<EditUser />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/post/:id/edit" element={<EditPost />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Foot />
    </BrowserRouter>
  );
};
