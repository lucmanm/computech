import React from 'react'

export const Profile = () => {
  return (
    <>
      <profile>
        <div className='flex  flex-col justify-center p-2'>
          
          <p className='font-bold pb-2'>My Profile</p>
          
          <span>Personal Details</span>
          <hr className='my-2'/>
          <div className=' text-gray-500'>
          <p>Mahid Lucman</p>
          <p>Jeddah, Saudi Arabia</p>
          </div>
          <span>Account Details</span>
          <hr className='my-2'/>
          <div className=' text-gray-500'>
          <p><a href="mailto:youremail@domain.com">youremail@domain.com</a></p>
          <p>Jeddah, Saudi Arabia</p>
          </div>
        </div>
      </profile>
    </>
  )
}
