import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import data from "../../data.json";
import { FiMenu, FiX } from "react-icons/fi";

function PlanetsList() {
  const [planets, setPlanets] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setPlanets(data);
  }, []);

  return (
    <>
      <div className="flex justify-between items-center p-6 bg-[#070724] relative">
        <h1 className="text-white text-2xl" style={{ fontFamily: 'Spartan, sans-serif' }}>THE PLANETS</h1>

        <nav className="hidden md:block">
          <ul className="flex gap-4 text-white" style={{ fontFamily: 'Spartan, sans-serif' }}>
            {planets.map((planet) => (
              <li key={planet.name} style={{ fontFamily: 'Spartan, sans-serif' }}>
                <Link
                  to={`/planet/${planet.name}`}
                  className="hover:text-gray-400"
                >
                  {planet.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className="text-white text-3xl md:hidden" style={{ fontFamily: 'Spartan, sans-serif' }}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-[#070724] flex flex-col items-center py-4 md:hidden">
          {planets.map((planet) => (
            <Link
              key={planet.name}
              to={`/planet/${planet.name}`}
              className="text-white py-2 text-xl"
              style={{ fontFamily: 'Spartan, sans-serif' }}
              onClick={() => setIsOpen(false)}
            >
              {planet.name}
            </Link>
          ))}
        </div>
      )}

      <div className="w-full h-[1px] bg-white opacity-20"></div>
    </>
  );
}

export default PlanetsList;
