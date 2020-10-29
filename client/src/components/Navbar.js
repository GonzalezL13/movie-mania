import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Modal, Tab } from 'react-bootstrap';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
import Auth from '../utils/auth';

const AppNavbar = () => {
    const [displayModal, setDisplayModal] = useState(false);

    return (
        <>
            <Navbar bg='dark' variant='dark' expand='lg'>
                <Container fluid>
                    <Navbar.Brand as={Link} to='/'>
                        Movie Mania Search
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls='navbar' />
                    <Navbar.Collapse id='navbar'>
                        <Nav className='nav-links'>
                            <Nav.Link as={Link} to='/'>
                                Search For Movies
                            </Nav.Link>
                            {Auth.loggedIn() ? (
                                <>
                                    <Nav.Link as={Link} to='/saved'>
                                        See Your Movies
                                    </Nav.Link>
                                    <Nav.Link onClick={Auth.logout}>Logout</Nav.Link>
                                </>
                            ) : (
                                    <Nav.Link onClick={() => setDisplayModal(true)}>Login/Sign Up</Nav.Link>
                                )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
