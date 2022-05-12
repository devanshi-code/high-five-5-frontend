import React from "react"
import './DashboardHero.css'
import { Link } from 'react-router-dom'

function DashboardHero() {
  return (
    <div className="hero">
        <h2>Organize a hackathon!</h2>
        <p>If you are a participant and want to organize a hackathon then click on this button</p>
        <Link to='/create'> <button className="btn">Organize your hackathon</button></Link>
    </div>
  )
}

export default DashboardHero