import React from "react";
import './card.css'

function Card({element}) {
  return (
    <div  className="border rounded BorderConatiner">
        <div className="cntyImg">
          <img src={element.flags.png} alt="" />
        </div>

        <div className="p-2">
       <h1>{element.name.common}</h1>

          <ul className="p-0">
            <li><span className="fs-5">Capital: </span>{element.capital}</li>
         
          </ul>
        </div>
    </div>
  );
}

export default Card;
