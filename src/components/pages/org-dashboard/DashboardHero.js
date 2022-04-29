import React from "react"
import './DashboardHero.css'
import { Link } from 'react-router-dom'

function DashboardHero() {
  return (
    <div className="hero">
        <h2>Organize a hackathon!</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget est lorem ipsum dolor sit. Molestie at elementum eu facilisis sed odio morbi quis commodo. Amet massa vitae tortor condimentum lacinia quis vel eros donec. Tincidunt ornare massa eget egestas. Volutpat consequat mauris nunc congue nisi.</p>
        <Link to='/create'> <button className="btn">Organize your hackathon</button></Link>
    </div>
  )
}

export default DashboardHero