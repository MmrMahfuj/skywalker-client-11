import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import { Container } from 'react-bootstrap';

const AddTravelPlace = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {

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
                <div className="mx-auto bg-white mt-5 rounded">
                    <h2>this is add events</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="p-3">

                            <label className="d-flex justify-content-start">Event Title</label>
                            <input className="w-100" {...register("title", require)} /><br />
                            <label className="mt-3 d-flex justify-content-start">Description</label>
                            <textarea className="w-100" {...register("des",)} />
                            <br />
                            <label className="mt-3 d-flex justify-content-start">image URL</label>
                            <input className="w-100" {...register("img", require)} /><br />


                        </div>
                        <input type="submit" value="Add Event" />
                    </form>
                </div>
            </Container>

        </div>
    );
};

export default AddTravelPlace;