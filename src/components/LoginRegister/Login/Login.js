import React, { useState, } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import loginImg from '../../../images/login.png';
import useAuth from '../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const { signInUsingGoogle, signInEmailAndPassword, setError, error, setUser, setIsLoading } = useAuth();

    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }

    const handleLogin = e => {
        e.preventDefault();
        signInEmailAndPassword(email, password)
            .then(result => {
                setUser(result.user);
                setError('');
                history.push(redirect_uri);
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
                                <form onSubmit={handleLogin}>
                                    <h3 className="mb-5 custom-auth-title">Please <span className="title-variant">Login</span></h3>
                                    <input className="m-2 p-2 w-75" onBlur={handleEmailChange} type="email" name="" id="" placeholder="Your Email" required /><br />

                                    <input className="m-2 p-2 w-75" onBlur={handlePasswordChange} type="password" name="" id="" placeholder="Your Password" required /><br />
                                    <div className="d-flex justify-content-around mt-3">
                                        <span>
                                            <input type="checkbox" name="" id="" className="m-1 text-start" />
                                            <label htmlFor="vehicle2"> Remember Me</label>
                                        </span>
                                        <span>
                                            {/* <Link>Forget Password</Link> */}
                                        </span>
                                    </div>
                                    <br />
                                    <p className="text-danger mt-2">{error}</p>
                                    <input className="w-75 mt-3 p-2 rounded text-white regular-custom-btn " type="submit" value="Login" />

                                </form>

                                <p className="mt-2">Don't have an account? <Link to="/register">Create an account</Link></p>
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
                    <Col md={6} className="align-self-center">
                        <img src={loginImg} className="img-fluid" alt="" />
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Login;