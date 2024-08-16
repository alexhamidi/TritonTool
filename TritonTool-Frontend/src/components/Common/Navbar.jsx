import axios from 'axios';
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

export default function Navbar({authenticated, setAuthenticated, BACKEND_URL, toggleDarkMode, darkMode, shouldShowNavbar}) {
    const navigate = useNavigate();


    async function handleLogout() {
        try {
            await axios.post(`${BACKEND_URL}/api/logout`, {}, { withCredentials: true });
            setAuthenticated(false);
            localStorage.clear()
            sessionStorage.clear()
            navigate('/login');
        } catch (error) {
            console.error('Logout error:', error);
        }
    }

    return (
        <>
            {shouldShowNavbar && <nav>
                <NavLink to="/">Course Search</NavLink>
                <NavLink to="/mycourses">My Courses</NavLink>
                <NavLink to="/resources">Resources</NavLink>
                {authenticated ? (
                <button onClick={handleLogout}>Logout</button>
                ) : (
                <NavLink to="/login">Login</NavLink>
                )}
            </nav>}
            <label className='modeToggle'>
                {darkMode ?
                    <i className="fa-regular fa-sun"/> :
                    <i className="fa-solid fa-moon"/>}
                <input
                    type="checkbox"
                    checked={darkMode}
                    onChange={toggleDarkMode}
                />
                <span className="slider"></span>
            </label>
        </>

    )
}
