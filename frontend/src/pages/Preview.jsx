import React from "react";
import { assets } from "../assets/assets"; // Ensure correct path
import LiveHeader from "../components/LiveHeader";
import { TimerProvider, useTimer } from "./TimerContext"; // Ensure correct path
import ControlPanel from "./ControlPannel"; // Ensure correct path

const Preview = () => {
  const { time, timerRunning, startTimer, stopTimer, resetTimer } = useTimer();

  

  const backgroundStyle = {
    backgroundImage: `url(${assets.Bgimg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100vw",
    height: "100vh",
    display: "flex",
    flexDirection: "row",  // Horizontal alignment
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingLeft: "30px",  // Adjusted to move content a little left
    paddingTop: "20px",
    color: "white",
  };

  const dropdownStyle = {
    maxWidth: "450px",  // Increased width for the container
    padding: "15px",  // Increased padding for more space
    border: "1px solid rgba(255, 255, 255, 0.3)",
    borderRadius: "8px",
    boxShadow: "2px 2px 8px rgba(0, 0, 0, 0.1)",
    background: "rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(10px)",
    color: "white",
    textAlign: "center",
    marginTop: "250px",  // Keep the margin-top for positioning
    marginBottom: "10px",
    fontSize: "28px",  // Increased font size for text
    fontWeight: "bold",
    marginLeft: "10px",  // Adjusted to move container left
  };

  const dropdownStyleRight = {
    maxWidth: "450px",  // Increased width for the container
    padding: "20px",  // Increased padding for more space
    border: "1px solid rgba(255, 255, 255, 0.3)",
    borderRadius: "8px",
    boxShadow: "2px 2px 8px rgba(0, 0, 0, 0.1)",
    background: "rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(10px)",
    color: "white",
    textAlign: "center",
    marginTop: "100px",  // Adjusted margin-top for containers only
    marginBottom: "10px",
    fontSize: "24px",  // Increased font size for text
    fontWeight: "bold",
    marginLeft: "30px",  // Adjusted to move container left
  };

  const imageViewerStyle = {
    maxWidth: "100%",  // Keep width responsive
    height: "auto",
    margin: "5px auto",
    borderRadius: "50px",
    boxShadow: "2px 2px 15px rgba(0, 0, 0, 0.3)",
    display: "block",
    maxHeight: "500px", // Set a maximum height to prevent excessive scaling
  };

  const cardStyle = {
    width: "600px",  // Increased width of the card
    background: "rgba(255, 255, 255, 0.1)",
    padding: "20px",  // Increased padding inside the card
    borderRadius: "8px",
    backdropFilter: "blur(10px)",
    border: "2px solid white",
    color: "black",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontFamily: "Arial, sans-serif",
    marginTop: "250px",  // Keep margin-top for card container
    marginLeft: "20px",  // Adjusted to move container left
  };

  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "10px", 
    textAlign: "left",
  };

  const thTdStyle = {
    border: "1px solid black",
    padding: "8px",
  };

  const titleStyle = {
    fontSize: "32px",  // Increased title font size
    fontWeight: "bold",
  };

  return (
    <div style={backgroundStyle}>
      <LiveHeader leftTitle="VM Trophy Session 3 - 2025" rightTitle="KFM Broadcast" />

      <div style={{ padding: "20px" }}>
        <h1>Welcome to the Preview Dashboard</h1>
      </div>

      {/* Preview section */}
      <div style={dropdownStyle}>
        <h1>Preview</h1>
        <img src={assets.Bgimg} alt="Preview" style={imageViewerStyle} />
        <h1>Current BID</h1>
        <h1>y</h1>
        <h1>BID by</h1>
        <h1>d</h1>
        {timerRunning && <h1>{time} Seconds Left</h1>}
      </div>

      <div style={dropdownStyleRight}>
        {timerRunning && <label>Timer: {time} Seconds Left</label>}
        <div className="timer-buttons">
          <button className="add-button" onClick={startTimer} disabled={timerRunning}>
            Start
          </button>
          <button className="add-button" onClick={stopTimer}>End</button>
          <button className="add-button" onClick={resetTimer}>Reset</button>
        </div>
      </div>

      {/* Card-style table section */}
      <div style={cardStyle}>
        <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
          <h2 style={titleStyle}>Name</h2>
          <h2>Player Type</h2>
        </div>

        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thTdStyle} colSpan="2">General Information</th>
              <th style={thTdStyle} colSpan="2">Career Information</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={thTdStyle}>Age</td>
              <td style={thTdStyle}></td>
              <td style={thTdStyle}>Batting Style</td>
              <td style={thTdStyle}></td>
            </tr>
            <tr>
              <td style={thTdStyle}>Origin Team</td>
              <td style={thTdStyle}></td>
              <td style={thTdStyle}>Bowling Style</td>
              <td style={thTdStyle}></td>
            </tr>
            <tr>
              <td style={thTdStyle} colSpan="2" rowSpan="2">
                <h3>Base Price</h3>
              </td>
              <td style={thTdStyle}>Previous Tournament</td>
              <td style={thTdStyle}></td>
            </tr>
          </tbody>
        </table>

        <div style={{ marginTop: "15px", fontSize: "20px", fontWeight: "bold" }}>
          Sold / Unsold
        </div>
      </div>
    </div>
  );
};

export default Preview;
