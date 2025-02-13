import React from "react";
import PlanetsList from "../../components/PlanetsList/PlanetsList";
import bgim from "../../assets/background.png"

function HomePage() {
  return (
    <div className=" bg-[#070724] h-[100px] " 
    style={{ backgroundImage: `url(${bgim})` }}
    >
      <PlanetsList />

    </div>
  );
}

export default HomePage;
