import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Carousel, Container, Row, Spinner } from 'react-bootstrap';
import banner from '../../images/banner.jpg';
import useAuth from '../hooks/useAuth';
import TravelPlace from '../TravelPlace/TravelPlace';
import './Home.css';

const Home = () => {
    const [travelPlaces, setTravelPlaces] = useState([]);
    const { isLoading, setIsLoading } = useAuth();

    useEffect(() => {
        setIsLoading(true)
        fetch('https://sheltered-fjord-49130.herokuapp.com/travelPlaces')
            .then(res => res.json())
            .then(data => {
                setTravelPlaces(data)
                setIsLoading(false)
            })
    }, [])
    if (isLoading) {
        return <Spinner animation="border" variant="success" />
    }

    return (
        <>
            <div>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 banner-img"
                            src={banner}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 banner-img"
                            src="https://i.ibb.co/6WFqBsv/top-places-to-visit-in-the-world-san-francisco.jpg"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>San Francisco, California</h3>
                            <p>San Francisco is a truly unique American city and one of the world's great vacation spots. Explore its hills</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 banner-img"
                            src="https://i.ibb.co/0MVgv2q/top-places-to-visit-in-the-world-paris-france.jpg"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Paris, France</h3>
                            <p>No visit to the French capital is complete without a trip to and a trip up its most iconic structure.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <Container className="bg-light mt-3">
                <h2>this is service</h2>
                <Row className="g-4">
                    {
                        travelPlaces.map(travelPlace => <TravelPlace
                            key={travelPlace._id}
                            travelPlace={travelPlace}
                        ></TravelPlace>)
                    }
                </Row>
            </Container>
        </>
    );
};

export default Home;