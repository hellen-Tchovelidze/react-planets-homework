import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import data from "../../data.json";
import bgim from "../../assets/background.png";

function PlanetDetails() {
  const { name } = useParams();
  const [planet, setPlanet] = useState(null);
  const [activeView, setActiveView] = useState("overview");

  useEffect(() => {
    const selectedPlanet = data.find((p) => p.name === name);
    console.log(selectedPlanet.images);
    if (selectedPlanet) {
      setPlanet(selectedPlanet);
    }

    
  }, [name]);

  if (!planet)
    return <div className="text-center text-lg font-semibold">Loading...</div>;

  const getContent = () => {
    switch (activeView) {
      case "overview":
        return { text: planet.overview.content, image: planet.images.planet };
      case "internal":
        return {
          text: planet.structure.content,
          image: planet.images.internal,
        };
      case "geology":
        return { text: planet.geology.content, image: planet.images.geology };
      default:
        return { text: planet.overview.content, image: planet.images.planet };
    }
  };

  const { text, image } = getContent();

  return (
    <div
      className="flex flex-col h-[90vh] bg-[#070724] "
      style={{ backgroundImage: `url(${bgim})` }}
    >
    
      <div className="flex flex-1 items-center justify-around">
      
        <div className="w-1/2 flex justify-center">
          <img
            src={image}
            alt={planet.name}
            className="w-96 h-96 object-contain"
          />
        </div>

        
        <div className=" flex flex-col justify-center space-y-6">
          <h1 className="text-5xl font-bold text-white text-[80px]">{planet.name}</h1>
          <p className="text-lg leading-relaxed text-white w-[350px] text-[14px]">{text}</p>

      
          <a
            href={planet.overview.source}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            Source: Wikipedia
          </a>

         
          <div className="flex flex-col space-y-3 mt-4">
            <button
              className={`w-[350px] h-[48px]  border-[1px] border-white  transition ${
                activeView === "overview"
                  ? "bg-[#419EBB] text-white border-[#419EBB]"
                  : "border-gray-400  text-white "
              }`}
              onClick={() => setActiveView("overview")}
            >
             01 Overview
            </button>
            <button
              className={`w-[350px] h-[48px]  border-[1px] text-white  transition ${
                activeView === "internal"
                  ? "bg-[#419EBB] text-white border-[#419EBB]"
                  : "border-gray-400   text-white"
              }`}
              onClick={() => setActiveView("internal")}
            >
             02 Internal Structure
            </button>
            <button
              className={`w-[350px] h-[48px]  border-[1px] border-white  transition ${
                activeView === "geology"
                  ? "bg-[#419EBB] text-white border-[#419EBB]"
                  : "border-gray-400  text-white"
              }`}
              onClick={() => setActiveView("geology")}
            >
             03 Surface Geology
            </button>
          </div>
        </div>
      </div>

    
      <div className="grid grid-cols-4 gap-4 text-white py-6 px-10 w-full">
        <div className="flex flex-col items-center border border-gray-500 py-4 px-6">
          <h3 className="text-sm uppercase text-gray-400">Rotation</h3>
          <p className="text-2xl font-semibold">{planet.rotation}</p>
        </div>
        <div className="flex flex-col items-center border border-gray-500 py-4 px-6">
          <h3 className="text-sm uppercase text-gray-400">Revolution</h3>
          <p className="text-2xl font-semibold">{planet.revolution}</p>
        </div>
        <div className="flex flex-col items-center border border-gray-500 py-4 px-6">
          <h3 className="text-sm uppercase text-gray-400">Radius</h3>
          <p className="text-2xl font-semibold">{planet.radius}</p>
        </div>
        <div className="flex flex-col items-center border border-gray-500 py-4 px-6">
          <h3 className="text-sm uppercase text-gray-400">Temperature</h3>
          <p className="text-2xl font-semibold">{planet.temperature}</p>
        </div>
      </div>
    </div>
  );
}

export default PlanetDetails;
