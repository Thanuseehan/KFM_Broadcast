import React, { useState } from "react";
import Navbar from "../context/Navbar";

const PlayerDetails = () => {
  const [players, setPlayers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [formData, setFormData] = useState({
    key: "",
    playerName: "",
    playerType: "N/A",
    age: "",
    basePrice: "",
    battingStyle: "N/A",
    bowlingStyle: "N/A",
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
    if (!formData.key || !formData.playerName || !formData.age || !formData.basePrice) {
      alert("Please fill all required fields.");
      return;
    }
    setPlayers([...players, { ...formData, id: Date.now() }]);
    setFormData({
      key: "",
      playerName: "",
      playerType: "N/A",
      age: "",
      basePrice: "",
      battingStyle: "N/A",
      bowlingStyle: "N/A",
      originTeam: "",
      previousTournament: "",
      profilePicture: null,
    });
  };

  // Delete player
  const handleDelete = (id) => {
    setPlayers(players.filter((player) => player.id !== id));
  };

  // Search filter
  const filteredPlayers = players.filter((player) =>
    player.playerName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-400 to-red-600 text-white">
      <Navbar />

      {/* Page Title */}
      <div className="flex flex-col items-center pt-6">
        <h1 className="text-3xl font-bold mb-6">Player Details</h1>
      </div>

      {/* Search Box */}
      <div className="flex justify-center mb-4">
        <input
          type="text"
          placeholder="Search Player..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="p-2 w-1/2 rounded bg-gray-800 text-white focus:outline-none"
        />
      </div>

      {/* Form Section */}
      <div className="max-w-3xl mx-auto bg-wh p-6 rounded-lg shadow-md">
        <div className="grid grid-cols-2 gap-4">
          <InputField label="Key" name="key" value={formData.key} onChange={handleChange} type="number" />
          <InputField label="Player Name" name="playerName" value={formData.playerName} onChange={handleChange} type="text" />
          <SelectField label="Player Type" name="playerType" value={formData.playerType} onChange={handleChange} options={["N/A", "Batsman", "Bowler", "All-rounder"]} />
          <InputField label="Age" name="age" value={formData.age} onChange={handleChange} type="number" />
          <InputField label="Base Price" name="basePrice" value={formData.basePrice} onChange={handleChange} type="number" />
          <SelectField label="Batting Style" name="battingStyle" value={formData.battingStyle} onChange={handleChange} options={["N/A", "Right Hand", "Left Hand"]} />
          <SelectField label="Bowling Style" name="bowlingStyle" value={formData.bowlingStyle} onChange={handleChange} options={["N/A", "Right Hand", "Left Hand"]} />
          <InputField label="Origin Team" name="originTeam" value={formData.originTeam} onChange={handleChange} type="text" />
          <InputField label="Previous Tournament" name="previousTournament" value={formData.previousTournament} onChange={handleChange} type="text" />
          
          {/* Profile Picture Upload */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold mb-1">Profile Picture</label>
            <input type="file" accept="image/*" onChange={handleFileChange} className="p-2 bg-gray-800 text-white rounded" />
            {formData.profilePicture && <img src={formData.profilePicture} alt="Profile" className="w-20 h-20 mt-2 rounded-full border-2 border-gray-500" />}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-center space-x-4 mt-6">
          <button onClick={handleInsert} className="bg-green-500 px-4 py-2 rounded-lg hover:bg-green-600 transition-all">Insert</button>
        </div>
      </div>

      {/* Data Grid */}
      <div className="max-w-5xl mx-auto bg-gray-900 p-6 mt-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Player List</h2>
        <table className="w-full border-collapse border border-gray-600">
          <thead>
            <tr className="bg-gray-700">
              <th className="p-2 border border-gray-600">Key</th>
              <th className="p-2 border border-gray-600">Name</th>
              <th className="p-2 border border-gray-600">Type</th>
              <th className="p-2 border border-gray-600">Age</th>
              <th className="p-2 border border-gray-600">Price</th>
              <th className="p-2 border border-gray-600">Batting</th>
              <th className="p-2 border border-gray-600">Bowling</th>
              <th className="p-2 border border-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredPlayers.length > 0 ? (
              filteredPlayers.map((player) => (
                <tr key={player.id} className="text-center bg-gray-800">
                  <td className="p-2 border border-gray-600">{player.key}</td>
                  <td className="p-2 border border-gray-600">{player.playerName}</td>
                  <td className="p-2 border border-gray-600">{player.playerType}</td>
                  <td className="p-2 border border-gray-600">{player.age}</td>
                  <td className="p-2 border border-gray-600">{player.basePrice}</td>
                  <td className="p-2 border border-gray-600">{player.battingStyle}</td>
                  <td className="p-2 border border-gray-600">{player.bowlingStyle}</td>
                  <td className="p-2 border border-gray-600">
                    <button onClick={() => handleDelete(player.id)} className="bg-red-500 px-3 py-1 rounded hover:bg-red-600 transition-all">Delete</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr><td colSpan="8" className="text-center p-4">No players found</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const InputField = ({ label, name, value, onChange, type }) => (
  <div className="flex flex-col">
    <label className="text-sm font-semibold mb-1">{label}</label>
    <input type={type} name={name} value={value} onChange={onChange} className="p-2 rounded bg-gray-800 text-white focus:outline-none" />
  </div>
);

const SelectField = ({ label, name, value, onChange, options }) => (
  <div className="flex flex-col">
    <label className="text-sm font-semibold mb-1">{label}</label>
    <select name={name} value={value} onChange={onChange} className="p-2 rounded bg-gray-800 text-white focus:outline-none">{options.map((opt) => <option key={opt} value={opt}>{opt}</option>)}</select>
  </div>
);

export default PlayerDetails;
