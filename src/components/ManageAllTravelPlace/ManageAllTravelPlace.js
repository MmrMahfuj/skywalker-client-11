import React, { useEffect, useState } from 'react';
import { Button, Container, Spinner, Table } from 'react-bootstrap';
import useAuth from '../hooks/useAuth';
import './ManageAllTravelPlace.css';

const ManageAllTravelPlace = () => {
    const { isLoading, setIsLoading } = useAuth();

    const [travelPlaces, setTravelPlaces] = useState([]);
    const [control, setControl] = useState(false);


    useEffect(() => {
        setIsLoading(true)
        fetch('https://sheltered-fjord-49130.herokuapp.com/travelPlaces')
            .then(res => res.json())
            .then(data => {
                setTravelPlaces(data)
                setIsLoading(false)
            })
    }, [control])

    if (isLoading) {
        return <Spinner animation="border" variant="success" />
    }



    // update status
    const handleStatus = id => {
        const status = { status: "Approved" }
        const url = `https://sheltered-fjord-49130.herokuapp.com/travelPlaces/${id}`;
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




    return (
        <Container>
            <div>
                <h1>All Travel Place {travelPlaces?.length}</h1>
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
                                <td>{travelPlace?.title}</td>
                                <td>{travelPlace?.status}<br />
                                    <Button onClick={() => handleStatus(travelPlace?._id)} variant="secondary" size="sm">accept</Button>
                                </td>
                                <button onClick={() => handleDeleteTravelPlace(travelPlace?._id)} className="btn bg-danger p-2">Delete</button>
                            </tr>
                        </tbody>

                    ))}
                </Table>
            </div>
        </Container>
    );
};

export default ManageAllTravelPlace;