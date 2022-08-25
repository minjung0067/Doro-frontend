import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { isLoggedInVar } from "../apollo";
import { Header } from "../components/header";
import { CreatePost } from "../pages/createPost";
import { Posts } from "../pages/posts";
import { EditUser } from "../pages/user/editUser";

export const LoggedInRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/createPost" element={<CreatePost />} />
        <Route path="/editUser" element={<EditUser />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </BrowserRouter>
  );
};
