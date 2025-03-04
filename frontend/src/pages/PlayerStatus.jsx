import React from 'react'
import { assets } from "../assets/assets"; // Ensure correct path
import LiveHeader from "../components/LiveHeader"

const PlayerStatus = () => {

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
          <LiveHeader leftTitle="VM Trophy Session 3 - 2025" rightTitle="KFM Broadcast" />
    
          <div style={{ marginTop: "100px", padding: "20px", color: "white", textAlign: "center" }}>
            <h1>Welcome to the Preview Dashboard</h1>
          </div>
    
          {/* Centered Image at Bottom */}
        </div>
      );
  }


export default PlayerStatus
