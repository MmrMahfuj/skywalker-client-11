import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import { Col, Container, Row } from 'react-bootstrap';
import useAuth from '../hooks/useAuth';
import img1 from '../../images/add-place-img.png'

const AddTravelPlace = () => {
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        data.email = user?.email
        data.status = "Pending..."
        axios.post('https://sheltered-fjord-49130.herokuapp.com/travelPlaces', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset()

                }
            })
    };
    return (
        <div>
            <Container>
                <Row>
                    <Col md={6}>
                        <div className="mx-auto bg-white mt-5 p-3 rounded">
                            <h2>Add Place</h2>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="p-3">

                                    <label className="d-flex justify-content-start">Name of the place</label>
                                    <input className="w-100" {...register("title", require)} /><br />
                                    <label className="mt-3 d-flex justify-content-start">Description</label>
                                    <textarea className="w-100" {...register("des",)} />
                                    <br />
                                    <label className="mt-3 d-flex justify-content-start">image URL</label>
                                    <input className="w-100" {...register("img", require)} /><br />


                                </div>
                                <input type="submit" className="regular-btn" value="ADD PLACE" />
                            </form>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="d-flex align-items-center justify-content-center">
                            <img src={img1} className="img-fluid " alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AddTravelPlace;