import React from 'react';

const SingleCoffee = ({ coffee }) => {
    return (
        <div key={coffee._id} className="card card-side bg-base-100 shadow-xl">
            <figure><img className='w-[200px] h-[200px]' src={coffee.photo} alt="Movie" /></figure>
            <div className="flex w-full justify-between items-center">
                <div>
                <h2 className="card-title">{coffee.name}</h2>
                <p>Chef{coffee.chef}</p>
                <p>Text{coffee.test}</p>
                <p>Suppilier{coffee.supplier}</p>
                </div>
                <div className="card-actions justify-end">
                    <div className="btn-group btn-group-vertical space-y-3">
                        <button className="btn">View</button>
                        <button className="btn">Edit</button>
                        <button className="btn">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleCoffee;