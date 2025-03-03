import React from "react";
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
  };

  return (
    <div style={backgroundStyle}>
    </div>
  );
};

export default PreviewDashboard;
