import React, { useEffect, useState } from 'react';
import { Container, Spinner, Table } from 'react-bootstrap';
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
            fetch(`https://sheltered-fjord-49130.herokuapp.com/deleteBookings/${id}`, {
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

            <Container>
                <div className="bookings-page-height">
                    <h1>Your Bookings: {myBookings?.length}</h1>
                    <Table striped bordered hover responsive>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Place image</th>
                                <th>Place Name</th>
                                <th>Your Name and Email</th>
                                <th>Your Current Location</th>
                                <th>Selected Your package</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {myBookings?.map((booking, index) => (

                                <tr key={booking._id}>
                                    <td>{index}</td>
                                    <td><img src={booking?.PlaceImg} className="travelPlace-img w-100" alt="" /></td>
                                    <td><h6 className="fw-bolder">{booking?.PlaceName}</h6></td>
                                    <td>Name: {booking?.name} <br /> <br />Email: {booking?.email}</td>
                                    <td><p>{booking?.currentLocation}</p></td>
                                    <td>{booking?.package}</td>
                                    <td>{booking?.status}
                                    </td>

                                    <button className="cancel-btn" onClick={() => handleCancel(booking?._id)}>Cancel</button>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </Container>

            {
                myBookings.length === 0 && <Container className="mb-5">
                    <div className="">
                        <h2>You are no Booking place added.</h2>
                        <h5>Please added place and see here</h5>
                    </div>
                </Container>
            }



        </div>
    );
};

export default MyBooking;


// 
// https://sheltered-fjord-49130.herokuapp.com

// 