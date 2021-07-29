import React from 'react' 
import { Link } from 'react-router-dom'
import './Nav.css'


export default function Nav({clickLogout, isLoggedIn}) {
  
    return (
        <header>
          <nav>
            <ul>
              <li><Link to="/">BungeeBank</Link></li>
              <li>
                <Link 
                to="/login">Login
                {/*  onClick={() => clickLogout()}> */}
                {/*  {isLoggedIn? 'Logout' : 'Login'} */}
                </Link>
              </li>
              <li><Link to="/dashboard">Dashboard</Link></li>
            </ul>
          </nav>
        </header>
    )
}