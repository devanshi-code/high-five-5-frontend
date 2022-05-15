import React from "react"
import './DashboardHero.css'
import { Link } from 'react-router-dom'

function DashboardHero() {
  return (
    <div className="hero">
        <h2>Organize a hackathon!</h2>
        <p>Hey organizer, to organize a hackathon you have to fill the form by clicking below. Please go through details and fill them</p>
        <Link to='/create'> <button className="btn">Organize your hackathon</button></Link>
    </div>
  )
}

export default DashboardHero