import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../context/Navbar";

const Dashboard = () => {
  const navigate = useNavigate();

  const adminPanelButtons = [
    { name: "Player Details", path: "/PlayerDetails" },
    { name: "Control Panel", path: "/ControlPannel", popup: true }, // Only this will open as a popup
  ];

  const streamPanelButtons = [
    { name: "New Teams", path: "/newteams" },
    { name: "Player Status", path: "/playerstatus" },
    { name: "Points Details", path: "/pointsdetails" },
    { name: "Preview", path: "/preview" },
    { name: "Teams and Members", path: "/teamandmembers" },
    { name: "Team Points Details", path: "/teampointsdetails" },
    { name: "Top Buys", path: "/topbuys" },
  ];

  const specialButtons = [
    { name: "Home", path: "/" },
    { name: "Reset Password", path: "/resetpassword" },
  ];

  // Function to handle button clicks
  const handleButtonClick = (btn) => {
    if (btn.popup) {
      // Open Control Panel in a popup window
      window.open(btn.path, "_blank", "width=800,height=600,top=100,left=200");
    } else if (streamPanelButtons.some((item) => item.path === btn.path)) {
      // Open Stream Panel pages in a new tab
      window.open(btn.path, "_blank");
    } else {
      // Navigate normally for other buttons
      navigate(btn.path);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-400 to-red-600">
      {/* Fixed Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex flex-col items-center pt-32 px-6 sm:px-12 pb-24 text-center">
        <h1 className="text-3xl font-bold mb-8 text-white">Dashboard</h1>

        {/* Admin Panel */}
        <h2 className="text-xl font-semibold mb-4 text-white">Admin Panel</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          {adminPanelButtons.map((btn) => (
            <button
              key={btn.name}
              onClick={() => handleButtonClick(btn)}
              className="bg-red-500 text-white py-3 px-6 rounded-lg shadow-md hover:bg-red-600 transition-all w-56"
            >
              {btn.name}
            </button>
          ))}
        </div>

        {/* Separator */}
        <div className="w-full flex justify-center">
          <hr className="border-gray-300 w-3/4 mb-8" />
        </div>

        {/* Stream Panel */}
        <h2 className="text-xl font-semibold mb-4 text-white">Stream Panel</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {streamPanelButtons.map((btn) => (
            <button
              key={btn.name}
              onClick={() => handleButtonClick(btn)}
              className="bg-blue-500 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-600 transition-all w-56"
            >
              {btn.name}
            </button>
          ))}
        </div>
      </div>

      {/* Sticky Footer for Special Buttons */}
      <div className="fixed bottom-0 left-0 w-full bg-gray-900 py-6 flex justify-center space-x-6">
        {specialButtons.map((btn) => (
          <button
            key={btn.name}
            onClick={() => navigate(btn.path)}
            className="bg-green-500 text-white py-3 px-6 rounded-lg shadow-md hover:bg-green-600 transition-all w-56"
          >
            {btn.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
