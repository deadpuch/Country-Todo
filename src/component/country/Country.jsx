import React, { useEffect, useState } from "react";
import Card from "../country/card/card.jsx";
import axios from "axios";

import "./Country.css"
import { useNavigate } from "react-router-dom";

function Country() {

  const [data, setdata] = useState([]);

 const usenav=useNavigate()

  useEffect(()=>{
    
      const preload = () => {
        axios("https://restcountries.com/v3.1/all")
          .then((res) => {
            setdata(res.data);
          })
          .catch((err) => {
            usenav('/err')
          });
      };
preload()
  },[usenav])

  return (
    <>

      <div
        className="d-flex justify-content-center mt-5 gap-2 pt-5 flex-wrap dataContainer"
        
      >

        {
          data.map((cnty)=><Card element={cnty} key={cnty.cca2}/> )
        }
        
      </div>
    </>
  );
}

export default Country;
