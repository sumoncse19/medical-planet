import React, { useState } from 'react';
import { ToggleButton } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hook/useAuth';
import './Navbar.css'

const Navbar = () => {
    const activeTab = {
        fontWeight: 'bold',
        border: '2px solid yellow',
        borderRadius: '5px',
    }

    const [isLogin, setIsLogin] = useState(false);

    const { user, logOut, handleLogin } = useAuth();

    const logIn = () => {
        handleLogin();
    }

    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark my-nav">
            <div class="container-fluid">
                <NavLink class="navbar-brand fw-bold" to="/" style={{ fontFamily: "Permanent Marker"}}>Medical Planet</NavLink>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                
                <div class="collapse navbar-collapse text-center" id="navbarTogglerDemo02" style={{ fontFamily: "IM Fell English SC" }}>
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <NavLink className='text-warning text-decoration-none nav-link' activeStyle={activeTab} to='/home' >HOME</NavLink>
                        </li>
                        
                        <li class="nav-item dropdown">
                            <NavLink className='text-warning text-decoration-none nav-link dropdown-toggle' id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" activeStyle={activeTab} to='/services'>SERVICES</NavLink>

                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li>
                                    <NavLink className='text-dark text-decoration-none dropdown-item' activeStyle={activeTab} to='/treatment'>TREATMENT</NavLink>
                                </li>
                                <li>
                                    <NavLink className='text-dark text-decoration-none dropdown-item' activeStyle={activeTab} to='/medicalServices'>MEDICAL SERVICE</NavLink>
                                </li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <NavLink className='text-warning text-decoration-none nav-link' activeStyle={activeTab} to='/doctors'>DOCTORS</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink className='text-warning text-decoration-none nav-link' activeStyle={activeTab} to='/about'>ABOUT US</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink className='text-warning text-decoration-none nav-link' activeStyle={activeTab} to='/contact'>CONTACT US</NavLink>
                        </li>
                    </ul>

                    {/* <div>
                        <Link to='/login'>
                            <button onClick={ToggleButton} className='btn btn-outline-warning me-3'><i class="fas fa-sign-in-alt"></i> {isLogin ?
                                "Login" :
                                "LogOut"}</button>
                        </Link>
                    </div> */}

                    {
                        user.email &&
                        <span style={{ color: 'white', marginRight: '10px' }}>Hello {user.displayName} </span>
                    }

                    {
                        user?.email ?
                            <button onClick={logOut} className='btn btn-outline-warning me-3'><img className='img-fluid rounded-circle' style={{height:'35px'}} src={user.photoURL} alt="" /> Log Out</button> :
                            <div>
                                <Link to='/login'>
                                    <button className='btn btn-outline-warning me-3'><i class="fas fa-sign-in-alt"></i> Login/Register</button>
                                </Link>
                            </div>
                    }
                </div>
            </div>
        </nav>
    );
};

export default Navbar;