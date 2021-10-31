import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import notFound from '../../images/not-found.png'
import './NotFound.css';

const NotFound = () => {
    return (
        <div>
            <Container>
                <div className="">
                    <img src={notFound} className="w-100 notFound-img" alt="" />
                </div>
                <Link to="/home">
                    <button className="regular-btn">Go Back Home</button>
                </Link>
            </Container>
        </div>
    );
};

export default NotFound;