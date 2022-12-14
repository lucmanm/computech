import React from "react";
import { Header } from "../pages/frontend/Header/";
import { Products, IconNavigation } from "../pages/frontend/";
import { Footer } from "../pages/frontend/footer/Footer";
import {Login as CpLogin} from "../pages/frontend/Components/Login"
import {Register as CpRegister} from "../pages/frontend/Components/Register"
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
          <Route index element={<CpLogin/>}/>
            <Route path='register' element={<CpRegister/>}/>
          </Route>
        </Routes>
        <Outlet/>
      <Footer />
    </div>
  );
}

export default App;
