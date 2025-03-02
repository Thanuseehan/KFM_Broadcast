import React, { useState } from "react";
import Navbar from "../context/Navbar";

const PlayerDetails = () => {
  const [players, setPlayers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [formData, setFormData] = useState({
    key: "",
    playerName: "",
    playerType: "",
    age: "",
    basePrice: "",
    battingStyle: "",
    bowlingStyle: "",
    originTeam: "",
    previousTournament: "",
    profilePicture: null,
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle profile picture upload
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, profilePicture: URL.createObjectURL(file) });
    }
  };

  // Insert player
  const handleInsert = () => {
    setPlayers([...players, { ...formData, id: Date.now() }]);
    setFormData({
      key: "",
      playerName: "",
      playerType: "",
      age: "",
      basePrice: "",
      battingStyle: "",
      bowlingStyle: "",
      originTeam: "",
      previousTournament: "",
      profilePicture: null,
    });
  };

  // Delete player
  const handleDelete = (id) => {
    setPlayers(players.filter((player) => player.id !== id));
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-400 to-red-600 text-white">
      <Navbar />

      {/* Page Title */}
      <div className="flex flex-col items-center pt-12">
        <h1 className="text-3xl font-bold mb-6">Player Details</h1>
      </div>

      {/* Form Section */}
      <div className="max-w-3xl mx-auto bg-gray-900 p-6 rounded-lg shadow-md">
        <div className="grid grid-cols-2 gap-4">
          {[
            { label: "Key", name: "key", type: "text" },
            { label: "Player Name", name: "playerName", type: "text" },
            { label: "Player Type", name: "playerType", type: "text" },
            { label: "Age", name: "age", type: "number" },
            { label: "Base Price", name: "basePrice", type: "number" },
            { label: "Batting Style", name: "battingStyle", type: "text" },
            { label: "Bowling Style", name: "bowlingStyle", type: "text" },
            { label: "Origin Team", name: "originTeam", type: "text" },
            { label: "Previous Tournament", name: "previousTournament", type: "text" },
          ].map((field) => (
            <div key={field.name} className="flex flex-col">
              <label className="text-sm font-semibold mb-1">{field.label}</label>
              <input
                type={field.type}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                className="p-2 rounded bg-gray-800 text-white focus:outline-none"
              />
            </div>
          ))}

          {/* Profile Picture Upload */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold mb-1">Profile Picture</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="p-2 bg-gray-800 text-white rounded"
            />
            {formData.profilePicture && (
              <img
                src={formData.profilePicture}
                alt="Profile Preview"
                className="w-20 h-20 mt-2 rounded-full border-2 border-gray-500"
              />
            )}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-center space-x-4 mt-6">
          <button
            onClick={handleInsert}
            className="bg-green-500 px-4 py-2 rounded-lg hover:bg-green-600 transition-all"
          >
            Insert
          </button>
          <button className="bg-yellow-500 px-4 py-2 rounded-lg hover:bg-yellow-600 transition-all">
            Update
          </button>
          <button className="bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600 transition-all">
            Delete
          </button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="max-w-3xl mx-auto mt-6">
        <input
          type="text"
          placeholder="Search Player Name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none"
        />
      </div>

      {/* Data Grid View */}
      <div className="max-w-4xl mx-auto mt-10">
        <h2 className="text-xl font-semibold mb-4 text-center">Player List</h2>
        <table className="w-full bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg">
          <thead className="bg-gray-700">
            <tr>
              {[
                "Key",
                "Player Name",
                "Player Type",
                "Age",
                "Base Price",
                "Batting Style",
                "Bowling Style",
                "Origin Team",
                "Previous Tournament",
                "Profile Picture",
                "Actions",
              ].map((heading) => (
                <th key={heading} className="py-3 px-4">
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {players.length > 0 ? (
              players
                .filter((player) =>
                  player.playerName.toLowerCase().includes(searchQuery.toLowerCase())
                )
                .map((player) => (
                  <tr key={player.id} className="border-t border-gray-600">
                    <td className="py-3 px-4">{player.key}</td>
                    <td className="py-3 px-4">{player.playerName}</td>
                    <td className="py-3 px-4">{player.playerType}</td>
                    <td className="py-3 px-4">{player.age}</td>
                    <td className="py-3 px-4">{player.basePrice}</td>
                    <td className="py-3 px-4">{player.battingStyle}</td>
                    <td className="py-3 px-4">{player.bowlingStyle}</td>
                    <td className="py-3 px-4">{player.originTeam}</td>
                    <td className="py-3 px-4">{player.previousTournament}</td>
                    <td className="py-3 px-4">
                      {player.profilePicture ? (
                        <img
                          src={player.profilePicture}
                          alt="Profile"
                          className="w-10 h-10 rounded-full"
                        />
                      ) : (
                        "N/A"
                      )}
                    </td>
                    <td className="py-3 px-4">
                      <button
                        onClick={() => handleDelete(player.id)}
                        className="bg-red-500 px-2 py-1 rounded hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
            ) : (
              <tr>
                <td colSpan="11" className="text-center py-4 text-gray-400">
                  No players added yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PlayerDetails;
