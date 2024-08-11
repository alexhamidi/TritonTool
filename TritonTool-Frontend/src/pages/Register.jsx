import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';  

export default function Register({BACKEND_URL, authenticated}) {
    const [user, setUser] = useState({
        email:'',
        password:''
    })
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        axios.defaults.withCredentials = true;
    }, []);

    useEffect(() => {
        if (authenticated) navigate('/')        
    }, [authenticated]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null)
        if (user.email === '' || user.password === '') {
            setError('Please fill out all fields');
            return;
        }
        try {
            const response = await axios.post(`${BACKEND_URL}/api/register`, user);    
            if (response.data.message === 'Registration successful') {
                navigate('/login'); 
            } else {
                setError('Unexpected response from server');
            }
        } catch (error) {
            console.error('Register error:', error);
            setError(error.response?.status === 400 ? 'Email In Use' : 'Error occurred');
        }
        setUser(({
            email:'',
            password:''
        }))

    };

    return (
        <main className='page logregPage'>
            <div className='logregCard card'>
                <h1>Register</h1>
                <button onClick={()=>navigate('/')} className='guestLogin input'>Login as Guest </button>
                <p>or</p>
                <form className = 'logregForm' onSubmit={handleSubmit}>
                    <p>Email</p>
                    <input className = 'input'  type="text" value={user.email} onChange={(e) => setUser(prevState => ({... prevState, email: e.target.value}))} placeholder='.ucsd.edu not required' />
                    <p>Password</p>
                    <input className = 'input' type="password" value={user.password}  onChange={(e) => setUser(prevState => ({... prevState, password: e.target.value}))}/>
                    <button className = 'input' type="submit">Submit</button>
                </form>
                <p>Already have an account? <button onClick={()=>navigate('/login')} className='logregNav'>Login</button></p>
                {error && <div className='error'>{error}</div>}
            </div>
        </main>
    );
}