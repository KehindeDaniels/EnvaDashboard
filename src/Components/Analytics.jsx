import React from 'react'
import OverviewCards from './OverviewCards'
import Table from './Table'
const  Analytics= () => {
  return (
    <div className='flex-grow bg-white ml-8 p-8 rounded-md'>
        <OverviewCards/>
        <Table/>
    </div>
  )
}

export default Analytics