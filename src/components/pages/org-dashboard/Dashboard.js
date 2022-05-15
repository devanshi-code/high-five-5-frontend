import './Dashboard.css'
import DashboardHero from './DashboardHero'
import React from 'react'
import Navbar from '../../Navbar';
import ProjectList from './ProjectList';

function Dashboard() {
    // const user = 'User';
  return (
    <div className='dashboard'>
      <Navbar />
      <DashboardHero />
      <h4 className='page-title'>Ongoing hackathons</h4>
      <ProjectList projects={[{name:'TechPreksha2022', id:'p1' ,dueDate:'May 28, 2022'},{name:'HackurWay', id:'p2' ,dueDate:'June 3, 2022'},{name:'Execute 2.0', id:'p3' ,dueDate:'June 8, 2022'}]}/>
      <h4 className='page-title'>Previously hosted hackathons</h4>
      <ProjectList projects={[{name:'HackwithInfy', id:'pv1' ,dueDate:'May 1, 2022'},{name:'Techzibition', id:'pv2' ,dueDate:'May 7, 2022'},{name:'Angel Hack', id:'pv3' ,dueDate:'May 7, 2022'}, {name:'Bid 2 Code', id:'pv4' ,dueDate:'Apr 28, 2022'}, {name:'Frontiers: Website Design', id:'pv5' ,dueDate:'Apr 28, 2022'}]}/>
    </div>
  )
}

export default Dashboard;