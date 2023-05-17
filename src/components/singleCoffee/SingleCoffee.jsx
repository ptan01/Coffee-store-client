import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import './singleCoffee.css';

const SingleCoffee = ({ coffee, setDepend ,depend}) => {




    const handleDelete = (id) => {
        
        console.log(id)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                //   Swal.fire(
                //     'Deleted!',
                //     'Your file has been deleted.',
                //     'success'
                //   )
                fetch(`http://localhost:5000/coffee/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        setDepend(!depend)
                    })
            }
        })
       
    }

    return (
        <div key={coffee._id} className="card card-side shadow-xl">
            <figure><img className='w-[200px] h-[200px]' src={coffee.photo} alt="Movie" /></figure>
            <div className="flex w-full justify-between items-center">
                <div>
                    <h2 className="card-title">{coffee.name}</h2>
                    <p>Chef :{coffee.chef}</p>
                    <p>Test :{coffee.test}</p>
                    <p>Suppilier :{coffee.supplier}</p>
                </div>
                <div className="card-actions justify-end">
                    <div className="btn-group btn-group-vertical space-y-3">
                        <Link to={`coffee-details/${coffee._id}`}><button className="btn">View</button></Link>
                        <Link to={`update-coffee/${coffee._id}`}><button className="btn">Edit</button></Link>
                        <button onClick={() => handleDelete(coffee._id)} className="btn">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleCoffee;