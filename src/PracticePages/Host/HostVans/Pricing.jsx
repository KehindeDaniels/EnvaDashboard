import React, { useState } from 'react'
import { useOutletContext } from 'react-router-dom'


const Pricing = () => {
    const {van} = useOutletContext()
   
  return (
    <div><span className='font-bold text-xl'>{`$${van.price}`}</span><span className='opacity-50'>/day</span></div>
  )
}

export default Pricing