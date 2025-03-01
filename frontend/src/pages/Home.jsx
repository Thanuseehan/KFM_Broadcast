import React from 'react'
import Navbar from '../context/Navbar'
import Header from '../components/Header'
import bgImage from '../assets/bg_img.png'  // ✅ Import the image

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center"
         style={{ backgroundImage: `url(${bgImage})` }}>  {/* ✅ Apply background via inline style */}
      <Navbar />
      <Header />
    </div>
  )
}

export default Home
