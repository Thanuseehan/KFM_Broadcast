import React, { useState } from "react";

const samplePlayers = [
  {
    key: 1,
    playerName: "Virat Kohli",
    playerType: "Batsman",
    age: 35,
    basePrice: "10M",
    battingStyle: "Right-hand",
    bowlingStyle: "Medium Pace",
    originTeam: "RCB",
    previousTournament: "IPL 2023",
    imageUrl: "https://via.placeholder.com/100",
  },
  {
    key: 2,
    playerName: "MS Dhoni",
    playerType: "Wicketkeeper",
    age: 42,
    basePrice: "8M",
    battingStyle: "Right-hand",
    bowlingStyle: "Off Spin",
    originTeam: "CSK",
    previousTournament: "IPL 2023",
    imageUrl: "https://via.placeholder.com/100",
  },
];

const ControlPanel = () => {
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
    imageUrl: "",
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPlayers, setFilteredPlayers] = useState(samplePlayers);
  const [selectedValue, setSelectedValue] = useState(""); // Dropdown remains empty

  // Handle search input change
  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = samplePlayers.filter((player) =>
      player.playerName.toLowerCase().includes(term)
    );
    setFilteredPlayers(filtered);
  };

  // Handle selecting a player from search results
  const handleSelectPlayer = (player) => {
    setFormData(player);
    setSearchTerm(player.playerName);
  };

  // Handle button clicks to set dropdown value
  const handleButtonClick = (value) => {
    setSelectedValue(value);
  };

  return (
    <div>
      {/* Player Info Container */}
      <div className="container">
        <h2>Player Details</h2>

        {/* Live Search */}
        <input
          type="text"
          placeholder="Search Player..."
          value={searchTerm}
          onChange={handleSearch}
          className="search-box"
        />

        {/* Search Results */}
        {searchTerm && (
          <ul className="search-results">
            {filteredPlayers.map((player) => (
              <li key={player.key} onClick={() => handleSelectPlayer(player)}>
                {player.playerName} - {player.playerType}
              </li>
            ))}
          </ul>
        )}

        {/* Player Form (Read-Only Fields) */}
        <form className="form">
          {Object.keys(formData).map(
            (field, index) =>
              field !== "imageUrl" && (
                <div className="form-group" key={index}>
                  <label>{field.replace(/([A-Z])/g, " $1").trim()}:</label>
                  <input type="text" value={formData[field]} disabled />
                </div>
              )
          )}

          {/* Image Preview */}
          {formData.imageUrl && (
            <div className="form-group">
              <label>Player Image:</label>
              <img src={formData.imageUrl} alt="Preview" className="preview-img" />
            </div>
          )}
        </form>
      </div>

      {/* Separate Container for Dropdown & Buttons */}
      <div className="dropdown-container">
        <h3>Adding Points</h3>

        {/* Dropdown Box (Initially Empty) */}
        <select value={selectedValue} onChange={(e) => setSelectedValue(e.target.value)}>
          <option value="">Select</option>
        </select>

        {/* Buttons to Select Dropdown Value */}
        <div className="button-group">
          {[1000, 2000, 3000, 5000].map((val) => (
            <button key={val} type="button" onClick={() => handleButtonClick(val)}>
              {val}
            </button>
          ))}
        </div>
      </div>

      <style>
        {`
          .container {
            max-width: 350px;
            margin: auto;
            padding: 15px;
            border: 1px solid #ddd;
            border-radius: 8px;
            box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
            font-family: Arial, sans-serif;
          }
          .search-box {
            width: 100%;
            padding: 6px;
            margin-bottom: 10px;
            border: 1px solid #ccc;
            border-radius: 4px;
          }
          .search-results {
            list-style: none;
            padding: 0;
            max-height: 100px;
            overflow-y: auto;
            border: 1px solid #ddd;
            margin-bottom: 10px;
            border-radius: 4px;
            background: white;
            position: absolute;
            width: 100%;
            z-index: 1;
          }
          .search-results li {
            padding: 5px;
            cursor: pointer;
            font-size: 14px;
          }
          .search-results li:hover {
            background-color: #f0f0f0;
          }
          .form {
            display: flex;
            flex-direction: column;
          }
          .form-group {
            margin-bottom: 8px;
          }
          label {
            font-size: 14px;
            font-weight: bold;
          }
          input {
            width: 100%;
            padding: 5px;
            font-size: 12px;
            border: 1px solid #ccc;
            border-radius: 4px;
            background-color: #f5f5f5;
            cursor: not-allowed;
          }
          .preview-img {
            width: 100px;
            height: 100px;
            object-fit: cover;
            margin-top: 8px;
            border: 1px solid #ddd;
            border-radius: 4px;
          }

          /* Dropdown Section */
          .dropdown-container {
            max-width: 350px;
            margin: auto;
            margin-top: 20px;
            padding: 15px;
            border: 1px solid #ddd;
            border-radius: 8px;
            box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
            background-color: #f9f9f9;
            text-align: center;
          }
          select {
            width: 100%;
            padding: 6px;
            border: 1px solid #ccc;
            border-radius: 4px;
          }
          .button-group {
            display: flex;
            justify-content: space-between;
            margin-top: 10px;
          }
          .button-group button {
            flex: 1;
            margin: 0 5px;
            padding: 6px;
            font-size: 14px;
            border: none;
            border-radius: 4px;
            background-color: #007bff;
            color: white;
            cursor: pointer;
          }
          .button-group button:hover {
            background-color: #0056b3;
          }
        `}
      </style>
    </div>
  );
};

export default ControlPanel;
