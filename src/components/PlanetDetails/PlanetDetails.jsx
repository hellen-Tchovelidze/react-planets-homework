


import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import data from "../../data.json";

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
    return <div className="text-center text-lg font-semibold text-white">Loading...</div>;
  }

  const getContent = () => {
    switch (activeView) {
      case "overview":
        return { text: planet.overview.content, image: planet.images.planet };
      case "internal":
        return { text: planet.structure.content, image: planet.images.internal };
      case "geology":
        return { text: planet.geology.content, image: planet.images.geology };
      default:
        return { text: planet.overview.content, image: planet.images.planet };
    }
  };

  const { text, image } = getContent();

  return (
    <div className="flex flex-col items-center text-white p-6">
      
      <div className="flex justify-center gap-4 w-full max-w-md mb-4 md:hidden">
        {["overview", "internal", "geology"].map((view) => (
          <button
            key={view}
            className={`text-white border-b-2 px-2 py-1 ${activeView === view ? "border-white" : "border-transparent"} text-xs md:text-sm`}
            onClick={() => setActiveView(view)}
          >
            {view === "overview" ? "01 Overview" :
             view === "internal" ? "02 Internal Structure" :
             "03 Surface Geology"}
          </button>
        ))}
      </div>

      <div className="flex flex-col md:flex-row md:items-center w-full max-w-5xl">
        <div className="flex justify-center w-full md:w-1/2">
          <img src={image} alt={planet.name} className="w-40 h-40 md:w-60 md:h-60 object-contain" />
        </div>

        <div className="flex flex-col text-center md:text-left md:w-1/2 mt-6 md:mt-0">
          <h1 className="text-3xl md:text-5xl font-bold">{planet.name}</h1>
          <p className="text-sm md:text-lg leading-relaxed mt-4">{text}</p>

          <a href={planet.overview.source} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline mt-2">
            Source: Wikipedia
          </a>

         
          <div className="hidden md:flex flex-col gap-3 mt-6">
            {["overview", "internal", "geology"].map((view) => (
              <button
                key={view}
                className={`w-full py-2 border ${activeView === view ? "bg-[#419EBB] border-[#419EBB]" : "border-gray-400"} text-white text-xs md:text-sm`}
                onClick={() => setActiveView(view)}
              >
                {view === "overview" ? "01 Overview" :
                 view === "internal" ? "02 Internal Structure" :
                 "03 Surface Geology"}
              </button>
            ))}
          </div>
        </div>
      </div>

    
      <div className="flex flex-col  gap-1.5 md:flex-row md:items-center text-white py-6 w-full max-w-5xl mt-6">
        {["Rotation", "Revolution", "Radius", "Temperature"].map((key, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center border border-gray-500 py-2 px-4 w-full md:w-1/4" 
            style={{ height: "48px", display: "flex", alignItems: "center", justifyContent: "center" }} 
          >
            <h3 className="text-xs md:text-sm uppercase text-gray-400">{key}</h3>
            <p className="text-xs md:text-lg font-semibold text-center">
              {planet[key.toLowerCase()]}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlanetDetails;




