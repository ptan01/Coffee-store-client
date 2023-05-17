import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const CoffeeDetails = () => {

    const {user} = useContext(AuthContext)

    const coffee = useLoaderData()

    const handleOrder =()=>{

    const order = {
        name : coffee.name, 
        chef : coffee.chef,
        test: coffee.test,
        email : user.email
    }

    fetch('http://localhost:5000/order',{
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(order)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if(data.acknowledged){
            alert('Your order is confirm')
        }
    })

    console.log(order)

    }


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
                    <button onClick={handleOrder} disabled={!user} className='btn'>Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default CoffeeDetails;