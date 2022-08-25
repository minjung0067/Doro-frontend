import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { isLoggedInVar } from "../apollo";
import { Header } from "../components/header";
import { CreatePost } from "../pages/createPost";

export const LoggedInRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/createPost" element={<CreatePost />} />
      </Routes>
    </BrowserRouter>
  );
};
