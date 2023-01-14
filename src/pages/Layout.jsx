import React from "react";
import { Outlet } from "react-router-dom";

import Footer from "../components/footer/Footer";
import NavFinal from "../components/NavFinal";
import BtnTop from "../components/BtnTop";
import BreadCrumbs from "../common/BreadCrumbs";

function Layout() {
  return (
    <div className=" mx-auto  m-0">
      <NavFinal />
      <BreadCrumbs />
      <Outlet />
      <Footer />
      <BtnTop />
    </div>
  );
}

export default Layout;
