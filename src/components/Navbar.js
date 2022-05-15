import React from 'react'
import { useHistory } from 'react-router-dom';
 import high_five_logo from '../assets/images/high_five_logo.png';

import './Navbar.css'

function Navbar() {
  const history = useHistory()

  const handleLogout = () => {
    console.log("logging out")
    history.push('/')
  }

  const handleLogin = () => {
    console.log("logging In")
    history.push('/register')
  }
  

  return (
    <div className='navbar'>
            <div className='logo'>
                 <img src={high_five_logo} width="60" height="60" alt="LOGO"  /> 
                {/* <span>logo</span> */}
            </div>
             {/* <li>
                
            </li> */}
             <div className='logout'>
 
             <div className='user'>
                    <p>Hey, {`user`}</p>
                </div>
                <button className='btn' onClick={handleLogin}>Register</button>
                <button className='btn' onClick={handleLogout}>Logout</button>
            </div>       
    </div>
  )
}

export default Navbar