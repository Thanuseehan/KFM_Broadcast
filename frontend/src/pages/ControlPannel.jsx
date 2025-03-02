import React, { useState } from "react";

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
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      <h1>Control Panel Details</h1>
      <form className="form">
        <div className="form-group">
          <label>Key:</label>
          <input type="text" name="key" value={formData.key} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Player Name:</label>
          <input type="text" name="playerName" value={formData.playerName} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Player Type:</label>
          <input type="text" name="playerType" value={formData.playerType} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Age:</label>
          <input type="number" name="age" value={formData.age} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Base Price:</label>
          <input type="text" name="basePrice" value={formData.basePrice} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Batting Style:</label>
          <input type="text" name="battingStyle" value={formData.battingStyle} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Bowling Style:</label>
          <input type="text" name="bowlingStyle" value={formData.bowlingStyle} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Origin Team:</label>
          <input type="text" name="originTeam" value={formData.originTeam} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Previous Tournament:</label>
          <input type="text" name="previousTournament" value={formData.previousTournament} onChange={handleChange} />
        </div>

        <button type="submit">Submit</button>
      </form>

      <style>
        {`
          .container {
            max-width: 500px;
            margin: auto;
            padding: 20px;
            border: 1px solid #ddd;
            border-radius: 10px;
            box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
          }
          .form {
            display: flex;
            flex-direction: column;
          }
          .form-group {
            margin-bottom: 15px;
          }
          label {
            font-weight: bold;
          }
          input {
            width: 100%;
            padding: 8px;
            margin-top: 5px;
            border: 1px solid #ccc;
            border-radius: 5px;
          }
          button {
            background-color: #007bff;
            color: white;
            padding: 10px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
          }
          button:hover {
            background-color: #0056b3;
          }
        `}
      </style>
    </div>
  );
};

export default ControlPanel;
