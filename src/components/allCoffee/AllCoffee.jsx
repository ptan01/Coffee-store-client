import React, { useEffect, useState } from 'react';
import SingleCoffee from '../singleCoffee/SingleCoffee';

const AllCoffee = () => {

    const [coffees, setCoffes] = useState([])
    const [depend , setDepend] = useState(false)

    useEffect(() => {
        fetch('http://localhost:5000/coffee')
            .then(res => res.json())
            .then(data => setCoffes(data))
    }, [depend])


    return (
        <div>
            <h1 className='text-3xl text-center'>Our Popular Products</h1>

            <p>{coffees.length}</p>
            <div style={{display: 'grid'}} className=' lg:grid-cols-2 gap-4'>
                {
                    coffees.map(coffee => <SingleCoffee key={coffee._id} depend={depend} setDepend={setDepend} coffee={coffee}></SingleCoffee>)
                }
            </div>

        </div>
    );
};

export default AllCoffee;