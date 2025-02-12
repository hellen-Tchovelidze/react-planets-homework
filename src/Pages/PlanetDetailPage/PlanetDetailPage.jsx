import React from "react";
import PlanetDetails from "../../components/PlanetDetails/PlanetDetails";
import bgim from "../../assets/background.png"

function PlanetDetailPage() {
  return (
    <div  className=" bg-[#070724] h-screen " 
    style={{ backgroundImage: `url(${bgim})` }}>
      <PlanetDetails />
    </div>
  );
}

export default PlanetDetailPage;
