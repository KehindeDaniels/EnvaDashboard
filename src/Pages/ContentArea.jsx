import React from 'react'
import NavBar from '../Components/NavBar'
import Analytics from '../Components/Analytics'

const ContentArea = () => {
  return (
    <div className='flex flex-col flex-grow bg-blue-50 gap-8'>
        {/* <NavBar/> */}
        <Analytics/>
    </div>
  )
}

export default ContentArea