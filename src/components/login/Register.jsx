import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = (e) => {
        e.preventDefault();

        // Perform login logic here, such as making an API call
        console.log(username, password)
        // Reset form
        setUsername('');
        setPassword('');
    };



    return (
        <div>
            <h2 className='text-4xl text-center'>Please Register</h2>
            <form className='text-center mx-auto card w-[400px]' onSubmit={handleRegister}>
                <div className='my-3'>
                    <label className='text-3xl' htmlFor="username">User Name:</label>
                    <input
                        className='py-3 px-5 rounded-lg'
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className='my-3'>
                    <label className='text-3xl' htmlFor="password">Password:</label>
                    <input
                        className='py-3 px-5 rounded-lg'
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button className='btn' type="submit">Register</button>
                <p>Already have an account ? please <Link to='/login'>Login</Link></p>
            </form>
        </div>
    );
};

export default Register;