import React from "react";
import { Outlet } from "react-router-dom";

import Footer from "../components/footer/Footer";
import NavFinal from "../components/NavFinal";
import BtnTop from "../components/BtnTop";

function Layout() {
  return (
    <div className=" mx-auto  m-0">
      <NavFinal />
      <Outlet />
      <Footer />
      <BtnTop />
    </div>
  );
}

export default Layout;
