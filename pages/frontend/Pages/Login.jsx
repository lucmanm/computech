import React from 'react'
import { NavLink, Outlet} from 'react-router-dom'

export const Login = () => {
  return (
    <>
    <div className='desktop:container grid desktop:grid-cols-2 '>
      <div>
        <div className='mt-12 mx-auto w-1/2'>
        <span>
          <NavLink  className='block bg-white focus:ring-2 focus:ring-blue-900 rounded-sm p-5 drop-shadow-md font-medium text-center focus:font-bold focus:text-blue-900' to="/login">
            <span>Login</span>
            <p className="mt-1 text-sm text-gray-600">Use a permanent address where you can receive mail.</p>
          </NavLink>
        </span>
        <span>
          <NavLink  className='mt-2 block bg-white focus:ring-2 focus:ring-blue-900 rounded-sm p-5 drop-shadow-md font-medium text-center focus:font-bold focus:text-blue-900' to="register">
          <span>Register</span>
          <p className="mt-1 text-sm text-gray-600">if you don't have an account. Create your account now!</p>
          </NavLink>
        </span>
        </div>
      </div>
      {/* className='bg-white ring-2 focus:ring-blue-900 rounded-sm p-5 drop-shadow-md font-medium' */}
      <div>
        <Outlet/>
      </div>
    </div>
    </>
  )
}