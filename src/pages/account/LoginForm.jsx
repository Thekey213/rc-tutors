// eslint-disable-next-line no-unused-vars
import React, { useState, useContext } from 'react';
import { AuthContext } from '../../firebase/AuthProvider';
import { Link } from 'react-router-dom';

import './style.css'; // Import your styles
import iiLogo from "../../assets/images/iie_logo.png";
import rcLogo from "../../assets/images/rc_logo.jpeg";
import loImg from "../../assets/images/login_image.jpeg";
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/footer';   


function LoginForm() {

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const { loginUser } = useContext(AuthContext); // Access loginUser from AuthContext

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await loginUser(formData.email, formData.password); // Call loginUser with email and password
            console.log("Signed in"); // Corrected to use console.error
            navigate("/home");

        } catch (error) {
            console.error('Login failed:', error); // Corrected to use console.error
            // Handle login failure, e.g., show an error message to the user
        }
    };
    

    return (
        <section className="vh-90">
            <div className="container-fluid h-custom mt-5">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-md-9 col-lg-6 col-xl-5">
                    <div className="d-none d-lg-block">
                            <img src={loImg} alt="login_img" className="img-fluid" />
                        </div>
                    </div>
                    <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                        <form onSubmit={handleSubmit}>
                            <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                                <div>
                                    <img src={iiLogo} alt="iie-logo" className="img-fluid" />
                                </div>
                                <div className="ms-3">
                                    <img src={rcLogo} alt="rc-logo" className="img-fluid" />
                                </div>
                            </div>
                            <div className="divider d-flex align-items-center my-3">
                                <p className=" fw-bold h3 mx-1 mb-0">Login</p>
                            </div>
                            <div className="text-center text-lg-start mt-1">
                                <p className="small fw-bold mt-2 pt-1 mb-3"> Sign in with your organizational account</p>
                            </div>
                            <div className="form-textbox">
                                <label htmlFor="email">Email address</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="email" 
                                    value={formData.email} 
                                    onChange={handleChange} 
                                    className="form-control" 
                                />
                            </div>
                            <div className="form-textbox">
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
                            <div className="text-center text-lg-start mt-4 pt-2">
                                <button type="submit" className="btn btn-danger" style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}>
                                    Login
                                </button>
                                
                                <p className="small fw-bold mt-2 pt-1 mb-5">
                                    
                                    Don't have an account? <Link to="/">Register</Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
          <br></br> <br></br> <br></br> <br></br>
           <Footer/>
        </section>
    );
}

export default LoginForm;
