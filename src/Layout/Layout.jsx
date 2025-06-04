import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Layout = ({ isLoggedIn, onLogout }) => {
  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} onLogout={onLogout} />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
