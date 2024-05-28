import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import allVans from '../../data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const VansDetail = () => {
    const params= useParams()
    console.log(params)
    const [vans, setVans] = useState(allVans)
    const van = vans.find(v=> v.id === params.id)
        if(!van) {
            return <div>Van not found</div>
        }
  return (
    <>
    <Link to=".." relative="path">
        <p className='px-8 underline hover:font-bold'>
            <FontAwesomeIcon icon={faArrowLeft}/>
            back to vans
        </p></Link>
        <div className="detailContainer p-8">
            <img src={van.imageUrl} alt={van.name} className='w-80 rounded-lg' />
            <div className="description">
                <h3 className='font-bold text-xl'>{van.name}</h3>
                <p className="details">{van.description}</p>
                <button className='px-8 py-2 bg-orange-400'>Rent Now</button>
            </div>
        </div>

    </>
  )
}

export default VansDetail

// import React from 'react';
// import { useParams } from 'react-router-dom';
// import allVans from './data';

// const VansDetail = () => {
//     const { id } = useParams();
//     const van = allVans.find(v => v.id === id);

//     if (!van) {
//         return <div>Van not found</div>;
//     }

//     return (
//         <div className="van-detail flex flex-col items-center p-8 bg-gray-100">
//             <img src={van.imageUrl} alt={van.name} className="rounded-xl mb-4" />
//             <h1 className="text-2xl font-bold mb-2">{van.name}</h1>
//             <p className="text-lg mb-2">{van.description}</p>
//             <p className="text-xl font-bold mb-2">${van.price} per day</p>
//             <button className="mt-4 p-2 bg-blue-500 text-white rounded">Rent Now</button>
//         </div>
//     );
// };

// export default VansDetail;
