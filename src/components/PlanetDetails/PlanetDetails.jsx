import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import data from "../../data.json";

import mercuryImage from "../../assets/planet-mercury.svg";
import mercuryInternalImage from "../../assets/planet-mercury-internal.svg";
import mercuryGeologyImage from "../../assets/geology-mercury.png";

import venusImage from "../../assets/planet-venus.svg";
import venusInternalImage from "../../assets/planet-venus-internal.svg";
import venusGeologyImage from "../../assets/geology-venus.png";

import earthImage from "../../assets/planet-earth.svg";
import earthInternalImage from "../../assets/planet-earth-internal.svg";
import earthGeologyImage from "../../assets/geology-earth.png";

import marsImage from "../../assets/planet-mars.svg";
import marsInternalImage from "../../assets/planet-mars-internal.svg";
import marsGeologyImage from "../../assets/geology-mars.png";

import jupiterImage from "../../assets/planet-jupiter.svg";
import jupiterInternalImage from "../../assets/planet-jupiter-internal.svg";
import jupiterGeologyImage from "../../assets/geology-jupiter.png";

import saturnImage from "../../assets/planet-saturn.svg";
import saturnInternalImage from "../../assets/planet-saturn-internal.svg";
import saturnGeologyImage from "../../assets/geology-saturn.png";

import uranusImage from "../../assets/planet-uranus.svg";
import uranusInternalImage from "../../assets/planet-uranus-internal.svg";
import uranusGeologyImage from "../../assets/geology-uranus.png";

import neptuneImage from "../../assets/planet-neptune.svg";
import neptuneInternalImage from "../../assets/planet-neptune-internal.svg";
import neptuneGeologyImage from "../../assets/geology-neptune.png";

function PlanetDetails() {
  const { name } = useParams();
  const [planet, setPlanet] = useState(null);
  const [activeView, setActiveView] = useState("overview");

  useEffect(() => {
    const selectedPlanet = data.find((p) => p.name === name);
    if (selectedPlanet) {
      setPlanet(selectedPlanet);
    }
  }, [name]);

  if (!planet) {
    return (
      <div className="text-center text-lg font-semibold text-white">
        Loading...
      </div>
    );
  }

  const planetImages = {
    mercury: {
      planet: mercuryImage,
      internal: mercuryInternalImage,
      geology: mercuryGeologyImage,
    },
    venus: {
      planet: venusImage,
      internal: venusInternalImage,
      geology: venusGeologyImage,
    },
    earth: {
      planet: earthImage,
      internal: earthInternalImage,
      geology: earthGeologyImage,
    },
    mars: {
      planet: marsImage,
      internal: marsInternalImage,
      geology: marsGeologyImage,
    },
    jupiter: {
      planet: jupiterImage,
      internal: jupiterInternalImage,
      geology: jupiterGeologyImage,
    },
    saturn: {
      planet: saturnImage,
      internal: saturnInternalImage,
      geology: saturnGeologyImage,
    },
    uranus: {
      planet: uranusImage,
      internal: uranusInternalImage,
      geology: uranusGeologyImage,
    },
    neptune: {
      planet: neptuneImage,
      internal: neptuneInternalImage,
      geology: neptuneGeologyImage,
    },
  };

  const getContent = () => {
    switch (activeView) {
      case "overview":
        return {
          text: planet.overview.content,
          image: planetImages[planet.name.toLowerCase()].planet,
        };
      case "internal":
        return {
          text: planet.structure.content,
          image: planetImages[planet.name.toLowerCase()].internal,
        };
      case "geology":
        return {
          text: planet.geology.content,
          image: planetImages[planet.name.toLowerCase()].geology,
        };
      default:
        return {
          text: planet.overview.content,
          image: planetImages[planet.name.toLowerCase()].planet,
        };
    }
  };

  const { text, image } = getContent();

  return (
    <div className="flex flex-col items-center text-white p-6">
      <div className="flex justify-center gap-4 w-full max-w-md mb-4 md:hidden" style={{ fontFamily: 'Spartan, sans-serif' }}>
        {["overview", "internal", "geology"].map((view) => (
          <button
            key={view}
            className={`text-white border-b-2 px-2 py-1 ${
              activeView === view ? "border-white" : "border-transparent"
            } text-xs md:text-sm`}
            onClick={() => setActiveView(view)}
          >
            {view === "overview"
              ? "01 Overview"
              : view === "internal"
              ? "02 Internal Structure"
              : "03 Surface Geology"}
              
          </button>
        ))}
      </div>

      <div className="flex flex-col md:flex-row md:items-center w-full max-w-5xl">
        <div className="flex justify-center w-full md:w-1/2">
          <img
            src={image}
            alt={planet.name}
            className="w-40 h-40 md:w-60 md:h-60 object-contain"
          />
        </div>

        <div className="flex flex-col text-center md:text-left md:w-1/2 mt-6 md:mt-0">
          <h1 className="text-3xl md:text-5xl font-bold" style={{ fontFamily: 'Spartan, sans-serif' }}>{planet.name} </h1>
          <p className="text-sm md:text-lg leading-relaxed mt-4" style={{ fontFamily: 'Spartan, sans-serif' }}>{text}</p>

          <a
            href={planet.overview.source}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline mt-2"
          >
            Source: Wikipedia
          </a>

          <div className="hidden md:flex flex-col gap-3 mt-6">
            {["overview", "internal", "geology"].map((view) => (
              <button
                key={view}
                className={`w-full py-2 border ${
                  activeView === view
                    ? "bg-[#419EBB] border-[#419EBB]"
                    : "border-gray-400"
                } text-white text-xs md:text-sm`}
                onClick={() => setActiveView(view)} style={{ fontFamily: 'Spartan, sans-serif' }}
              >
                {view === "overview"
                  ? "01 Overview"
                  : view === "internal"
                  ? "02 Internal Structure"
                  : "03 Surface Geology"}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-1.5 md:flex-row md:items-center text-white py-6 w-full max-w-5xl mt-6">
        {["Rotation", "Revolution", "Radius", "Temperature"].map(
          (key, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center border border-gray-500 py-2 px-4 w-full md:w-1/4" 
              style={{
                height: "48px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: `Spartan, sans-serif`
              }}
             
            >
              <h3 className="text-xs md:text-sm uppercase text-gray-400" style={{ fontFamily: 'Spartan, sans-serif' }}>
                {key}
              </h3>
              <p className="text-xs md:text-lg font-semibold text-center" style={{ fontFamily: 'Spartan, sans-serif' }}>
                {planet[key.toLowerCase()]}
              </p>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default PlanetDetails;
