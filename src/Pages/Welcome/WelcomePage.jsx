import React from "react";

import bgim from "../../assets/background.png"

function WelcomePage() {
  return (
    <div className=" bg-[#070724] h-screen  flex justify-center items-center flex-col" 
    style={{ backgroundImage: `url(${bgim})` }}
    >
     
     <h1 className=" text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-600 bg-clip-text text-transparent">Welcome to the universe! </h1>
     <h1 className=" text-5xl">🚀🌍✨</h1>

    </div>
  );
}

export default WelcomePage;
