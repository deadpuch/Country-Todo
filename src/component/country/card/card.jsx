import React, { useContext } from "react";
import "./card.css";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../../../App";

function Card({ element }) {
  const navigate = useNavigate();

  const { setselect } = useContext(DataContext);

  const ShowPage = () => {
    setselect(element);
    navigate(`/single/${element.cca3}`);
  };

  return (
    <div className="border rounded BorderConatiner" onClick={ShowPage}>
      <div className="cntyImg">
        <img src={element.flags.png} alt="" />
      </div>

      <div className="p-2">
        <h1>{element.name.common}</h1>

        <ul className="p-0">
          <li>
            <span className="fs-5">Capital: </span>
            {element.capital}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Card;
