import './Dashboard.css'
import DashboardHero from './DashboardHero'
import React from 'react'
import Navbar from '../../Navbar';
import ProjectList from './ProjectList';

function userdashboard() {
    // const user = 'User';
  return (
    <div className='dashboard'>
      <Navbar />
      <DashboardHero />
      <h4 className='page-title'>Upcoming hackathons</h4>
      <ProjectList projects={[{name:'TechPreksha2022', id:'p1' ,dueDate:'May 28, 2022'},{name:'HackurWay', id:'p2' ,dueDate:'June 3, 2022'},{name:'Execute 2.0', id:'p3' ,dueDate:'June 8, 2022'}]}/>
      <h4 className='page-title'>Registered hackathons</h4>
      <ProjectList projects={[{name:'Gryph Hacks', id:'pv1' ,dueDate:'May 18, 2022'},{name:'MontyHacks V', id:'pv2' ,dueDate:'May 19, 2022'},{name:'Code-a-Thon', id:'pv3' ,dueDate:'May 19, 2022'}, {name:'Frost Hack', id:'pv4' ,dueDate:'May 20, 2022'}]}/>
    </div>
  )
}

export default userdashboard;