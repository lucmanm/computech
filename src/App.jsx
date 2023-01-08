import React from "react";
import { RootLayout, MobileLayout, FrontPage } from "./frontend/en-sa/layouts/";
import { Cart, PageNotFound, ProductPreview } from "./frontend/en-sa/pages";
import { Login } from "./frontend/en-sa/pages/login";
import { Route, Routes } from "react-router-dom";
import { useStateContext } from "./frontend/en-sa/contexts/ContextProvider";
const App = () => {
  // const { loggedIn } = useStateContext();

  return (
    <div className="bg-gray-100">
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route path="/" element={<FrontPage />} />
          <Route path="/products/:prodId" element={<ProductPreview />} />
          <Route path="/:loginId/*" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <MobileLayout />
    </div>
  );
};

export default App;
// import React from "react";
// import { Header } from "../pages/frontend/header/";
// import { Products } from "../pages/frontend/";
// import { FooterInfo } from "../pages/frontend/footer/FooterInfo";
// import Subscribe from "../pages/frontend/footer/Subscribe";
// import { Login as CpLogin } from "../pages/frontend/components/Login";
// import { Register as CpRegister } from "../pages/frontend/components/Register";
// import { Login } from "../pages/frontend/Pages/Login";
// import { Cart } from "../pages/frontend/Pages/Cart";
// import "./App.css";
// import { Route, Routes, useLocation } from "react-router-dom";
// import {
//   Profile,
//   DtAccMenu,
//   Address,
//   Orders,
//   WishList,
// } from "../pages/frontend/Pages/account";
// import { IconHzBar } from "../pages/frontend/components/IconHzBar";
// import { Banners } from "../pages/frontend/components/Banners";
// import { Brands } from "../pages/frontend/components/Brands";
// import { ProductPreview } from "../pages/frontend/Pages/ProductPreview";
// import { SearchProducts } from "../pages/frontend/components/SearchProducts";
// import { PageNotFound } from "../pages/frontend/Pages/PageNotFound";
// import { SideBarMenu } from "../pages/frontend/menu/SideBarMenu";
// import { useStateContext } from "../pages/frontend/contexts/ContextProvider";
// import { LsideBarMenu } from "../pages/frontend/menu/LsideBarMenu";
// import { MainSlider } from "../pages/frontend/components/MainSlider";

// function App() {
//   const { loggedIn } = useStateContext;
//   const location = useLocation();
//   const { pathname } = location;

//   return (
//     <div className="bg-gray-100">
//       <Header />
//       <MainSlider />
//       <SearchProducts />
//       <LsideBarMenu />
//       <SideBarMenu />
//       <Routes>
//         {pathname === "/" && <Route path="/" element={<Products />} />}
//         <Route path="/products">
//           <Route path=":prodId" element={<ProductPreview />} />
//         </Route>
//         {!loggedIn && (
//           <Route path="/login" element={<Login />}>
//             <Route index element={<CpLogin />} />
//             <Route path="register" element={<CpRegister />} />
//           </Route>
//         )}

//         <Route path="cart" element={<Cart />} />
//         <Route path="/account" element={<DtAccMenu />}>
//           <Route index element={<Profile />} />
//           <Route path="address" element={<Address />} />
//           <Route path="orders" element={<Orders />} />
//           <Route path="wishlist" element={<WishList />} />
//         </Route>
//         <Route path="*" element={<PageNotFound />} />
//       </Routes>

//       {pathname === "/" && <Banners />}
//       {pathname === "/" && <Brands />}
//       <Subscribe />
//       <FooterInfo />
//       <IconHzBar />
//     </div>
//   );
// }

// export default App;
