import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import SignupPage from "../components/SignupPage";
import LoginPage from "../components/LoginPage";
import Cart from "../components/Cart";
import PrivateRoutes from "./PrivateRoutes";
import SofaPage from "../pages/MultiProductPages/SofaPage";
import SofaSinglePage from "../pages/SingleProductPages/SofaSinglePage";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/cart"
        element={
          <PrivateRoutes>
            <Cart />
          </PrivateRoutes>
        }
      />
      <Route path="/sofa" element={<SofaPage />} />
      <Route path="/sofa/:id" element={<SofaSinglePage />} />
    </Routes>
  );
};

export default AllRoutes;
