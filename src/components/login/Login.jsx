import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {

    const {loginUser} = useContext(AuthContext)


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();

        // Perform login logic here, such as making an API call
        console.log(email, password)

        loginUser(email, password)
        .then(result => {
            const user = result.user ;
            console.log(user)
            alert('Login success fully')
        })
        .catch(err => {
            console.log(err.message)
        })




        // Reset form
        setEmail('');
        setPassword('');
    };

    return (
        <div>
            <h2 className='text-4xl text-center'>Please Login</h2>
            <form className='text-center mx-auto card w-[400px]' onSubmit={handleLogin}>
                <div className='my-3'>
                    <label className='text-3xl' htmlFor="email">User email:</label>
                    <input
                        className='py-3 px-5 rounded-lg'
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
                <button className='btn' type="submit">Login</button>
                <p>don't have an account? please <Link to='/register'>Register</Link></p>
            </form>
        </div>
    );
};

export default Login;
