import React from 'react'

const OverviewCards = () => {
    const cards = [0, 1, 2, 3]
    const cardElement = cards.map((index, card)=><div className={`flex-1  h-48 ${index===0 ? 'bg-blue-500' :'bg-white'} shadow  rounded-sm`}></div>)
  return (
    <div className='flex gap-4'>
        {cardElement}
    </div>
  )
}

export default OverviewCards