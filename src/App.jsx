import React from "react";
import { Header } from "../pages/frontend/Header";
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
  DtAccMenu,
  Address,
  Orders,
  WishList,
} from "../pages/frontend/Pages/account";
import { IconHzBar } from "../pages/frontend/components/IconHzBar";
import { Banners } from "../pages/frontend/components/Banners";
import { Brands } from "../pages/frontend/components/Brands";
import { ProductPreview } from "../pages/frontend/Pages/ProductPreview";
import { SearchProducts } from "../pages/frontend/components/SearchProducts";
import { PageNotFound } from "../pages/frontend/Pages/PageNotFound";
import { SideBarMenu } from "../pages/frontend/menu/SideBarMenu";
import { useStateContext } from "../pages/frontend/contexts/ContextProvider";
import { LsideBarMenu } from "../pages/frontend/menu/LsideBarMenu";

function App() {
  const { loggedIn } = useStateContext;
  const location = useLocation();
  const { pathname } = location;

  return (
    <div className="border-2 border-black bg-gray-100">
      <Header />
      <SearchProducts />
      <LsideBarMenu />
      <SideBarMenu />
      <Routes>
        {pathname === "/" && <Route path="/" element={<Products />} />}
        <Route path="/products">
          <Route path=":prodId" element={<ProductPreview />} />
        </Route>
        {!loggedIn && (
          <Route path="/login" element={<Login />}>
            <Route index element={<CpLogin />} />
            <Route path="register" element={<CpRegister />} />
          </Route>
        )}

        <Route path="cart" element={<Cart />} />
        <Route path="/account" element={<DtAccMenu />}>
          <Route index element={<Profile />} />
          <Route path="address" element={<Address />} />
          <Route path="orders" element={<Orders />} />
          <Route path="wishlist" element={<WishList />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>

      {pathname === "/" && <Banners />}
      {pathname === "/" && <Brands />}
      <Subscribe />
      <FooterInfo />
      <IconHzBar />
    </div>
  );
}

export default App;
