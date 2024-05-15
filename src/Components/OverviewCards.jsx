import React from 'react'

const OverviewCards = () => {
    const cards = [0, 1, 2, 3]
    const cardElement = cards.map((index, card)=><div className={`flex-1  h-48 ${index===0 ? 'bg-blue-500' :'bg-white'} shadow  rounded-sm`}></div>)
  return (
    <div className='flex flex-col gap-8'>
      <ul className='flex gap-8'>
        <li><a href="#">Home</a></li>
        <li><a href="#">Items</a></li>
        <li><a href="#">Analytics</a></li>
        <li><a href="#">Files</a></li>
      </ul>
        <div className='flex flex-col gap-4'>
          <h3 className='text-2xl font-medium'>Overview</h3>
          <div className=" flex g-8">

          {cardElement}
          </div>
        </div>
    </div>
  )
}

export default OverviewCards