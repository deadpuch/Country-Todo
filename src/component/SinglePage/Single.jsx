import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Single.css";

function Single() {
  const [data, setdata] = useState(null);
  const { code } = useParams();

  useEffect(() => {
    const SingleCnty = () => {
      axios(`https://restcountries.com/v3.1/alpha/${code}`).then((res) => {
        setdata(res.data[0]);
      });
    };
    SingleCnty();
  }, [code]);

  return (
    <>
      <div className="mt-5 pt-5 w-100 d-flex justify-content-center align-items-center">
        <div className="pe-5 flagImg">
          <img src={data?.flags?.png} alt="flagImg" />{" "}
        </div>

        <div className="d-flex flex-column InnerText">

          <div className="fs-1 font-poppins">{data?.name?.common}</div>
          <div>Capital: {data?.capital}</div>

        </div>
         
      </div>
    </>
  );
}

export default Single;
