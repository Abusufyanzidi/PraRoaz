import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
      <div className="menu">
              <ul>
                <li><Link to = '/'>Home</Link></li>
                <li><Link to = '/about'>ABOUT</Link></li>
                <li><Link to = '/services'>SERVICES</Link></li>
                <li><Link to = '/contact'>CONTACT</Link></li>
              </ul>
            </div>
    </>
  )
}

export default Header