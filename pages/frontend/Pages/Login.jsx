import React from 'react'
import { NavLink, Outlet} from 'react-router-dom'

export const Login = () => {
  return (
    <>
    <div className='desktop:container grid grid-cols-2 border-2 border-black'>
      <div>
        <div className='border border-black mt-10 inline mx-auto'>
        <div ><NavLink  className='border-black border block w-1/2' to="/login">Login</NavLink></div>
        <div ><NavLink  className='border-black border block w-1/2' to="register">Register</NavLink></div>
        </div>
      </div>
      {/* className='bg-white ring-2 focus:ring-blue-900 rounded-sm p-5 drop-shadow-md w-1/2 font-medium' */}
      <div>
        <Outlet/>
      </div>
    </div>
    </>
  )
}