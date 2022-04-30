import React from 'react'
import { useHistory } from 'react-router-dom';

import './Navbar.css'

function Navbar() {
  const history = useHistory()

  const handleLogout = () => {
    console.log("logging out")
    history.push('/')
  }

  return (
    <div className='navbar'>
            <div className='logo'>
                {/* <img src={} alt="" /> */}
                <span>logo</span>
            </div>
             {/* <li>
                
            </li> */}
             <div className='logout'>
             <div className='user'>
                    <p>Hey {`user`}</p>
                </div>
                <button className='btn' onClick={handleLogout}>Logout</button>
            </div>       
    </div>
  )
}

export default Navbar