import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Accordion, Carousel, Col, Container, Row, Spinner } from 'react-bootstrap';
import useAuth from '../hooks/useAuth';
import TravelPlace from '../TravelPlace/TravelPlace';
import './Home.css';
import faqImg from '../../images/faqImg.png';
import oceanImg from '../../images/oc-img-1.jpg';


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
                <Container>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 banner-img"
                                src="https://i.ibb.co/48BhSN0/canada-and-usa-ontario-and-new-york-state-niagara-elevated-view-of-niagara-falls-548748511-59b4a4349.jpg"
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>Montreal, Canada</h3>
                                <p>As you listen to the sound of French being spoken around you and explore Old Montreal, wanderin</p>
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
                                src="https://i.ibb.co/QmVtnvZ/xefZBsj.jpg"
                                alt="Second slide"
                            />

                            <Carousel.Caption>
                                <h3>Rome, Italy</h3>
                                <p>The Eternal City is more like a giant, living museum. Visitors are immersed in and surrounded</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Container>
            </div>
            <Container className=" mt-5">
                <h2 className="my-5 fw-bold">Dream Destinations</h2>
                <Row className="g-4">
                    {
                        travelPlaces.map(travelPlace => <TravelPlace
                            key={travelPlace._id}
                            travelPlace={travelPlace}
                        ></TravelPlace>)
                    }
                </Row>
            </Container>
            <Container className="mt-5 bg-light p-3">
                <h2 className="mb-3 text-start fw-bold">Explore Our Top Hotels</h2>
                <Row>
                    <Col md={3}>
                        <div className="border  custom-hotel-cart">
                            <div>
                                <img src="https://i.ibb.co/MRqwxxV/hotel-1.jpg" className="w-100 custom-hotel-img" alt="" />
                            </div>
                            <div className="p-2">
                                <h6 className="fw-bolder">Broadway Hotel and hostel</h6>
                                <p>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                                        </svg>
                                    </span> 230 West 101st Street, New York
                                </p>
                                <h6 className="fw-bolder">$50 / Night</h6>
                            </div>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className="border custom-hotel-cart">
                            <div>
                                <img src="https://i.ibb.co/KDn8915/hotel-2.jpg" className="w-100 custom-hotel-img" alt="" />
                            </div>
                            <div className="p-2">
                                <h6 className="fw-bolder">Umaya Ubaud Villa</h6>
                                <p>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                                        </svg>
                                    </span> Ji Nyuh Bojog Br. Nyuh Kuning, Bali
                                </p>
                                <h6 className="fw-bolder">$41 / Night</h6>
                            </div>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className="border custom-hotel-cart">
                            <div>
                                <img src="https://i.ibb.co/Syh4f87/hotel-3.jpg" className="w-100 custom-hotel-img" alt="" />
                            </div>
                            <div className="p-2">
                                <h6 className="fw-bolder">Ercan Inn Hotel</h6>
                                <p>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                                        </svg>
                                    </span> Kadirga Limani Cad, NO:97/A Sultanahmer, istanbul
                                </p>
                                <h6 className="fw-bolder">$110 / Night</h6>
                            </div>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className="border custom-hotel-cart">
                            <div>
                                <img src="https://i.ibb.co/BLW7Y65/hotel-4.jpg" className="w-100 custom-hotel-img" alt="" />
                            </div>
                            <div className="p-2">
                                <h6 className="fw-bolder">Royal Heritage Pavillon Jomtien Hotel</h6>
                                <p>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                                        </svg>
                                    </span> 246/91 M,12 Jomtien Beach Rd, Between Soi 15 : 16 Pattaya
                                </p>
                                <h6 className="fw-bolder">$73 / Night</h6>
                            </div>
                        </div>
                    </Col>

                </Row>
            </Container>
            <Container className="mt-5 bg-light p-3">
                <h2 className="mb-3 text-start fw-bold">Frequently asked question</h2>
                <Row>
                    <Col md={6}>
                        <img src={faqImg} className="img-fluid" alt="" />
                    </Col>
                    <Col md={6}>
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Do I need to get any vaccinations before I travel?</Accordion.Header>
                                <Accordion.Body>
                                    If you are heading to places like Asia and Latin America, it's likely you will need some vaccinations, pre travels. Run this by your GP or a Travel Specialist Doctor, or click here to find out if you require any vaccinations,
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>What documents do I need to travel?</Accordion.Header>
                                <Accordion.Body>
                                    Dependent on where you are travelling and your nationality, you will need a valid passport and may also need visas to enter into certain countries - please check this well in advance of your trip departure date. Some countries also require passports to have 3-6 months left on them before the given expire date, so be sure to double check this before booking your travels.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>How do I know what's right for me?</Accordion.Header>
                                <Accordion.Body>
                                    To know which travel style is right for you, you need to know exactly what it is you want to get out of your trip. Think abut the categories above, which one sounds most like your ideal trip, and then discover more here.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>How do I make payments?</Accordion.Header>
                                <Accordion.Body>
                                    you can make payments towards your trip through manage my booking.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header>Can I book more then one trip at a time?</Accordion.Header>
                                <Accordion.Body>
                                    Absolutely. Why limit yourself, right? In fact, if you book more than one trip ai a time, we will say thanks by offering you a discount off your second trip. Please just note each trip will need to be booked individually online.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="5">
                                <Accordion.Header>Can i have a room to myself?</Accordion.Header>
                                <Accordion.Body>
                                    Yes, In most regions and on most trips there is the option to upgrade to a private room, for an additional fee.
                                </Accordion.Body>
                            </Accordion.Item>

                        </Accordion>
                    </Col>
                </Row>
            </Container>
            <Container className="mt-5">
                <img src={oceanImg} className="img-fluid" alt="" />
            </Container>
        </>
    );
};

export default Home;



/*
https://i.ibb.co/BLW7Y65/hotel-4.jpg
https://i.ibb.co/Syh4f87/hotel-3.jpg
https://i.ibb.co/KDn8915/hotel-2.jpg
https://i.ibb.co/MRqwxxV/hotel-1.jpg
*/