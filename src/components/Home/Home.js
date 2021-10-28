import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Carousel, Container, Row } from 'react-bootstrap';
import banner from '../../images/banner.jpg';
import TravelPlace from '../TravelPlace/TravelPlace';
import './Home.css';

const Home = () => {
    const [travelPlaces, setTravelPlaces] = useState([]);

    useEffect(() => {
        fetch('https://sheltered-fjord-49130.herokuapp.com/travelPlaces')
            .then(res => res.json())
            .then(data => setTravelPlaces(data))
    }, [])
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
                            src={banner}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 banner-img"
                            src={banner}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <Container className="bg-light mt-3">
                <h2>this is service</h2>
                <Row>
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