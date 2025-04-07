import React, { useState } from "react";

interface SearchBarProps {
  isDarkMode: boolean;
  onSearch: (username: string) => Promise<boolean>; // Returns a boolean indicating success
}

const SearchBar: React.FC<SearchBarProps> = ({ isDarkMode, onSearch }) => {
  const [username, setUsername] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(""); // Clear any previous error

    if (username.trim()) {
      const found = await onSearch(username);
      if (!found) {
        setErrorMessage("No result");
      }
    }
  };

  return (
    <div className="flex justify-center items-start mt-[20px]">
      {/* Search Bar */}
      <form
        onSubmit={handleSubmit}
        className={`w-[730px] h-[69px] shadow-lg rounded-lg flex items-center px-4 transition-colors duration-300 relative  
        ${isDarkMode ? "bg-[#1E2A47]" : "bg-[#FEFEFE]"}`}
      >
        {/* Search Icon */}
        <img
          src="assets/icon-search.svg"
          alt="Search Icon"
          className="w-[24.06px] h-[24px] text-app-blue mr-4"
          width="24.06"
          height="24"
        />

        {/* Search Input */}
        <input
          type="text"
          placeholder="Search Github username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className={`h3 flex-1 bg-transparent outline-none transition-colors duration-300 
            ${isDarkMode ? "text-white placeholder-white" : "text-black placeholder-gray-500"}`}
        />

        {/* Error Notification (Positioned to the Extreme Right) */}
        {errorMessage && (
          <h4 className="absolute right-[150px] text-[#F74646] text-sm">
            {errorMessage}
          </h4>
        )}

        {/* Search Button */}
        <button
          type="submit"
          className="w-[106px] h-[50px] bg-app-blue text-white rounded-lg flex justify-center items-center ml-4"
        >
          <h3>Search</h3>
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
