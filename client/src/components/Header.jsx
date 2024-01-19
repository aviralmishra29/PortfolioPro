import React from "react";
import Logo from "../assets/Logo.jpeg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="bg-[#5c5f61] text-white text-[7vh] h-[10vh] flex items-center justify-center sticky top-0">
        <Link to='/' >
           <img className="h-[8vh] w-[16vw] " src={Logo} alt="Logo"/> 
        </Link>
      </div>
    </>
  );
};

export default Header;