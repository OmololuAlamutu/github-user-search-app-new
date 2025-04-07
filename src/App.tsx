import React, { useState } from "react";
import Header from "./components/header";
import SearchBar from "./components/searchBar";
import { Result } from "./components/result";

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });
  const [userData, setUserData] = useState<any>(null);

  const handleSearch = async (username: string): Promise<boolean>  => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) {
        return false; // User not found
      }
      const data = await response.json();
    setUserData(data);
    return true;
  } catch (error) {
    return false;
  }
};

  return (
    <div
      className={`flex flex-col items-center min-h-screen transition-colors duration-300 ${isDarkMode ? "bg-[#141D2F]" : "bg-[#F6F8FF]"
        }`}
    >
      {/* Wrapper for consistent width & alignment */}
      <div className="container mx-auto px-4 mt-20">
        <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        <SearchBar isDarkMode={isDarkMode} onSearch={handleSearch} />
        {userData && (
          <Result isDarkMode={isDarkMode} userData={userData} />
        )}
      </div>
    </div>
  );
};

export default App;