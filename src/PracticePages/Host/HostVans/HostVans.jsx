import React, { useState } from 'react'
import allVans from '../../../data'
import { Link } from 'react-router-dom'

const HostVans = () => {
  const [vans, setVans] = useState(allVans)

  const vansElement = vans.map(v=>(
    <li >
      <Link to={`/Host/Hostvans/${v.id}`} className='bg-white rounded-xl flex gap-4 min-w-96 p-8' >
        <img src={v.imageUrl} alt={v.name} className="w-32 rounded-lg" />
        <div className="namePrice flex flex-col">
          <h3 className='font-bold text-lg'>{v.name}</h3>
          <p>{`$${v.price}`}</p>
        </div>
      </Link>
    </li>
  ))

  return (
    <div className='bg-orange-50 h-vh p-8'>
      <ul className='flex flex-col gap-8'>
          {vansElement}
      </ul>
    </div>
  )
}

export default HostVans