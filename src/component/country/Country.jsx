import React, { useEffect, useState } from "react";
import Card from "../country/card/card.jsx";
import axios from "axios";
import Nav from "../Navbar/Nav.jsx";
import "./Country.css"
import { Navigate, useNavigate } from "react-router-dom";

function Country() {

  const [data, setdata] = useState([]);

 const usenav=useNavigate()

  useEffect(()=>{
preload()
  },[])

  const preload = () => {
    axios("https://restcountries.com/v3.1/all")
      .then((res) => {
        setdata(res.data);
      })
      .catch((err) => {
        usenav('/err')
      });
  };

  return (
    <>
      <Nav />

      <div
        className="d-flex justify-content-center mt-5 gap-2 pt-5 flex-wrap dataContainer"
        // onClick={preload}
      >

        {
          data.map((cnty)=><Card element={cnty} key={cnty.cca2}/> )
        }
        
      </div>
    </>
  );
}

export default Country;
