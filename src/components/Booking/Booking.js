import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import './Booking.css';

const Booking = () => {
    const { id } = useParams();


    const [travelPlaces, setTravelPlaces] = useState([]);
    const { user, isLoading, setIsLoading } = useAuth();
    const { register, handleSubmit, reset } = useForm();


    useEffect(() => {
        // setIsLoading(true)
        fetch(`https://sheltered-fjord-49130.herokuapp.com/travelPlaces/${id}`)
            .then(res => res.json())
            .then(data => {
                setTravelPlaces(data)
                // setIsLoading(false)
            })
    }, [])

    // if (isLoading) {
    //     return <Spinner animation="border" variant="success" />
    // }

    const onSubmit = data => {
        data.PlaceId = travelPlaces._id
        data.PlaceName = travelPlaces.title
        data.PlaceImg = travelPlaces.img
        data.email = user?.email
        data.status = "Pending..."
        axios.post('https://sheltered-fjord-49130.herokuapp.com/bookings', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Proceed successfully');
                    reset()

                }
            })
    };


    return (
        <div>
            <Container>
                <Row>
                    <Col md={6}>
                        <div className="border">
                            <img src={travelPlaces?.img} className="tour-place-img w-100" alt="" />

                            <div className="p-3 bg-white">
                                <h4>{travelPlaces?.title}</h4>
                                <p className="custom-para">{travelPlaces?.des}</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div>
                            <h2>Please fill up this form</h2>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="p-3">

                                    <label className="d-flex justify-content-start">Full Name</label>
                                    <input className="w-100" {...register("name", require)} /><br />

                                    <label className="d-flex justify-content-start mt-3">Email</label>
                                    <input type="email" className="w-100" {...register("formEmail", require)} /><br />

                                    <label className="d-flex justify-content-start mt-3">Phone Number</label>
                                    <input className="w-100" {...register("Phone", require)} /><br />

                                    <label className="mt-3 d-flex justify-content-start">Your Current Location</label>
                                    <textarea className="w-100" {...register("currentLocation",)} />
                                    <br />

                                    <label className="mt-3 d-flex justify-content-start mt-3">Your Permanent Address</label>
                                    <textarea className="w-100" {...register("permanentAddress",)} />
                                    <br />

                                    <label className="mt-3 d-flex justify-content-start mt-3 mb-2">Please select Your Package</label>
                                    <select {...register("package")} className="w-100">
                                        <option value="3 Days $100">3 Days $100</option>
                                        <option value="7 Days $150">7 Days $150</option>
                                        <option value="15 Days $200">15 Days $200</option>
                                    </select>


                                </div>
                                <input className="regular-btn w-75 mt-3" type="submit" value="Proceed" />
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Booking;