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
import { Route, Routes, useLocation } from "react-router-dom";
import {
  Profile,
  Account,
  Address,
  Orders,
  WishList,
} from "../pages/frontend/Pages/account";
import { IconHzBar } from "../pages/frontend/components/IconHzBar";
import { Banners } from "../pages/frontend/components/Banners";
import { Brands } from "../pages/frontend/Components/Brands";
import { ProductPreview } from "../pages/frontend/Pages/ProductPreview";
import { SearchProducts } from "../pages/frontend/components/SearchProducts";
import { PageNotFound } from "../pages/frontend/Pages/PageNotFound";
function App() {
  const location = useLocation();
  const { pathname } = location;

  return (
    <div className="bg-gray-100">
      <Header />
      <SearchProducts />
      <Routes>
        <Route path="/login" element={<Login />}>
          <Route index element={<CpLogin />} />
          <Route path="register" element={<CpRegister />} />
        </Route>
        <Route path="/products">
          <Route path=":prodId" element={<ProductPreview />} />
        </Route>
        <Route path="cart" element={<Cart />} />
        <Route path="/account" element={<Account />}>
          <Route index element={<Profile />} />
          <Route path="address" element={<Address />} />
          <Route path="orders" element={<Orders />} />
          <Route path="wishlist" element={<WishList />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      {pathname === "/" && <Brands />}
      {pathname === "/" && <Banners />}
      <Subscribe />
      <FooterInfo />
      <IconHzBar />
    </div>
  );
}

export default App;
