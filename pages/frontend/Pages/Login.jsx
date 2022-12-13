import React from 'react'
import { NavLink, Outlet} from 'react-router-dom'

export const Login = () => {
  return (
    <div>This for the log in Pages
      <ul>
        <li><NavLink to="/login">Login</NavLink></li>
        <li><NavLink to="register">Register</NavLink></li>
      </ul>
    <Outlet/>
    </div>
  )
}
