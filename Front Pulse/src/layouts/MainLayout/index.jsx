import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";

function MainLayout() {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <>
      <Navbar location={location}/>
      <Outlet />
      <Footer />
    </>
  );
}

export default MainLayout;
