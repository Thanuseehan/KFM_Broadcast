import React from "react";
import Navbar from "../context/Navbar";

const Dashboard = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 sm:px-0 bg-gradient-to-br from-blue-400 to-red-600">
      <Navbar />
      
      <div className="p-6 text-center">
        <h1 className="text-3xl font-bold mb-6 text-white">Dashboard</h1>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[
            "New Teams",
            "Player Details",
            "Home",
            "Player Status",
            "Points Details",
            "Preview",
            "Reset Password",
            "Teams and Members",
            "Team Point Details",
            "Top Guys",
          ].map((buttonName) => (
            <button
              key={buttonName}
              className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition-all"
            >
              {buttonName}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
