import React from "react";
import { Header } from "../pages/frontend/header";
import { Products } from "../pages/frontend/";
import { FooterInfo } from "../pages/frontend/footer/FooterInfo";
import Subscribe from "../pages/frontend/footer/Subscribe";
import { Login as CpLogin } from "../pages/frontend/components/Login";
import { Register as CpRegister } from "../pages/frontend/components/Register";
import { Login } from "../pages/frontend/Pages/Login";
import { Cart } from "../pages/frontend/Pages/Cart";

import "./App.css";
import { Route, Routes } from "react-router-dom";
import {
  Profile,
  Account,
  Address,
  Orders,
  WishList,
} from "../pages/frontend/Pages/account";
import { IconHzBar } from "../pages/frontend/components/IconHzBar";
import { Banners } from "../pages/frontend/components/Banners";

function App() {
  return (
    <div className="bg-gray-50">
      <Header />
      <Routes>
        <Route index element={<Products />}></Route>
        <Route path="/login" element={<Login />}>
          <Route index element={<CpLogin />} />
          <Route path="register" element={<CpRegister />} />
        </Route>
        <Route path="account" element={<Account />}>
          <Route index element={<Profile />} />
          <Route path="address" element={<Address />} />
          <Route path="orders" element={<Orders />} />
          <Route path="wishlist" element={<WishList />} />
        </Route>
        <Route path="cart" element={<Cart />} />
      </Routes>
      <Banners />
      <Subscribe />
      <FooterInfo />
      <IconHzBar />
    </div>
  );
}

export default App;
