import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import './Header.css';
import logo from '../../images/logo.png';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar expand="lg" className=" custom-nav">
                <Container>
                    <Navbar.Brand className="fs-3 fw-bolder" as={Link} to="/home"><img src={logo} className="header-img" alt="" />Ocean View</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link className="fw-bolder" as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link className="fw-bolder" as={Link} to="/addTravelPlace">Add Places</Nav.Link>
                            <Nav.Link className="fw-bolder" as={Link} to="/myBooking">My Add List</Nav.Link>
                            <Nav.Link className="fw-bolder" as={Link} to="/manageTravelPlaces">Manage All Places</Nav.Link>
                        </Nav>
                        <small className="mx-3 custom-name">{user?.displayName}</small>
                        {user?.email ? <Button className="regular-btn" onClick={logOut}>LogOut</Button> :
                            <Link to="/login"><Button className="regular-btn">Login</Button></Link>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;