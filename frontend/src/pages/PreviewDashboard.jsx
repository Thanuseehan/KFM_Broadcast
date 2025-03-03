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
  };

  return (
    <div style={backgroundStyle}>
<LiveHeader leftTitle="VM Trophy Session 3 - 2025" rightTitle="Powered by KFM" />
<div style={{ marginTop: "60px", padding: "20px", color: "white" }}>
        <h1>Welcome to the Preview Dashboard</h1>
      </div>
    </div>
  );
};

export default PreviewDashboard;
