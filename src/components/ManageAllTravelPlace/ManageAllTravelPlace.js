import React, { useEffect, useState } from 'react';
import { Button, Container, Spinner, Table } from 'react-bootstrap';
import useAuth from '../hooks/useAuth';
import './ManageAllTravelPlace.css';

const ManageAllTravelPlace = () => {
    const { isLoading, setIsLoading } = useAuth();

    const [bookings, setBookings] = useState([]);
    const [control, setControl] = useState(false);


    useEffect(() => {
        setIsLoading(true)
        fetch('https://sheltered-fjord-49130.herokuapp.com/bookings')
            .then(res => res.json())
            .then(data => {
                setBookings(data)
                setIsLoading(false)
            })
    }, [control])

    if (isLoading) {
        return <Spinner animation="border" variant="success" />
    }



    // update status Bookings
    const handleStatus = id => {
        const status = { status: "Approved" }
        const url = `https://sheltered-fjord-49130.herokuapp.com/statusBookings/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(status)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Updated Successfully.')
                    setControl(!control);
                }
                else {
                    setControl(false);
                }
            });

    }

    // delete api
    const handleDeleteTravelPlace = id => {
        const proceed = window.confirm('Are you sure, you want to delete');
        if (proceed) {
            fetch(`https://sheltered-fjord-49130.herokuapp.com/deleteBookings/${id}`, {
                method: "DELETE",
                headers: { "content-type": "application/json" },
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount) {
                        setControl(!control);
                    } else {
                        setControl(false);
                    }
                });
        }

    }




    return (
        <Container>
            <div className="bookings-page-height">
                <h1>All Bookings: {bookings?.length}</h1>
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Place image</th>
                            <th>Place Name</th>
                            <th>Customer Name and Email</th>
                            <th>Customer Current Location</th>
                            <th>Selected package</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings?.map((booking, index) => (

                            <tr key={booking._id}>
                                <td>{index}</td>
                                <td><img src={booking?.PlaceImg} className="travelPlace-img w-100" alt="" /></td>
                                <td><h6 className="fw-bolder">{booking?.PlaceName}</h6></td>
                                <td>Name: {booking?.name} <br /> <br />Email: {booking?.email}</td>
                                <td><p>{booking?.currentLocation}</p></td>
                                <td>{booking?.package}</td>
                                <td>{booking?.status}
                                </td>

                                <button onClick={() => handleDeleteTravelPlace(booking?._id)} className="btn bg-danger text-white p-2 mt-2">Delete</button><br />
                                <button className=" small-btn" onClick={() => handleStatus(booking?._id)}>accept</button>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </Container>
    );
};

export default ManageAllTravelPlace;


/*










*/



// this old
/*
<Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>img</th>
                            <th>Name</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {travelPlaces?.map((travelPlace, index) => (
                        <tbody key={travelPlace._id}>
                            <tr>
                                <td>{index}</td>
                                <td><img src={travelPlace?.img} className="travelPlace-img w-100" alt="" /></td>
                                <td><h6 className="fw-bolder">{travelPlace?.title}</h6></td>
                                <td>{travelPlace?.status}<br />
                                    <button className=" small-btn" onClick={() => handleStatus(travelPlace?._id)}>accept</button>
                                </td>
                                <button onClick={() => handleDeleteTravelPlace(travelPlace?._id)} className="btn bg-danger text-white p-2 mt-2">Delete</button>
                            </tr>
                        </tbody>

                    ))}
                </Table>

*/