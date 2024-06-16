import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";

const Details = () => {
  const { van } = useOutletContext();

  return (
    // <div className='bg-amber-50 h-screen p-8'>
    //         <p className="name mt-4"><span className='font-bold'>Name:</span> {van.name}</p>
    //         <p className="category mt-1"><span className='font-bold'>Category:</span> {van.type}</p>
    //         <p className="category mt-1"><span className='font-bold'>Description:</span> {van.description}</p>
    // </div>
    <div className="">
      <p className="name mt-4">
        <span className="font-bold">Name:</span> {van.name}
      </p>
      <p className="category mt-1">
        <span className="font-bold">Category:</span> {van.type}
      </p>
      <p className="category mt-1">
        <span className="font-bold">Description:</span> {van.description}
      </p>
    </div>
  );
};

export default Details;
