import React from "react";
import LiveHeader from "../components/LiveHeader"; // Adjust path if needed
import { assets } from "../assets/assets"; // Ensure correct path

const PreviewDashboard = () => {
  const backgroundStyle = {
    backgroundImage: `url(${assets.Bgimg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    position: "relative", // Needed for absolute positioning of image
  };

  const imageStyle = {
    position: "absolute",  
    bottom: "20px",        
    left: "50%",           
    transform: "translateX(-50%)",  
    width: "1400px",        
    height: "750px",
  };

  return (
    <div style={backgroundStyle}>
      <LiveHeader leftTitle="VM Trophy Session 3 - 2025" rightTitle="KFM Broadcast" />

      <div style={{ marginTop: "100px", padding: "20px", color: "white", textAlign: "center" }}>
        <h1>Welcome to the Preview Dashboard</h1>
      </div>

      {/* Centered Image at Bottom */}
      <img src={assets.lgs} alt="LGS Image" style={imageStyle} />
    </div>
  );
};

export default PreviewDashboard;
