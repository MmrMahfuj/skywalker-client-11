import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TravelPlace = ({ travelPlace }) => {
    const { title, des, img, _id } = travelPlace;

    return (
        <>
            <Col md={4}>
                <div className="">
                    <img src={img} className="rounded-circle img-fluid img-custom-circle" alt="" />

                    <div className="p-3 bg-white">
                        <h4>{title}</h4>
                        <p>{des.slice(0, 95)}</p>
                        <Link style={{ textDecoration: 'none', }}

                            to={`/Booking/${_id}`}>
                            <button className="regular-btn w-75">Book Now</button>
                        </Link>
                    </div>
                </div>
            </Col>
        </>
    );
};

export default TravelPlace;

// tour-place-img w-100