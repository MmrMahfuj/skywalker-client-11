import React from 'react';
import { Col } from 'react-bootstrap';

const TravelPlace = ({ travelPlace }) => {
    const { title, des, img, _id } = travelPlace;
    const handleBook = id => {
        console.log(id);
    }
    return (
        <>
            <Col md={4}>
                <div className="border">
                    <img src={img} className="tour-place-img w-100" alt="" />

                    <div className="p-3 bg-white">
                        <h4>{title}</h4>
                        <p>{des.slice(0, 95)}</p>
                        <button onClick={() => handleBook}>book now</button>
                    </div>
                </div>
            </Col>
        </>
    );
};

export default TravelPlace;