import React, { useState } from 'react';
import { Col, Row, Button, Container } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import registerImg from '../../../images/register.jpg';
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
        <div className="py-5 bg-color">
            <Container>
                <Row>
                    <Col md={6}>
                        <div className="container-lg m-2 mx-auto">
                            <div className="login mx-auto p-3">
                                <form onSubmit={handleRegistration}>
                                    <h3 className="mb-5 custom-auth-title">REGISTER</h3>
                                    <input onBlur={handleNameChange} required className="m-2 p-2 w-75" type="text" name="" id="name" placeholder="Your Name" /><br />

                                    <input onBlur={handleEmailChange} required className="m-2 p-2 w-75" type="email" name="" id="email" placeholder="Your Email" /><br />

                                    <input onBlur={handlePasswordChange} required className="m-2 p-2 w-75" type="password" name="" id="password" placeholder="Your Password" /><br />
                                    <p className="text-danger mt-2">{error}</p>
                                    <br />

                                    <input className="w-75 regular-btn p-2 rounded text-white" type="submit" value="Register" />


                                </form>

                                <p className="mt-2">I have an account? <Link to="/login">Login</Link></p>
                            </div>

                        </div>


                    </Col>
                    <Col className="align-self-center"><img src={registerImg} alt="" className="img-fluid" /></Col>
                </Row>
            </Container>
        </div>
    );
};

export default Register;