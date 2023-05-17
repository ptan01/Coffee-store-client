import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const Order = () => {

    const { user } = useContext(AuthContext)

    const [orders, setOrders] = useState([])


    useEffect(() => {
        fetch(`http://localhost:5000/order?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setOrders(data)
            })
    }, [user])




    return (
        <div className='container mx-auto'>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Chef</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            orders.map((order, idx) => <tr key={idx}>
                                <th>{idx}</th>
                                <td>{order.name}</td>
                                <td>{order.chef}</td>
                                <td>{order.email}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Order;