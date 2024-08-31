import React from "react";
import Nav from "./component/Navbar/Nav";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
}

export default RootLayout;
