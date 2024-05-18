import React from 'react';
import { useParams } from 'react-router-dom';
import allVans from './data';

const VansDetail = () => {
    const { id } = useParams();
    const van = allVans.find(v => v.id === id);

    if (!van) {
        return <div>Van not found</div>;
    }

    return (
        <div className="van-detail flex flex-col items-center p-8 bg-gray-100">
            <img src={van.imageUrl} alt={van.name} className="rounded-xl mb-4" />
            <h1 className="text-2xl font-bold mb-2">{van.name}</h1>
            <p className="text-lg mb-2">{van.description}</p>
            <p className="text-xl font-bold mb-2">${van.price} per day</p>
            <button className="mt-4 p-2 bg-blue-500 text-white rounded">Rent Now</button>
        </div>
    );
};

export default VansDetail;
