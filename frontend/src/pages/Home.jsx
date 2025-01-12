import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
       <div className='bg-cover bg-center bg-[url(https://img.freepik.com/premium-photo/clear-red-traffic-lights-ensure-safe-driving-pedestrian-crossing_1168676-35147.jpg)] h-screen pt-8 flex justify-between flex-col w-full'>
        <img className='w-16 ml-8' src="https://www.logo.wine/a/logo/Uber/Uber-White-Dark-Background-Logo.wine.svg" alt="" />
        <div className='bg-white pb-7 py-4 px-4'>
            <h2 className='text-2xl font-bold'>Get Started With Uber</h2>
            <Link to='/login' className='flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5'>Continue</Link>
        </div>
         
       </div>
    </div>
  )
}

export default Home
