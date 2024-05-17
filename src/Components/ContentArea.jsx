import React from 'react'
import NavBar from './NavBar'
import Analytics from './Analytics'

const ContentArea = () => {
  return (
    <div className='flex flex-col flex-grow bg-blue-50 gap-8'>
        <NavBar/>
        <Analytics/>
    </div>
  )
}

export default ContentArea