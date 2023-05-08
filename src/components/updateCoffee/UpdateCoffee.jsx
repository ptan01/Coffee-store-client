import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateCoffee = () => {
    const coffee = useLoaderData()
    const  { _id, name, chef, supplier, category, photo, details, test } = coffee ;

    const handleUpdateCoffee = (e)=>{
        e.preventDefault()
        const form = e.target ;
        const name = form.name.value ;
        const chef = form.chef.value ;
        const supplier = form.supplier.value ;
        const category = form.category.value ;
        const test = form.test.value ;
        const details = form.details.value ;
        const photo = form.photo.value ;
        
        const coffee = { name, chef, supplier, category, photo, details, test } ;
        console.log(coffee)
        fetch(`http://localhost:5000/coffee/${_id}` ,{
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(coffee)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
          if(data.modifiedCount > 0){
            Swal.fire({
                title: 'Updated Success!',
                text: 'Coffee Updated Success fully',
                icon: 'success',
                confirmButtonText: 'Done'
              })
          }
        })
    }

    return (
        <div>
            <h1 className='text-center text-3xl'>Update {name}</h1>
            <form onSubmit={handleUpdateCoffee} className='mx-auto p-3 w-full lg:w-[1320px] rounded-xl bg-stone-100'>
                <div className='lg:flex justify-center gap-3'>
                    <div className="form-control w-full max-w-xl">
                        <label className="label">
                            <span className="label-text">Coffee Name</span>
                        </label>
                        <input type="text" placeholder="Coffee Name" defaultValue={name} name='name' className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full max-w-xl">
                        <label className="label">
                            <span className="label-text">Chef</span>
                        </label>
                        <input type="text" placeholder="Chef" defaultValue={chef} name='chef' className="input input-bordered w-full " />
                    </div>
                </div>
                <div className='lg:flex justify-center gap-3'>
                    <div className="form-control w-full max-w-xl">
                        <label className="label">
                            <span className="label-text">Supplier</span>
                        </label>
                        <input type="text" placeholder="Supplier" defaultValue={supplier} name='supplier' className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full max-w-xl">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <input type="text" placeholder="Category" defaultValue={category} name='category' className="input input-bordered w-full " />
                    </div>
                </div>
                <div className='lg:flex justify-center gap-3'>
                    <div className="form-control w-full max-w-xl">
                        <label className="label">
                            <span className="label-text">Test</span>
                        </label>
                        <input type="text" placeholder="Test" name='test' defaultValue={test} className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full max-w-xl">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <input type="text" placeholder="Details" name='details' defaultValue={details} className="input input-bordered w-full " />
                    </div>
                </div>
                <div className="form-control w-full max-w-xl mx-auto">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input type="text" placeholder="URL" name='photo' defaultValue={photo} className="input input-bordered w-full max-w-xl lg:mx-auto" />
                </div>
                <div className='text-center my-2'>
                <input className='btn btn-wide' type="submit" value="Update Coffee" />
                </div>
            </form>
           
        </div>
    );
};

export default UpdateCoffee;