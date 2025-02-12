import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import data from "../../data.json";

function PlanetsList() {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    setPlanets(data);
  }, []);

  return (
    <>
      <div className="flex justify-between items-center p-6 bg-[#070724]">
        <h1 className=" text-white">THE PLANETS</h1>
        <nav>
          <ul className="flex justify-around items-center gap-2 text-white">
            {planets.map((planet) => (
              <li key={planet.name}>
                <Link to={`/planet/${planet.name}`}>{planet.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className=" w-full h-[1px] bg-white opacity-20"></div>
    </>
  );
}

export default PlanetsList;
