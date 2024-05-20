import React, { useState } from 'react'
import { useOutletContext, useParams } from 'react-router-dom'


const Photos = () => {
   const {van} = useOutletContext()
  return (
    <div className='mt-8'>
        <img src={van.imageUrl} alt={van.name} className='w-32 rounded-sm' />
    </div>
  )
}

export default Photos