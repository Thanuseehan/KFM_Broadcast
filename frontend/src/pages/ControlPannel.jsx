import React, { useState, useRef } from "react";

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
  const [selectedValue, setSelectedValue] = useState("");
  const [time, setTime] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);
  const timerRef = useRef(null);

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

  const startTimer = () => {
    if (!timerRunning) {
      setTimerRunning(true);
      setTime(12); // Reset to 12 seconds before starting
      timerRef.current = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(timerRef.current);
            setTimerRunning(false);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    }
  };

  const stopTimer = () => {
    setTimerRunning(false);
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  const resetTimer = () => {
    setTime(12);
    setTimerRunning(false);
    clearInterval(timerRef.current);
    timerRef.current = null;
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
        <button key={index} type="button" onClick={() => handleExtraButtonClick(label)}>
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


export default ControlPanel;
