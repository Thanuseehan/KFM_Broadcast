import React from 'react'

import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/login'
import EmailVerify from './pages/EmailVerify'
import ResetPassword from './pages/ResetPassword'
import Dashboard from './pages/Dashboard'
import Preview from './pages/Preview'
import TeamandMembers from './pages/TeamandMembers'
import NewTeams from './pages/NewTeams'
import PlayerDetails from './pages/PlayerDetails'
import PlayerStatus from './pages/PlayerStatus'
import TeamPointsDetails from './pages/TeamPointsDetails'
import TopBuys from './pages/TopBuys'
import PointsDetails from './pages/PointsDetails'
import ControlPanel from './pages/ControlPannel'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  return (
    <div>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/EmailVerify" element={<EmailVerify />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/preview" element={<Preview />} />
        <Route path="/newteams" element={<NewTeams />} />
        <Route path="/playerdetails" element={<PlayerDetails />} />
        <Route path="/teamandmembers" element={<TeamandMembers />} />
        <Route path="/teampointsdetails" element={<TeamPointsDetails />} />
        <Route path="/playerstatus" element={<PlayerStatus />} />
        <Route path="/topbuys" element={<TopBuys />} />
        <Route path="/pointsdetails" element={<PointsDetails />} />
        <Route path="/controlpanel" element={<ControlPanel />} />




      </Routes>

    </div>
  )
}

export default App
