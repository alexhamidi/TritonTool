import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from "react-router-dom";
import axios from 'axios';
import Navbar from "./components/Common/Navbar";
import CourseSearch from './pages/CourseSearch';
import MyCourses from './pages/MyCourses';
import Login from './pages/Login'
import Register from './pages/Register'
import Resources from "./pages/Resources";
export default function App() {
    return (
        <Router>
            <AppContent />
        </Router>
    );
}

function AppContent() {
    const location = useLocation();
    const hideNavbarPaths = ['/login', '/register'];
    const [authenticated, setAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);
    const BACKEND_URL = 'http://localhost:3000';
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const isDarkMode = localStorage.getItem('darkMode') === 'true';
        setDarkMode(isDarkMode);
        document.body.classList.toggle('darkMode', isDarkMode);
    }, []);

    function toggleDarkMode() {
        const newDarkMode = !darkMode;
        setDarkMode(newDarkMode);
        localStorage.setItem('darkMode', newDarkMode);
        document.body.classList.toggle('darkMode', newDarkMode);
    };

    useEffect(() => {
        const checkAuth = async () => {
            try {
                await axios.get(`${BACKEND_URL}/api/verifytoken`, { withCredentials: true });
                setAuthenticated(true);
            } catch (error) {
                sessionStorage.clear();
                setAuthenticated(false);
            } finally {
                setLoading(false);
            }
        };
        checkAuth();
    }, []);

    const shouldShowNavbar = !hideNavbarPaths.includes(location.pathname);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            {shouldShowNavbar && (
                <nav>
                    <Navbar authenticated={authenticated} setAuthenticated={setAuthenticated} BACKEND_URL={BACKEND_URL} toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>
                </nav>  
            )}
            <Routes>
                <Route path="/login" element={
                    authenticated ? <Navigate to="/" /> : <Login authenticated={authenticated} setAuthenticated={setAuthenticated} BACKEND_URL={BACKEND_URL}/>
                } />
                <Route path="/register" element={
                    authenticated ? <Navigate to="/" /> : <Register authenticated={authenticated} setAuthenticated={setAuthenticated} BACKEND_URL={BACKEND_URL}/>
                } />
                <Route exact path="/" element={<CourseSearch authenticated={authenticated} setAuthenticated={setAuthenticated} BACKEND_URL={BACKEND_URL}/>} />
                <Route exact path="/mycourses" element={<MyCourses authenticated={authenticated} setAuthenticated={setAuthenticated} BACKEND_URL={BACKEND_URL}/>} />
                <Route exact path="/resources" element={<Resources authenticated={authenticated} setAuthenticated={setAuthenticated} BACKEND_URL={BACKEND_URL}/>} />
            </Routes>
        </>
    );
}