import React from "react";
import "./home.css"
import Nav from "../Navbar/Nav";

function Home() {
  return (
    <>
      <Nav />

      <div className="backdropcontainer">
        <img src="/Backdrop.jpg" alt=""/>
      </div>

      <div className="HomeText">
<h1>Welcome to space</h1>
      </div>

    </>
  );
}

export default Home;
