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
import { CreateUser } from "../pages/user/createUser";
import { Login } from "../pages/user/login";
import { ApplyNewEducation } from "../pages/applyNewEducation";
import { ShowDetailContent } from "../pages/showDetailContent";

export const LoggedOutRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/createuser" element={<CreateUser />} />
        <Route path="/login" element={<Login />} />
        <Route path="/createPost" element={<CreatePost />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/post/:id/edit" element={<EditPost />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="*" element={<NotFound />}></Route>
        <Route path="/applyNewEducation" element={<ApplyNewEducation />}></Route>
        <Route path="/showDetailContent" element={<ShowDetailContent />}></Route>
      </Routes>
      <Foot />
    </BrowserRouter>
  );
};
