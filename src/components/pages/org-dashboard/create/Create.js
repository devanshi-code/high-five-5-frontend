import React from 'react'
import { useHistory } from 'react-router-dom';
import Navbar from '../../../Navbar';

function Create() {

    const history = useHistory()

    function handleSubmit(e){
        e.preventDefault();
        alert('project added!');
        history.push('/org-dashboard')
    }

  return (
      <>
      <Navbar />
    <div className='create-form'>
      <h2 className='page-title'>Create a new project</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Project name:</span>
          <input 
            required
            type="text"
          />
        </label>
        <label>
          <span>Project details:</span>
          <textarea 
            required
            type="text"
          ></textarea>
        </label>
        <label>
          <span>Set due date:</span>
          <input 
            required
            type="date"
          />
        </label>
        <br/><br/><br/>

        <button className='btn'>Add Project</button>
      </form>
    </div>
    </>
  )
}

export default Create