// MainRouter.js
import React from "react";
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';  // Make sure the path is correct
import Footer from './components/Footer';  // Make sure the path is correct
import Home from './components/Home';  // Make sure the path is correct
import Signup from './components/Signup';  // Make sure the path is correct
import 'bootstrap/dist/css/bootstrap.css';  // Ensure Bootstrap CSS is imported
import Login from './components/Login';
import Attendance from './components/Attendance';
const MainRouter = () => {
    const storedJwt = localStorage.getItem('token');

    React.useEffect(() => {
        console.log('Stored JWT:', storedJwt);
        // Perform any additional actions if needed
    }, [storedJwt]);

    return (
        <div className="d-flex flex-column min-vh-100">
            <NavBar />
            <div className="flex-grow-1">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/attendance" element={<Attendance />} />


                </Routes>
            </div>
            <Footer />
        </div>
    );
}

export default MainRouter;
