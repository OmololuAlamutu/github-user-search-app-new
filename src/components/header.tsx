import React from "react";

interface HeaderProps {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <div
    className={`w-full h-[38px] flex justify-between items-center px-4 sm:px-2 transition-colors duration-300 ${
      isDarkMode ? "bg-[#141D2F]" : "bg-[#FEFEFE]"
    }`}
  >
      <h1 className={`${isDarkMode ? "text-white" : "text-dark"}`}>devfinder</h1>
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => setIsDarkMode(!isDarkMode)}
      >
        <span className={`${isDarkMode ? "text-white" : "text-dark"}`}>
          {isDarkMode ? "Light" : "Dark"}
        </span>
        <img 
          src={isDarkMode ? "/assets/icon-sun.svg" : "/assets/icon-moon.svg"} 
          alt={isDarkMode ? "Sun Icon" : "Moon Icon"} 
          className="w-5 h-5" 
          width="20" 
          height="20"
        />
      </div>
    </div>
  );
};

export default Header;