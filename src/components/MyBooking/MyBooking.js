import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import useAuth from '../hooks/useAuth';
import './MyBooking.css';

const MyBooking = () => {
    const [myBookings, setMyBookings] = useState([]);
    const { user, isLoading, setIsLoading } = useAuth();
    const [control, setControl] = useState(false);





    useEffect(() => {
        setIsLoading(true)
        const url = `https://sheltered-fjord-49130.herokuapp.com/emailTravelPlaces/${user.email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setMyBookings(data)
                setIsLoading(false)
            })
    }, [user.email, control])

    const handleCancel = id => {
        const proceed = window.confirm('Are you sure, you want to delete');
        if (proceed) {
            fetch(`https://sheltered-fjord-49130.herokuapp.com/travelPlaces/${id}`, {
                method: "DELETE",
                headers: { "content-type": "application/json" },
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    if (data.deletedCount) {
                        setControl(!control);
                    } else {
                        setControl(false);
                    }
                });
        }
    }

    if (isLoading) {
        return <Spinner animation="border" variant="success" />
    }

    return (
        <div className="py-5 add-place-hight">

            <Container className="my-5">
                <Row>
                    {
                        myBookings.map(myBooking => <Col md={4}>
                            <div className="border booking-cart">
                                <Row>
                                    <Col>
                                        <img src={myBooking.img} className="booking-img w-100" alt="" />
                                    </Col>
                                    <Col>
                                        <div className=" booking-title">
                                            <h4>{myBooking.title.slice(0, 15)}</h4>
                                            <p>{myBooking.des.slice(0, 30)}</p>
                                            <button className="cancel-btn" onClick={() => handleCancel(myBooking._id)}>Cancel</button>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>)
                    }

                </Row>
            </Container>

            {
                myBookings.length === 0 && <Container className="mb-5">
                    <div className="">
                        <h2>You are no place added.</h2>
                        <h5>Please added place and see here</h5>
                    </div>
                </Container>
            }



        </div>
    );
};

export default MyBooking;