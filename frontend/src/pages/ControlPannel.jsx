import React, { useState } from "react";
import { TimerProvider, useTimer } from "./TimerContext"; // Ensure correct path

const samplePlayers = [
  {
    key: 2,
    playerName: "C Sanjai",
    playerType: "Batsman",
    age: 23,
    basePrice: 1500,
    battingStyle: "Right-hand",
    bowlingStyle: "N/A",
    originTeam: "Western Sports Club",
    previousTournament: "KPL 2024",
    imageUrl: "./images/K1.png",
  },
  {
    key: 6,
    playerName: "Karshan",
    playerType: "All Rounder",
    age: 29,
    basePrice: 1500,
    battingStyle: "Right-hand",
    bowlingStyle: "Right-hand",
    originTeam: "Young Rovers",
    previousTournament: "KPL 2024",
    imageUrl: "https://via.placeholder.com/100",
  },
  {
    key: 7,
    playerName: "Sam",
    playerType: "All Rounder",
    age: 25,
    basePrice: 1600,
    battingStyle: "Left-hand",
    bowlingStyle: "Right-hand",
    originTeam: "Young Rovers",
    previousTournament: "KPL 2024",
    imageUrl: "https://via.placeholder.com/100",
  },
  {
    key: 8,
    playerName: "Krishna",
    playerType: "All Rounder",
    age: 27,
    basePrice: 1200,
    battingStyle: "Right-hand",
    bowlingStyle: "Right-hand",
    originTeam: "Young Rovers",
    previousTournament: "KPL 2024",
    imageUrl: "https://via.placeholder.com/100",
  },
  {
    key: 9,
    playerName: "Rujithan",
    playerType: "Batsman",
    age: 24,
    basePrice: 1000,
    battingStyle: "Right-hand",
    bowlingStyle: "Right-hand",
    originTeam: "Young Rovers",
    previousTournament: "N/A",
    imageUrl: "https://via.placeholder.com/100",
  },
  {
    key: 11,
    playerName: "Pavitharan",
    playerType: "Bowler",
    age: 17,
    basePrice: 1000,
    battingStyle: "N/A",
    bowlingStyle: "Right-hand",
    originTeam: "Young Rovers",
    previousTournament: "N/A",
    imageUrl: "https://via.placeholder.com/100",
  },
  {
    key: 12,
    playerName: "M Paviraj",
    playerType: "All Rounder",
    age: 35,
    basePrice: 6000,
    battingStyle: "Right-hand",
    bowlingStyle: "Right-hand",
    originTeam: "Varanam Sports Club",
    previousTournament: "KPL 2024",
    imageUrl: "https://via.placeholder.com/100",
  },
  {
    key: 13,
    playerName: "S Kajinthiran",
    playerType: "All Rounder",
    age: 36,
    basePrice: 2000,
    battingStyle: "Right-hand",
    bowlingStyle: "Right-hand",
    originTeam: "Varanam Sports Club",
    previousTournament: "KPL 2024",
    imageUrl: "https://via.placeholder.com/100",
  },
  {
    key: 14,
    playerName: "Vinupavan",
    playerType: "Batsman",
    age: 28,
    basePrice: 2000,
    battingStyle: "Right-hand",
    bowlingStyle: "N/A",
    originTeam: "Varanam Sports Club",
    previousTournament: "Cric Breath 2024",
    imageUrl: "https://via.placeholder.com/100",
  },{
    key: 15,
    playerName: "K Rokith",
    playerType: "Batsman",
    age: 17,
    basePrice: 1200,
    battingStyle: "Right-hand",
    bowlingStyle: "N/A",
    originTeam: "Varanam Sports Club",
    previousTournament: "N/A",
    imageUrl: "https://via.placeholder.com/100",
  },{
    key: 16,
    playerName: "A Kemaraj",
    playerType: "Batsman",
    age: 21,
    basePrice: 1000,
    battingStyle: "Right-hand",
    bowlingStyle: "N/A",
    originTeam: "Varanam Sports Club",
    previousTournament: "Cric Breath 2024",
    imageUrl: "https://via.placeholder.com/100",
  },{
    key: 17,
    playerName: "G Sanujan",
    playerType: "Batsman",
    age: 22,
    basePrice: 1000,
    battingStyle: "Right-hand",
    bowlingStyle: "N/A",
    originTeam: "Varanam Sports Club",
    previousTournament: "KPL 2024",
    imageUrl: "https://via.placeholder.com/100",
  },{
    key: 18,
    playerName: "Mathujan",
    playerType: "Batsman",
    age: 23,
    basePrice: 1200,
    battingStyle: "Right-hand",
    bowlingStyle: "N/A",
    originTeam: "Varanam Sports Club",
    previousTournament: "KPL 2024",
    imageUrl: "https://via.placeholder.com/100",
  },{
    key: 19,
    playerName: "Kovi",
    playerType: "Batsman",
    age: 21,
    basePrice: 1200,
    battingStyle: "Right-hand",
    bowlingStyle: "N/A",
    originTeam: "Varanam Sports Club",
    previousTournament: "KPL 2024",
    imageUrl: "https://via.placeholder.com/100",
  },{
    key: 20,
    playerName: "Karishrathan",
    playerType: "Batsman",
    age: 25,
    basePrice: 1000,
    battingStyle: "Right-hand",
    bowlingStyle: "N/A",
    originTeam: "Varanam Sports Club",
    previousTournament: "KPL 2024",
    imageUrl: "https://via.placeholder.com/100",
  },{
    key: 21,
    playerName: "Jenu",
    playerType: "All Rounder",
    age: 28, //need to change
    basePrice: 1200,
    battingStyle: "Right-hand",
    bowlingStyle: "Right-hand",
    originTeam: "Varanam Sports Club",
    previousTournament: "KPL 2024",
    imageUrl: "https://via.placeholder.com/100",
  },{
    key: 24,
    playerName: "Sajeev",
    playerType: "Bowler",
    age: 39, //need to change
    basePrice: 2000,
    battingStyle: "Right-hand",
    bowlingStyle: "N/A",
    originTeam: "Everady Sports Club",
    previousTournament: "KPL 2024",
    imageUrl: "https://via.placeholder.com/100",
  },{
    key: 26,
    playerName: "Loveshan",
    playerType: "Batsman",
    age: 23,
    basePrice: 2000,
    battingStyle: "Right-hand",
    bowlingStyle: "N/A",
    originTeam: "Everady Sports Club",
    previousTournament: "KPL 2024",
    imageUrl: "https://via.placeholder.com/100",
  },{
    key: 27,
    playerName: "Dhushanth",
    playerType: "Bowler",
    age: 40,
    basePrice: 1200,
    battingStyle: "N/A",
    bowlingStyle: "Right-hand",
    originTeam: "Everady Sports Club",
    previousTournament: "KPL 2024",
    imageUrl: "https://via.placeholder.com/100",
  },{
    key: 28,
    playerName: "Kirishanth",
    playerType: "All Rounder",
    age: 34,
    basePrice: 1600,
    battingStyle: "Right-hand",
    bowlingStyle: "Right-hand",
    originTeam: "Everady Sports Club",
    previousTournament: "KPL 2024",
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
  const [selectedValue, setSelectedValue] = useState("");

  const { time, timerRunning, startTimer, stopTimer, resetTimer } = useTimer();
  

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = samplePlayers.filter((player) =>
      player.playerName.toLowerCase().includes(term)
    );
    setFilteredPlayers(filtered);
  };

  const handleSelectPlayer = (player) => {
    setFormData(player);
    setSearchTerm(player.playerName);
    setFilteredPlayers([]);
  };

  const handleButtonClick = (value) => {
    setSelectedValue(value);
  };

  


  return (
    <div className="wrapper">
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
              <button className="display-button">Display</button>

            </div>
            
          )}
        </form>
      </div>



     
      <div className="dropdown-row">
  {/* First Dropdown Container */}
  <div className="dropdown-container">
    <h3>Adding Points</h3>
    <select value={selectedValue} onChange={(e) => setSelectedValue(e.target.value)}>
      <option value="">Select</option>
    </select>
    <div className="button-group">
      {[1000, 2000, 3000, 5000].map((val) => (
        <button key={val} type="button" onClick={() => handleButtonClick(val)}>
          {val}
        </button>
      ))}
    </div>
    <button className="add-button">Add</button>
  </div>

  {/* Second Dropdown Container */}
  <div className="dropdown-container">
  <h3>Price</h3>
  
  {/* Dropdown */}
  <select value={selectedValue} onChange={(e) => setSelectedValue(e.target.value)}>
    <option value="">Select</option>
  </select>

  {/* Value Buttons */}
  <div className="button-group">
    {[50, 100, 200, 500, 1000].map((val) => (
      <button key={val} type="button" onClick={() => handleButtonClick(val)}>
        {val}
      </button>
    ))}
  </div>

    {/* Extra 6 Buttons */}
    <div className="button-group">
      {["Button 1", "Button 2", "Button 3", "Button 4", "Button 5", "Button 6"].map((label, index) => (
        <button key={index} type="button" onClick={() => /*handleExtraButtonClick*/(label)}>
          {label}
        </button>
      ))}
    </div>



    {/* Add Button */}
    <button className="add-button">Add</button>
  </div>

