import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateCoffee = () => {
    const coffee = useLoaderData()
    const  { name, chef, supplier, category, photo, details, test } = coffee ;

    return (
        <div>
            <h1>this is update coffee page</h1>
            <div className="card w-1/2 mx-auto lg:card-side bg-base-100 shadow-xl">
                <figure><img src={photo} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Chef :{coffee.chef}</p>
                    <p>Test :{coffee.test}</p>
                    <p>Suppilier :{coffee.supplier}</p>
                    
                </div>
            </div>
        </div>
    );
};

export default UpdateCoffee;