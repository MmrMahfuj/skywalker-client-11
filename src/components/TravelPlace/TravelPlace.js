import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TravelPlace = ({ travelPlace }) => {
    const { title, des, img, _id } = travelPlace;

    return (
        <>
            <Col md={4}>
                <div className="border">
                    <img src={img} className="tour-place-img w-100" alt="" />

                    <div className="p-3 bg-white">
                        <h4>{title}</h4>
                        <p>{des.slice(0, 95)}</p>
                        <Link style={{ textDecoration: 'none', }}

                            to={`/Booking/${_id}`}>
                            <p className="custom-service-link">Book Now</p>
                        </Link>
                    </div>
                </div>
            </Col>
        </>
    );
};

export default TravelPlace;