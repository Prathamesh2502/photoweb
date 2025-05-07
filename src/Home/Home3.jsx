import React from 'react';
import logo from "../assets/rose.jpg";

const Home3 = () => {
  return (
    <div 
      className="relative w-full h-screen bg-cover bg-center" 
      style={{ backgroundImage: "url('/assets1/98.jpg')" }}
    >
      <div className="absolute inset-0  flex flex-col items-center">
        {/* Heading at the top */}
        <div className='z-10 flex gap-20  items-center '>

        <h1 className="text-white text-[4.5vw] font-bold z-10 px-8 py-4">
  Welcome to Madhava's Art
</h1>


        {/* Logo below heading */}
        <img src={logo} alt="Logo" className="h-[10vw] w-[10vw] mt-6 z-10 rounded-full" />
        </div>
        <p className="text-[3vw] absolute left-[1vw] top-1/4 w-1/2 font-bold z-10 px-6 text-[#ffffff]">
  <span className="text-[#77ff16] text-[3.5vw]">Upgrade</span> your showrooms, hotel, cafe, and home
</p>


      </div>
    </div>
  );
};

export default Home3;
