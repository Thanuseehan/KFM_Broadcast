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
    flexDirection: "column",
    justifyContent: "flex-start", // Aligns content to the top-left
    alignItems: "flex-start", // Aligns items to the left
    paddingLeft: "50px", // Adds spacing from the left
    paddingTop: "20px", // Adds spacing from the top
    color: "white",
  };

  const dropdownStyle = {
    maxWidth: "350px",
    padding: "15px",
    border: "1px solid rgba(255, 255, 255, 0.3)",
    borderRadius: "8px",
    boxShadow: "2px 2px 8px rgba(0, 0, 0, 0.1)",
    background: "rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(10px)",
    color: "white",
    textAlign: "center",
    marginTop: "20px",
  };

  const dropdownStyleRight = {
    maxWidth: "350px",
    padding: "15px",
    border: "1px solid rgba(255, 255, 255, 0.3)",
    borderRadius: "8px",
    boxShadow: "2px 2px 8px rgba(0, 0, 0, 0.1)",
    background: "rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(10px)",
    color: "white",
    textAlign: "center",
    marginTop: "20px",
  };

  const imageViewerStyle = {
    maxWidth: "80%", // Controls max width of the image
    height: "auto", // Adjusts height according to the aspect ratio
    margin: "20px 0",
    borderRadius: "8px", // Adds rounded corners to the image
    boxShadow: "2px 2px 15px rgba(0, 0, 0, 0.3)", // Adds a shadow for a 3D effect
  };

  const imageContainerStyle = {
    display: "flex",
    justifyContent: "flex-start", // Aligns horizontally at the start (left)
    alignItems: "flex-start", // Aligns vertically at the top
    flexDirection: "column", // Stacks children vertically
    height: "auto", // Ensure the container height fits the content
  };

  return (
    <div style={backgroundStyle}>
      <LiveHeader leftTitle="VM Trophy Session 3 - 2025" rightTitle="KFM Broadcast" />

      <div style={{ padding: "20px" }}>
        <h1>Welcome to the Preview Dashboard</h1>
      </div>

      {/* Left-Aligned Dropdown Section */}
      <div style={dropdownStyle}>
      <h1>Preview</h1>
        <div style={imageContainerStyle}>
          <img src={assets.Bgimg} alt="Preview" style={imageViewerStyle} />
        </div>
        <h1>Current BID</h1>
        <h1>y</h1>
        <h1>BID by</h1>
        <h1>d</h1>

        <h1>{time} seconds</h1>
      </div>
      
      <div>
      <div style={dropdownStyleRight}>
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

        
        
      </div>



     

  );
};

export default Preview;
