import React from 'react'
import NavBar from './NavBar'
import ContentDetails from './ContentDetails'

const ContentArea = () => {
  return (
    <div className='flex flex-col flex-grow bg-blue-50 gap-8'>
        <NavBar/>
        <ContentDetails/>
    </div>
  )
}

export default ContentArea