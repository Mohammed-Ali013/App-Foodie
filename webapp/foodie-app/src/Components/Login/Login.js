import React from 'react'
import { Button, FormGroup, Label, Input } from 'reactstrap';
import { useState } from 'react';
import { useHistory } from 'react-router';
// import './Header.css';
import '../Login/Login.css';

// import { Link } from "react-router-dom";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    let history = useHistory();

    const handleLogin = () => {
        fetch('http://localhost:8081/userservice/api/v1/login', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.token) {
                    localStorage.setItem('token', data.token);
                    localStorage.setItem('email', email);
                    setError(false);
                    // setIsAuthenticated(true);
                    history.push('/dashboard');
                } else {
                    setError(true);
                    history.push('/register');
                }
            });
        console.log(email, password);
    };
    return (
        <div>
            {/* <div className="header">
                <h2 ><i class="fas fa-utensils"></i><i class="fas fa-hamburger"></i>Foodie App</h2>
            </div> */}
             <nav className="navbar navbar-expand-lg navbar-dark " id="header">
        <div className="container-fluid">
            <a href="/" className="navbar-brand">Foodie-App</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>            
        </div>
    </nav>
            <section id="login">
                
                <div className="container" >
                
                    <div className="card">
                    <h2>Login Here</h2>
                        <form className="login-form">
                               <FormGroup >
                                <Label>Email</Label>
                                <div className="email-block"  >
                                    <i class="fas fa-envelope-open-text"></i>
                                    <Input id="email" type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Enter your Email" />
                                </div>
                            </FormGroup>


                            <FormGroup>
                                <Label className="mt-3">Password</Label>
                                <div className="email-block">
                                    <i class="fas fa-key"></i>
                                    <Input id="password" type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Enter your Password" />
                                </div>
                            </FormGroup>

                            <Button className="login-btn" style={{ backgroundColor: "  rgb(105, 10, 29)" }} onClick={handleLogin}>Login</Button>

                            {/* <div className="text-center mt-3">
                    <a href="/register">Register</a>
                    <span className="p-2">|</span>
                    <a href="/forgot-password">Forgot Password</a>
                </div>     */}

                            {/* <div className="mb-2">
                                {
                                    setError ? <div className="alert alert-danger text-center" role="alert">
                                        Invalid Username or Password
                                    </div> : <div></div>
                                }

                            </div> */}

                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}
