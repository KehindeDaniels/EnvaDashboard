import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Income from '../PracticePages/Host/Income'
import Review from '../PracticePages/Host/Review'
import HostVans from '../PracticePages/Host/HostVans/HostVans'

const Dashboard = () => {
  const ActiveStyle = {
    textdecoration: 'underline',
    color: 'orange',
    fontweight: 700,
  }

  
  return (
   <>

    <div className='flex gap-16 mb-16'>
        <NavLink to="/Host" end className={({isActive})=>isActive? "text-amber-500 font-medium underline" : "hover:underline hover:text-amber-500 hover:font-medium"} >Dashboard</NavLink>
        <NavLink to="Review" className={({isActive})=>isActive? "text-amber-500 font-medium underline" : "hover:underline hover:text-amber-500 hover:font-medium"} >Review</NavLink>
        <NavLink to="HostVans" className={({isActive})=>isActive? "text-amber-500 font-medium underline" : "hover:underline hover:text-amber-500 hover:font-medium"} >Vans</NavLink>
        <NavLink to="Income" className={({isActive})=>isActive? "text-amber-500 font-medium underline" : "hover:underline hover:text-amber-500 hover:font-medium"} >Income</NavLink>
      </div>
      <Outlet/>
    </>
  )
}

export default Dashboard