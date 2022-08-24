import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CreateUser } from "../pages/user/createUser";
import { Login } from "../pages/user/login";

export const LoggedOutRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/createuser" element={<CreateUser />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};
