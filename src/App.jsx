import React from "react";
import { Header } from "../pages/frontend/Header/";
import { Products, IconNavigation } from "../pages/frontend/";
import { Footer } from "../pages/frontend/footer/Footer";
import { Login as CpLogin } from "../pages/frontend/Components/Login";
import { Register as CpRegister } from "../pages/frontend/Components/Register";
import { Login } from "../pages/frontend/Pages/login/Login";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import {
  Profile,
  Account,
  Address,
  Orders,
  WishList,
} from "../pages/frontend/Pages/account";

function App() {
  return (
    <div className="bg-gray-50">
      <Header />
      <Routes>
        <Route index element={<Products />}></Route>
        <Route path="login" element={<Login />}>
          <Route index element={<CpLogin />} />
          <Route path="register" element={<CpRegister />} />
        </Route>
        <Route path="account" element={<Account />}>
          <Route index element={<Profile />} />
          <Route path="address" element={<Address />} />
          <Route path="orders" element={<Orders />} />
          <Route path="wishlist" element={<WishList />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