{/* third Dropdown Container */}
  <div className="dropdown-container">
      
      <div className="status-container">
        <label>Status:</label>
        <select value={selectedValue} onChange={(e) => setSelectedValue(e.target.value)}>
        <option value="">Select</option>
        </select>
        <div >
          <button className="add-button">Sold</button>
          <button className="add-button">Unsold</button>
        </div>
      </div>


      
  

    </div>

    {/* Timer Section */}
    <div className="dropdown-container">
          <label>Timer: {time} seconds</label>
          <div className="timer-buttons">
            <button className="add-button" onClick={startTimer} disabled={timerRunning}>
              Start
            </button>
            <button className="add-button" onClick={stopTimer}>End</button>
            <button className="add-button" onClick={resetTimer}>Reset</button>
          </div>
        </div>
    
    </div>





      <style>
        {`
          .wrapper {
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            padding: 20px;
          }

          .container {
            max-width: 350px;
            padding: 15px;
            border: 1px solid #ddd;
            border-radius: 8px;
            box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
            font-family: Arial, sans-serif;
            margin-right: 20px;
          }

          h2 {
            text-align: center;
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
            max-height: 90px;
            max-width:10px /* Reduced height */
            overflow-y: auto;
            border: 1px solid #ddd;
            margin-bottom: 10px;
            border-radius: 4px;
            background: white;
            position: absolute;
            width: 20%;
            z-index: 1;
            font-size: 12px; /* Smaller font */
          }

          .search-results li {
            padding: 4px; /* Less padding */
            cursor: pointer;
            font-size: 12px; /* Reduced text size */
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
            
          .select-button {
            flex: 1;
            margin: 0 5px;
            padding: 6px;
            font-size: 14px;
            border: none;
            border-radius: 4px;
            background-color: #007bff;
            color: white;
            cursor: pointer;
            transition: 0.2s ease;
          }

          .select-button:hover {
            background-color: #0056b3;
          }

          .select-button.active {
            background-color: #28a745; /* Green for selected button */
          }

          .add-button,
          .display-button {
            width: 100%;
            padding: 8px;
            margin-top: 10px;
            border: none;
            border-radius: 4px;
            background-color: #28a745;
            color: white;
            cursor: pointer;
          }

          .display-button {
            background-color: #17a2b8;
          }

          .add-button:hover {
            background-color: #218838;
          }

          .display-button:hover {
            background-color: #138496;
          }
        `}
      </style>
    </div>
  );
};
const App = () => (
  <TimerProvider>
    <ControlPanel />
  </TimerProvider>
);

export default ControlPanel;
