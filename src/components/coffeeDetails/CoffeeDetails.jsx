import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CoffeeDetails = () => {


    const coffee = useLoaderData()

    


    return (
        <div>
            <h1>this is coffee details page</h1>
            <div className='card card-side w-1/2 mx-auto shadow-xl'>
                <figure><img className='w-[200px] h-[200px]' src={coffee.photo} alt="Movie" /></figure>
                <div>
                    <h2 className="card-title">{coffee.name}</h2>
                    <p>Chef :{coffee.chef}</p>
                    <p>Test :{coffee.test}</p>
                    <p>Suppilier :{coffee.supplier}</p>
                    <button className='btn'>Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default CoffeeDetails;