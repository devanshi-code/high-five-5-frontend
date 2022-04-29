import React from 'react'
import { Link } from 'react-router-dom'
// import Avatar from './Avatar'
// styles
import './ProjectList.css'

export default function ProjectList({ projects }) {
  return (
    <div className='project-list'>
        {projects.length === 0 && <p>No projects yet!</p>}
        {projects.map(project => (
            <Link to={`/projects/${project.id}`} key={project.id}>
                <h4>{project.name}</h4>
                <p>Due by {project.dueDate}</p>
                <button className='btn'>View details</button>
            </Link>
        )
        )}
    </div>
  )
}
