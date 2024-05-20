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
        <NavLink to="/Host" end style={({isActive})=>isActive? ActiveStyle : null} >Dashboard</NavLink>
        <NavLink to="Review" style={({isActive})=>isActive? ActiveStyle : null} >Review</NavLink>
        <NavLink to="HostVans" style={({isActive})=>isActive? ActiveStyle : null} >Vans</NavLink>
        <NavLink to="Income" style={({isActive})=>isActive? ActiveStyle : null} >Income</NavLink>
      </div>
      <Outlet/>
    </>
  )
}

export default Dashboard