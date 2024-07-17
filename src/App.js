import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import {
  AboutUs,
  Footer,
  Header,
  SpecialMenu,
  Login,
  SignUp,
} from "./container";
import { Navbar } from "./components";
import "./App.css";

const App = () => {
  const noFooter = ["/login", "/signup"];
  let location = useLocation();

  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/menu" element={<SpecialMenu />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>

      {noFooter.includes(location.pathname) ? true : <Footer />}
    </div>
  );
};

export default App;
