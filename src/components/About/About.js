import React from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import './About.css';

const About = () => {
    return (
        <div>
            <Container>
                <div className="">
                    <h2 className="my-5 fw-bolder">About Us</h2>
                    <p className="about-para">
                        <strong> Skywalker </strong>
                        is a full-service Outbound Tour Operator in Bangladesh. The founder of
                        <strong> Skywalker </strong>
                        is a 100% tourism professional with knowledge of most of the destinations and services in the world for people to enjoy. Our specialized departments with expertise offer a variety of services. Each department works independently to provide the best services to our customers& clients and become the best travel agency in Bangladesh, focusing on creating friendship and a long-lasting relationship with our beloved clients. In the year 2013, we decided to create a tour company by the name <strong> Skywalker </strong>

                        to specialize in the receptive tourism market and to achieve the title of the best tours and travel company in Bangladesh. In this regard, we have contracts and alliances with most of the hotels, tourist organizations & companies in most of the countries around the world that help us provide the best quality service to our clients. Therefore, we investigate every single detail of your trip, to ensure each sector has all the ingredients to satisfy our clients and help us become the best tour operator in Bangladesh. We can proudly talk of the following achievements:&nbsp;
                    </p>
                    <ul>
                        <li className="text-start">Certified travel agency of Bangladesh Government – Ministry of Civil Aviation and Tourism (Reg. No. 548....)</li>
                        <li className="text-start">IATA Accredited Agent (Code: 423.....)</li>
                        <li className="text-start">Proud member of Association of Travel Agents of Bangladesh- ATAB (Reg. No. 138....)</li>
                        <li className="text-start">Proud member of Tour Operators Association of Bangladesh - TOAB (Membership No. 4..)</li>
                        <li className="text-start">Proud member of Bangladesh Outbound Tour Operators Forum (BOTOF)</li>
                        <li className="text-start">Active alliances and networking with other agencies to serve its international clientele</li>
                        <li className="text-start">Growing corporate clients</li>
                        <li className="text-start">Accepts Credit Card transactions</li>

                    </ul>
                    <p>Moreover, <strong> Skywalker </strong>  is also pleased and appreciative to the staff and personnel who are considered teammates of this company thus helping the staff to upgrade their skills through continuous formal and hands-on training and seminars towards achieving total customer satisfaction and well-being. Their full dedication helps us to become the best travel agency in Bangladesh.  </p>
                    <h3 className="text-start mt-5">VISION</h3>
                    <hr />
                    <p className="text-start">To dominate the tourism industry by excellence in service with innovation & creative concepts in the global marketplace for our clients that will help us achieve the title of best travel agency in Bangladesh.  </p>
                    <h3 className="text-start mt-5">VISION</h3>
                    <hr />
                    <p className="text-start">Provide our clients with unforgettable travel experiences with guaranteed more than satisfactory services that exceed the level of their expectations.  </p>

                    <h3 className="text-start mt-5">SERVICE</h3>
                    <hr />
                    <p className="text-start">Professional customer consultation providing hassle-free travel and journey. Creative but determined approach to search for the most appropriate travel arrangements and accommodations and identifying the best possible values. Our travel consultants are friendly, polite, professional, and experienced in accommodating both the seasoned traveler and those who are new to the world of travel.</p>

                    <h3 className="text-start mt-5">VALUES</h3>
                    <hr />
                    <p className="text-start">
                        Direct and Open communication<br />
                        Speedy process<br />
                        Teamwork<br />
                        Flexibility and willingness to accept change<br />
                        Recognizing and learning from mistakes<br />
                        Risk-taking<br />
                        Quality care<br />
                    </p>
                    <h3 className="text-start mt-5">A TEAM OF EXPERTS</h3>
                    <hr />
                    <p className="text-start">
                        We believe that only an experienced travel expert can help you discover its unique and amazing qualities. <strong> Skywalker </strong>
                        has a team of specialists who work with full dedication and great passion, discipline, and knowledge not only to show you the best of the world but to allow you to feel it with all your senses and feel as if you are floating with joy.
                    </p>
                    <h3 className="text-start mt-5">OUR TRIPS</h3>
                    <hr />
                    <p className="text-start">Our trips are carefully mastered to combine the cultural and natural riches with comfort, safety, luxury, and adventure to create trips that will have our guests talking for a long time. We have four key components: discovery, value, pace, and choice.</p>

                    <h3 className="text-start mt-5">KEY STRATEGIES</h3>
                    <hr />
                    <p className="text-start">
                        The travel industry is a highly competitive industry with everyone competing to become the best travel agency in Bangladesh. To secure our position as a leader in this industry and to become the best tour operator agency in Bangladesh, <strong> Skywalker </strong>  is keen on focusing on four strategic areas, namely:
                    </p>
                    <p className="text-start">
                        Always Keeping the Company financially and economically healthy.<br />
                        Presenting high-quality service to customers translates to customer loyalty resulting in repetition of orders and referrals that create new and bigger opportunities.<br />
                        Maintaining a high-performing team that consistently displays competence in customer orientation and driving for results with the highest regard for professional ethics and doing all the above at the lowest cost in the industry.
                    </p>
                    <h3 className="text-start mt-5">CONTACT</h3>
                    <hr />
                    <div>
                        <Row>
                            <Col md={6}>
                                <Table responsive striped bordered hover size="sm">

                                    <tbody>
                                        <tr className="text-start">

                                            <td className="fw-bold">Email</td>
                                            <td>:</td>
                                            <td>mahfuj.mmr3@gmail.com</td>
                                        </tr>
                                        <tr className="text-start">

                                            <td className="fw-bold">Mobile Number</td>
                                            <td>:</td>
                                            <td>+8801886300084</td>
                                        </tr>
                                        <tr className="text-start">

                                            <td className="fw-bold">Phone</td>
                                            <td>:</td>
                                            <td>+012356412</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Col>
                            <Col md={6}></Col>
                        </Row>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default About;