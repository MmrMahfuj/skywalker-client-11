import React from 'react';
import { Col } from 'react-bootstrap';

const TravelPlace = ({ travelPlace }) => {
    const { title, des, img, _id } = travelPlace
    return (
        <>
            <Col md={4}>

                <img src={img} className="tour-place-img w-100" alt="" />

                <div>
                    <h3>{title}</h3>
                    <p>{des}</p>
                    <button>booking now</button>
                </div>
            </Col>
        </>
    );
};

export default TravelPlace;