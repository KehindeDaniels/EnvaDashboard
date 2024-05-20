import React, { useState } from 'react'
import { Link, NavLink, Outlet, useParams } from 'react-router-dom'
import allVans from '../../../data'

const HostVansDetails = () => {
    const [vans, setVans] = useState(allVans)
    const {id} = useParams();
    const van = vans.find(v=> v.id === id);

    if (!van) {
        return <div>Van not found</div>
    }
  return (
    <div className='bg-amber-50 h-screen p-8'>
      <Link to=".." relative='path'><p>back to Vans</p></Link>  
      <div className="vandetails bg-white mt-8 p-8">
            <div className="imageNamePrice flex gap-4">
                <img src={van.imageUrl} alt={van.name} className='w-64 rounded-lg' />
                <div className="namePrice">
                    <p className='px-4 py-1 rounded-md text-white bg-orange-400 text-center'>{van.type}</p>
                    <h3 className='font-bold text-xl'>{van.name}</h3>
                    <p>{`$${van.price}`}</p>
                </div>
            </div>

            <nav className='mt-8'>
                <ul className='flex gap-4'>
                    <NavLink to="." end className={({isActive})=> isActive ? 'text-amber-500 underline font-bold': "hover:underline font-bold hover:text-amber-500"}><li>Details</li></NavLink>
                    <NavLink to={`Pricing`} className={({isActive})=> isActive ? 'text-amber-500 underline font-bold': "hover:underline font-bold hover:text-amber-500"}><li>Pricing</li></NavLink>
                    <NavLink to={`Photos`} className={({isActive})=> isActive ? 'text-amber-500 underline font-bold': "hover:underline font-bold hover:text-amber-500"}><li>Photos</li></NavLink>
                </ul>
            </nav>
            <Outlet context={{van}}/>

            {/* <p className="name mt-4"><span className='font-bold'>Name:</span> {van.name}</p>
            <p className="category mt-1"><span className='font-bold'>Category:</span> {van.type}</p>
            <p className="category mt-1"><span className='font-bold'>Description:</span> {van.description}</p> */}
      </div>
    </div>
  )
}

export default HostVansDetails