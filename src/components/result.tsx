import React from "react";

interface ResultProps {
  isDarkMode: boolean;
  userData: any;
}

export const Result: React.FC<ResultProps> = ({ isDarkMode, userData }) => {
  const formattedDate = new Date(userData.created_at)
    .toDateString()
    .split(" ")
    .slice(1)
    .join(" ");

  return (
    <div
      className={`w-full mt-6 p-6 rounded-lg shadow-lg transition-colors duration-300 
      ${isDarkMode ? "bg-[#1E2A47] text-white" : "bg-[#FEFEFE] text-black"}`}
    >
      {/* Profile Header */}
      <div className="flex gap-6">
        <img
          src={userData.avatar_url}
          alt="User Avatar"
          className="w-24 h-24 rounded-full mb-4 sm:mb-0"
        />
        <div className="flex-1">
          <div className="flex flex-col sm:flex-row sm:justify-between">
            <h1 className="text-xl font-semibold">{userData.name}</h1>
            <span className={`${isDarkMode ? "text-white" : "text-gray-500"}`}>Joined {formattedDate}</span>
          </div>
          <a
            href={userData.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
          >
            @{userData.login}
          </a>
          <p className={`${isDarkMode ? "text-white" : "text-gray-600"} mt-2`}>
            {userData.bio ? userData.bio : "This profile has no bio"}
          </p>

          {/* Repos, Followers, Following (Aligned) */}
          <div
            className={`w-full rounded-lg p-4 mt-6 flex justify-between 
            ${isDarkMode ? "bg-[#141D2F] text-white" : "bg-[#F6F8FF] text-black"}`}
          >
            <div className="text-center">
              <h4 className="text-sm text-gray-500">Repos</h4>
              <p className="text-lg font-bold">{userData.public_repos}</p>
            </div>
            <div className="text-center">
              <h4 className="text-sm text-gray-500">Followers</h4>
              <p className="text-lg font-bold">{userData.followers}</p>
            </div>
            <div className="text-center">
              <h4 className="text-sm text-gray-500">Following</h4>
              <p className="text-lg font-bold">{userData.following}</p>
            </div>
          </div>

          {/* Additional Info (Aligned) */}
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="flex items-center">
              <img src="/assets/icon-location.svg" alt="Location Icon" className="w-5 h-5 mr-2" />
              <span>{userData.location || "Not Available"}</span>
            </div>
            <div className="flex items-center">
              <img src="/assets/icon-twitter.svg" alt="Twitter Icon" className="w-5 h-5 mr-2" />
              <span>{userData.twitter_username ? `@${userData.twitter_username}` : "Not Available"}</span>
            </div>
            <div className="flex items-center">
              <img src="/assets/icon-website.svg" alt="Website Icon" className="w-5 h-5 mr-2" />
              <a href={userData.blog} className="text-blue-500 truncate" target="_blank" rel="noopener noreferrer">
                {userData.blog || "Not Available"}
              </a>
            </div>
            <div className="flex items-center">
              <img src="/assets/icon-company.svg" alt="Company Icon" className="w-5 h-5 mr-2" />
              <span>{userData.company || "Not Available"}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
