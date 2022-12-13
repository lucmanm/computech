import React from "react";
import { Header } from "../pages/frontend/Header/";
import { Products, IconNavigation } from "../pages/frontend/";
import { Footer } from "../pages/frontend/footer/Footer";
import {Login} from "../pages/frontend/Pages/Login"
import "./App.css";
import { Outlet, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="bg-gray-50">
      <Header />
        <Routes>
          <Route index element={<Products />}></Route>
          <Route path="login" element={<Login />}>
          <Route index element={<div>Login Here</div>}/>
            <Route path='login' element={<div>Login Here</div>}/>
            <Route path='register' element={<div>Register Here</div>}/>
          </Route>
        </Routes>
        <Outlet/>
      <Footer />
    </div>
  );
}

export default App;
