import React from "react";
import { IoMdBriefcase } from "react-icons/io";
import BackgroundPortfolio from "../assets/BackgroundPortfolio.jpg";
// import financeBackground from "../assets/financeBackgound.jpg";
import FormTemplate from "../components/FormTemplate";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div
      className="  flex flex-row items-center justify-center  bg-no-repeat bg-cover bg-center bg-fixed h-screen"
      style={{ backgroundImage: `url(${BackgroundPortfolio})` }}
    >
      <div className="flex flex-col p-5 w-[40vw] justify-center items-center border-r-2 border-gray">
        <h2 className="flex justify-center p-2 text-xl font-medium">
          Tired of keeping a track of all the stocks in your portfolio ?
        </h2>
        <div
          className="bg-gray-700 rounded-xl p-3 flex justify-center items-center space-x-2 
                cursor-pointer hover:bg-gray-900 transition-all"
        >
          <div>
            <IoMdBriefcase />
          </div>
          <Link to="/SignUp">
            <button className="font-semibold text-white">
              Create a new portfolio
            </button>
          </Link>
        </div>
        <h2 className="flex justify-center p-2 text-sm font-semibold">
          Start tracking your investments in stocks, mutual fund, gold, bank
          deposits, property...
        </h2>
      </div>

      <div className="flex flex-col p-5 w-[40vw] justify-center items-center ">
        <h2 className="flex justify-center p-2 text-xl font-medium">
          Existing User ?
        </h2>
        <div
          className="bg-gray-700 rounded-xl p-3 flex justify-center items-center space-x-2 
                cursor-pointer hover:bg-gray-900 transition-all"
        >
          <div>
            <IoMdBriefcase />
          </div>
          <Link to="/Login" >
            <button className="font-medium text-white">
              Welcome to Portfolio 
            </button>
          </Link>
        </div>
        <h2 className="flex justify-center p-2 text-sm font-semibold">
          Get real time trading updates of the day's profit and loss.
        </h2>
      </div>
    </div>
  );
}

export default Welcome;
