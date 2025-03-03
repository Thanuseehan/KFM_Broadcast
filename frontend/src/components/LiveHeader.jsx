import React from "react";

const LiveHeader = ({ leftTitle, rightTitle }) => {
  const headerStyle = {
    width: "100%",
    background: "rgba(255, 255, 255, 0.2)", // Glass effect background
    backdropFilter: "blur(10px)", // Blur effect
    WebkitBackdropFilter: "blur(10px)", // Safari support
    color: "#ffffff", // White text
    display: "flex",
    justifyContent: "center", // Center text
    alignItems: "center",
    padding: "15px 30px",
    fontSize: "33px",
    fontWeight: "bold",
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 1000,
    textAlign: "center",
    borderBottom: "2px solid rgba(255, 255, 255, 0.5)", // Subtle border
  };

  const rightHeaderStyle = {
    position: "fixed",
    top: 0,
    right: 0,
    height: "100vh", // Full height of the screen
    width: "70px", // Adjust width
    background: "rgba(255, 255, 255, 0.2)", // Glass effect background
    backdropFilter: "blur(10px)", // Blur effect
    WebkitBackdropFilter: "blur(10px)", // Safari support
    color: "#ffffff", // White text
    fontSize: "42px", // Increased font size
    fontWeight: "bold",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    writingMode: "vertical-rl", // Makes text vertical
    textOrientation: "upright", // Ensures proper text orientation
    borderLeft: "2px solid rgba(255, 255, 255, 0.5)", // Subtle border
    textAlign: "center",
  };

  return (
    <>
      <div style={headerStyle}>
        {leftTitle}
      </div>
      <div style={rightHeaderStyle}>{rightTitle}</div>
    </>
  );
};

export default LiveHeader;
