import React, { useEffect, useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import VansDetail from './VansDetail'
import allVans from '../../data'


const VansPage = () => {

  const [vans, setVans] = useState(allVans)

const vansElement = vans.map((van)=>(
  <>
 
   
      <div key={van.id} className="vanContainer max-w-64">
      <Link to={`/vansPage/${van.id}`}>
        <img src={van.imageUrl} alt={van.name} className='rounded-xl' />
        <div className="bottom">
          <div className="namePrice flex items-center justify-between">
            <p>{van.name}</p>
            <p>{`$${van.price}`}</p>
          </div>
          <button>Rent Now</button>
        </div>
        </Link>
      </div>
   
  </>

))
 
  return (
    <div className=' flex justify-center items-center flex-wrap gap-8 mx-auto p-8 bg-orange-100'>
        {vansElement}
    </div>
  )
}

export default VansPage