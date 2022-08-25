import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "../components/header";
import { CreatePost } from "../pages/createPost";
import { HomePage } from "../pages/home";
import { CreateUser } from "../pages/user/createUser";
import { Login } from "../pages/user/login";

export const LoggedOutRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/createuser" element={<CreateUser />} />
        <Route path="/login" element={<Login />} />
        <Route path="/createPost" element={<CreatePost />} />
      </Routes>
    </BrowserRouter>
  );
};
