import React, { useState } from 'react';
import { Col, Row, Button, Container } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import registerImg from '../../../images/register.png';
import useAuth from '../../hooks/useAuth';
import './Register.css';

const Register = () => {
    const { signInUsingGoogle, registerEmailAndPassword, error, setError, setName, setUser, setIsLoading, userName } = useAuth();

    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleNameChange = e => {
        setName(e.target.value);
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }

    const handleRegistration = e => {
        e.preventDefault();
        if (password.length < 6) {
            setError("Password must be at least 6 characters long")
            return;
        };

        registerEmailAndPassword(email, password)
            .then(result => {
                setUser(result.user);
                console.log(result.user);
                setError('');
                userName();
                history.push(redirect_uri)
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    }


    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                setUser(result.user)
                setError('')
                history.push(redirect_uri)
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    return (
        <>
            <Container>
                <Row>
                    <Col md={6}>
                        <div className="container-lg m-2 mx-auto">
                            <div className="login mx-auto p-3">
                                <form onSubmit={handleRegistration}>
                                    <h3 className="mb-5 custom-auth-title">Please <span className="title-variant">Register</span></h3>
                                    <input onBlur={handleNameChange} required className="m-2 p-2 w-75" type="text" name="" id="name" placeholder="Your Name" /><br />

                                    <input onBlur={handleEmailChange} required className="m-2 p-2 w-75" type="email" name="" id="email" placeholder="Your Email" /><br />

                                    <input onBlur={handlePasswordChange} required className="m-2 p-2 w-75" type="password" name="" id="password" placeholder="Your Password" /><br />
                                    <p className="text-danger mt-2">{error}</p>
                                    <br />

                                    <input className="w-75 regular-custom-btn p-2 rounded text-white" type="submit" value="Register" />


                                </form>

                                <p className="mt-2">I have an account? <Link to="/login">Login</Link></p>
                            </div>

                        </div>
                        <div>
                            <Row>
                                <Col>
                                    <hr />
                                </Col>
                                OR
                                <Col>
                                    <hr /></Col>
                            </Row>
                        </div>
                        <div className="login-another mx-auto mb-4">
                            <Button className="w-50 rounded-pill regular-custom-btn" onClick={handleGoogleLogin}>
                                <span className="me-3"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-google" viewBox="0 0 16 16">
                                    <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                                </svg></span>
                                Sign In</Button>
                        </div>
                    </Col>
                    <Col className="align-self-center"><img src={registerImg} alt="" className="img-fluid" /></Col>
                </Row>
            </Container>
        </>
    );
};

export default Register;