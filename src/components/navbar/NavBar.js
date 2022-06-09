import React from 'react'
import { Container, Nav, Navbar, Offcanvas, Button, Form, FormControl, DropdownButton } from 'react-bootstrap';
import { Search, Cart3, Person } from 'react-bootstrap-icons';
import './navbar.css';
import { useState, useEffect } from 'react';
import logo from '../../assets/Logo.png';

const NavBar = () => {

    const [showNavbar, setShowNavbar] = useState(false);
    const [showSearchbar, setShowSearchbar] = useState(true);

    const toggleSearchbar = () => {
        if (showSearchbar === (true)) {
            setShowSearchbar(false)
        } else {
            setShowSearchbar(true)
        }
    }

    const navbarVisabilty = () => {
        if (window.scrollY > 70) {
            setShowNavbar(true);
        } else {
            setShowNavbar(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", navbarVisabilty);

        return () => {
            window.removeEventListener("scroll", navbarVisabilty);
        };
    }, []);

    return (
        <Navbar
            key='expand'
            expand='lg'
            className={`nav ${showNavbar && 'showNavOnscroll'} d-flex`}
        >
            <Container fluid className='nav-container'>
                <Navbar.Brand href='#'><img src={logo} alt='logo image'></img></Navbar.Brand>
                <span className='d-flex justify-content-between' style={{ minWidth: '79vw' }}>
                    <span>
                        <Navbar.Toggle aria-controls='offcanvasNavbar-expand' className='bg-primary offcanvasToggler' />
                        <Navbar.Offcanvas
                            id='offcanvasNavbar-expand'
                            aria-labelledby='offcanvasNavbarLabel-expand'
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id='offcanvasNavbarLabel-expand'>
                                    Menu
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body style={{maxWidht: '80vw'}}>
                                <Nav className='justify-content-center flex-grow-1 nav-links'>
                                    <Nav.Link href='#' className='mx-4'><text>Mobile Phones</text></Nav.Link>
                                    <Nav.Link href='#' className='mx-4'><text>Computers</text></Nav.Link>
                                    <Nav.Link href='#' className='mx-4'><text>Tablets</text></Nav.Link>
                                    <Nav.Link href='#' className='mx-4'><text>About us</text></Nav.Link>
                                    <Nav.Link href='#' className='mx-4'><text>Contact us</text></Nav.Link>
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </span>
                    <span className='d-flex icons-container'>
                        <Form>
                            <FormControl
                                type='search'
                                placeholder='Search Products'
                                className={showSearchbar ? 'search-bar-hide' : 'search-bar-show'}
                                aria-label='Search'
                            />
                        </Form>
                        <button className='icons' onClick={() => toggleSearchbar()}>
                            <Search color='#28CC9E' size={25} className='me-2' />
                        </button>
                        <button className='icons'>
                            <Cart3 color='#28CC9E' size={25} className='me-2' />
                        </button>
                        <Button variant='outline-primary' className='p-0 login-btn'>Log in</Button>
                        <button className='icons login-icon'>
                            <Person color="#28CC9e" size={31} calssName='me-3' />
                        </button>
                    </span>
                </span>
            </Container>
        </Navbar>
    )
}

export default NavBar