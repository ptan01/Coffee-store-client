import React from 'react';
import Swal from 'sweetalert2'


const AddCoffee = () => {

   


    const handleCoffee = (e)=>{
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
        fetch('http://localhost:5000/coffee' ,{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(coffee)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
          if(data.acknowledged){
            Swal.fire({
                title: 'Added Success!',
                text: 'Coffee added Success fully',
                icon: 'success',
                confirmButtonText: 'Done'
              })
          }
        })
    }

    return (
        <div>
            <h1 className='text-center text-4xl'>Add new coffee</h1>
            <p className='text-center'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal <br /> distribution of letters, as opposed to using Content here.</p>
            <form onSubmit={handleCoffee} className='mx-auto p-3 w-full lg:w-[1320px] rounded-xl bg-stone-100'>
                <div className='lg:flex justify-center gap-3'>
                    <div className="form-control w-full max-w-xl">
                        <label className="label">
                            <span className="label-text">Coffee Name</span>
                        </label>
                        <input type="text" placeholder="Coffee Name" name='name' className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full max-w-xl">
                        <label className="label">
                            <span className="label-text">Chef</span>
                        </label>
                        <input type="text" placeholder="Chef" name='chef' className="input input-bordered w-full " />
                    </div>
                </div>
                <div className='lg:flex justify-center gap-3'>
                    <div className="form-control w-full max-w-xl">
                        <label className="label">
                            <span className="label-text">Supplier</span>
                        </label>
                        <input type="text" placeholder="Supplier" name='supplier' className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full max-w-xl">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <input type="text" placeholder="Category" name='category' className="input input-bordered w-full " />
                    </div>
                </div>
                <div className='lg:flex justify-center gap-3'>
                    <div className="form-control w-full max-w-xl">
                        <label className="label">
                            <span className="label-text">Test</span>
                        </label>
                        <input type="text" placeholder="Test" name='test' className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full max-w-xl">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <input type="text" placeholder="Details" name='details' className="input input-bordered w-full " />
                    </div>
                </div>
                <div className="form-control w-full max-w-xl mx-auto">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input type="text" placeholder="URL" name='photo' className="input input-bordered w-full max-w-xl lg:mx-auto" />
                </div>
                <div className='text-center my-2'>
                <input className='btn btn-wide' type="submit" value="Add Coffee" />
                </div>
            </form>
        </div>
    );
};

export default AddCoffee;