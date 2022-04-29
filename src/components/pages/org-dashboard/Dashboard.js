import './Dashboard.css'
import DashboardHero from './DashboardHero'
import React from 'react'
import Navbar from '../../Navbar';
import ProjectList from './ProjectList';

function Dashboard() {
    const user = 'User';
  return (
    <div className='dashboard'>
      <Navbar />
      <DashboardHero />
      <h4 className='page-title'>Ongoing hackathons</h4>
      <ProjectList projects={[{name:'p1', id:'p1' ,dueDate:'May 20, 2022'},{name:'p2', id:'p2' ,dueDate:'May 28, 2022'},{name:'p3', id:'p3' ,dueDate:'Apr 28, 2022'}]}/>
      <h4 className='page-title'>Completed hackathons</h4>
      <ProjectList projects={[{name:'pv1', id:'pv1' ,dueDate:'May 20, 2022'},{name:'pv2', id:'pv2' ,dueDate:'May 28, 2022'},{name:'pv3', id:'pv3' ,dueDate:'Apr 28, 2022'}, {name:'pv4', id:'pv4' ,dueDate:'Apr 28, 2022'}, {name:'pv5', id:'pv5' ,dueDate:'Apr 28, 2022'}]}/>
    </div>
  )
}

export default Dashboard;