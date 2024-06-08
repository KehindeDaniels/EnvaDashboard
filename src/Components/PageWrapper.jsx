import React from 'react'
import ContentArea from '../Pages/ContentArea'
import SidebarArea from './SidebarArea'

const PageWrapper = () => {
  return (
    <div className=' flex min-h-screen '>
        <SidebarArea/>
        <ContentArea/>
    </div>
  )
}

export default PageWrapper