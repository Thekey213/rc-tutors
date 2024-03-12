import React, { useState } from 'react';
import iieLogo from '../../assets/images/iie_logo.png';
import loginImage from '../../assets/images/login_image.jpeg';
import rcLogo from '../../assets/images/rc_logo.jpeg';
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase"; // Adjust this import path as necessary

import { useNavigate } from 'react-router-dom';

function RegisterForm() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match.");
            return;
        }
        setLoading(true);
        setError(null);
        createUserWithEmailAndPassword(auth, formData.email, formData.password)
            .then((userCredential) => {
                // Registration successful
                console.log('User registered:', userCredential.user);
                navigate("/logi") // Optionally, redirect the user to a different page or show a success message
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error registering:', error);
                setError(error.message);
                setLoading(false);
                // Handle errors, e.g., show an error message to the user
            });
    };

    return (
        <div className="vh-90">
            <div className="container-fluid h-custom mb-2 mt-3">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-md-9 col-lg-6 col-xl-5">
                        <img src={loginImage} alt="login_img" className="img-fluid" />
                    </div>
                    <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                        <form onSubmit={handleSubmit}>
                            <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                                <div>
                                    <img src={iieLogo} alt="iie-logo" className="img-fluid" />
                                </div>
                                <div className="ms-3">
                                    <img src={rcLogo} alt="rc-logo" className="img-fluid" />
                                </div>
                            </div>
                            <div className="divider d-flex align-items-center my-4">
                                <p className="text-center fw-bold mx-3 mb-0">Register</p>
                            </div>
                            <div className="form-outline mb-1">
                                <label htmlFor="firstName">First Name</label>
                                <input 
                                    type="text" 
                                    id="firstName" 
                                    name="firstName" 
                                    value={formData.firstName} 
                                    onChange={handleChange} 
                                    className="form-control" 
                                />
                            </div>
                            <div className="form-outline mb-1">
                                <label htmlFor="lastName">Surname</label>
                                <input 
                                    type="text" 
                                    id="lastName" 
                                    name="lastName" 
                                    value={formData.lastName} 
                                    onChange={handleChange} 
                                    className="form-control" 
                                />
                            </div>
                            <div className="form-outline mb-1">
                                <label htmlFor="email">Email address</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="email" 
                                    value={formData.email} 
                                    onChange={handleChange} 
                                    className="form-control" 
                                    placeholder="use school email" 
                                />
                            </div>
                            <div className="form-outline mb-1">
                                <label htmlFor="password">Password</label>
                                <input 
                                    type="password" 
                                    id="password" 
                                    name="password" 
                                    value={formData.password} 
                                    onChange={handleChange} 
                                    className="form-control" 
                                />
                            </div>
                            <div className="form-outline mb-1">
                                <label htmlFor="confirmPassword">Confirm Password</label>
                                <input 
                                    type="password" 
                                    id="confirmPassword" 
                                    name="confirmPassword" 
                                    value={formData.confirmPassword} 
                                    onChange={handleChange} 
                                    className="form-control" 
                                />
                            </div>
                            <div className="text-center text-lg-start mb-4">
                                <button type="submit" className="btn btn-danger" style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}>
                                    Register
                                </button>
                                <p className="small fw-bold pt-1 mb-0">
                                    Already have an account? <Link to="/login">Login</Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-danger">
                <div className="text-white mb-3 mb-md-0">
                    Copyright © 2020. All rights reserved.
                </div>
            </div>
            {error && <div className="alert alert-danger" role="alert">{error}</div>}
        </div>
    );
}

export default RegisterForm;
