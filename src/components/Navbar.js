import React from 'react'

import './Navbar.css'

function Navbar() {
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
                <button className='btn'>Logout</button>
            </div>       
    </div>
  )
}

export default Navbar