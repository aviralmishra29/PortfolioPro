import React from "react";
import Logo from "../assets/Logo.jpeg";

const Header = () => {
  return (
    <>
      <div className="bg-[#5c5f61] text-white text-[7vh] h-[10vh] flex items-center justify-center sticky top-0">
        <div > <img className="h-[8vh] w-[16vw] " src={Logo} alt="Logo"/> </div>
      </div>
    </>
  );
};

export default Header;