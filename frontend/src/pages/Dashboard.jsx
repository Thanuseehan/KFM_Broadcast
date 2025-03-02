import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../context/Navbar";

const Dashboard = () => {
  const navigate = useNavigate();

  // Admin Panel Buttons
  const adminPanelButtons = [
    { name: "Player Details", path: "/PlayerDetails" },
    { name: "Control Panel", path: "/ControlPannel" },
  ];

  // Stream Panel Buttons
  const streamPanelButtons = [
    { name: "New Teams", path: "/newteams" },
    { name: "Player Status", path: "/playerstatus" },
    { name: "Points Details", path: "/pointsdetails" },
    { name: "Preview", path: "/preview" },
    { name: "Teams and Members", path: "/teamandmembers" },
    { name: "Team Points Details", path: "/teampointsdetails" },
    { name: "Top Buys", path: "/topbuys" },
  ];

  // Special Buttons (Home and Reset Password) - Moved to Bottom
  const specialButtons = [
    { name: "Home", path: "/" },
    { name: "Reset Password", path: "/resetpassword" },
  ];

  return (
    <div className="flex flex-col min-h-screen px-6 sm:px-0 bg-gradient-to-br from-blue-400 to-red-600">
      <Navbar />

      <div className="flex-grow p-6 text-center">
        <h1 className="text-3xl font-bold mb-6 text-white">Dashboard</h1>

        {/* Admin Panel */}
        <h2 className="text-xl font-semibold mb-4 text-white">Admin Panel</h2>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {adminPanelButtons.map((btn) => (
              <button
                key={btn.name}
                onClick={() => navigate(btn.path)}
                className="bg-red-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-red-600 transition-all w-48"
              >
                {btn.name}
              </button>
            ))}
          </div>
        </div>

        {/* Centered Separator Line */}
        <div className="flex justify-center my-8">
          <hr className="border-gray-300 w-3/4" />
        </div>

        {/* Stream Panel */}
        <h2 className="text-xl font-semibold mb-4 text-white">Stream Panel</h2>
        <div className="flex justify-center">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {streamPanelButtons.map((btn) => (
              <button
                key={btn.name}
                onClick={() => navigate(btn.path)}
                className="bg-blue-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-blue-600 transition-all w-48"
              >
                {btn.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Sticky Footer for Special Buttons */}
      <div className="flex justify-center space-x-6 py-6 bg-gray-900">
        {specialButtons.map((btn) => (
          <button
            key={btn.name}
            onClick={() => navigate(btn.path)}
            className="bg-green-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-green-600 transition-all w-48"
          >
            {btn.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
