import React from 'react'


const LiveHeader = ({title}) => {
    const headerStyle = {
        width: "100%",
        backgroundColor: "#ffffff",
        color: "black",
        textAlign: "center",
        padding: "15px",
        fontSize: "24px",
        fontWeight: "bold",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1000,
      };
    
      return <div style={headerStyle}>{title}</div>;
    };
    
    

export default LiveHeader
