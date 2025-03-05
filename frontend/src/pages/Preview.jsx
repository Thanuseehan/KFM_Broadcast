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
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingLeft: "50px",
    paddingTop: "20px",
    color: "white",
  };

  const dropdownStyle = {
    maxWidth: "350px",
    padding: "10px",
    border: "1px solid rgba(255, 255, 255, 0.3)",
    borderRadius: "8px",
    boxShadow: "2px 2px 8px rgba(0, 0, 0, 0.1)",
    background: "rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(10px)",
    color: "white",
    textAlign: "center",
    marginTop: "10px",
    fontSize: "20px",
    fontWeight: "bold",
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
    fontSize: "24px",
    fontWeight: "bold",
  };

  const imageViewerStyle = {
    maxWidth: "80%",
    height: "auto",
    margin: "5px auto",
    borderRadius: "8px",
    boxShadow: "2px 2px 15px rgba(0, 0, 0, 0.3)",
    display: "block",
  };

  const cardStyle = {
    width: "500px",
    background: "rgba(255, 255, 255, 0.1)",
    padding: "15px",
    borderRadius: "8px",
    backdropFilter: "blur(10px)",
    border: "2px solid white",
    color: "black",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontFamily: "Arial, sans-serif",
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
    fontSize: "24px",
    fontWeight: "bold",
  };

  return (
    <div style={backgroundStyle}>
      <LiveHeader leftTitle="VM Trophy Session 3 - 2025" rightTitle="KFM Broadcast" />

      <div style={{ padding: "20px" }}>
        <h1>Welcome to the Preview Dashboard</h1>
      </div>

      <div style={dropdownStyle}>
        <h1>Preview</h1>
        <img src={assets.Bgimg} alt="Preview" style={imageViewerStyle} />
        <h1>Current BID</h1>
        <h1>y</h1>
        <h1>BID by</h1>
        <h1>d</h1>
        {timerRunning && <h1>{time} seconds</h1>}
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
