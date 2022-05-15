import React, { useState, useRef } from 'react'
import { useHistory } from 'react-router-dom';
import Navbar from '../../../Navbar';
import './Create.css';

function Create() {
  const [newPrize, setNewPrize] = useState("");
  const [prizes, setPrizes] = useState([]);
  const prizeInput = useRef(null)

    const history = useHistory()

    function handleSubmit(e){
        e.preventDefault();
        alert('project added!');
        history.push('/org-dashboard')
    }
    
    function handleAddPrize(e){
      e.preventDefault();
      const pri = newPrize.trim()
      if (pri && !prizes.includes(pri)) {
        setPrizes(prevPrizes => [...prevPrizes, newPrize])
      }
      setNewPrize('')
      prizeInput.current.focus()
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
          <span style={{display:'block'}}>Prizes:   </span>
          <input 
            ref={prizeInput}
            type="text"
            value={newPrize}
            onChange={(e)=>setNewPrize(e.target.value)}
          />
          <button className='btn' onClick={handleAddPrize}>Add</button>
        <p>Prizes:  {prizes.map(i => <em>{i}, </em>)} </p>
        </label>
        <label>
          <span>Start date</span>
          <input 
            required
            type="date"
          />
        </label>
        <label>
          <span> Due date:</span>
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