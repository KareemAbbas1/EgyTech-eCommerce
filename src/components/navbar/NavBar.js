import React from 'react'
import { Container, Nav, Navbar, Offcanvas, Button, Form, FormControl } from 'react-bootstrap';
import { Search, Cart3, Person } from 'react-bootstrap-icons';
import './navbar.css';
import { useState, useEffect } from 'react';
import logo from '../../assets/Logo.png';
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {

    const [offcanvasOpen, setOffcanvasOpen] = useState(false);

    const toggleOffcanvas = () => {
        setOffcanvasOpen(!offcanvasOpen);
    }
    const handleCloseOffcanvas = () => setOffcanvasOpen(false);



    const [showNavbar, setShowNavbar] = useState(false);
    const [showSearchbar, setShowSearchbar] = useState(true);

    const toggleSearchbar = () => {
        if (showSearchbar === (true)) {
            setShowSearchbar(false)
        } else {
            setShowSearchbar(true)
        }
    }

    const location = useLocation();

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
    // location.pathname !== "/" && 'showNavOnscroll'
    return (
        <Navbar
            key='expand'
            expand='lg'
            className={`nav d-flex
            ${location.pathname === "/" && showNavbar
                    ? 'showNavOnscroll'
                    : location.pathname === "/contact-us" && showNavbar
                        ? 'showNavOnscroll'
                        : location.pathname !== "/" && location.pathname !== "/contact-us" && 'showNavOnscroll'
                } 
            `}
        >
            <Container fluid className='nav-container'>
                <Navbar.Brand>
                    <Link to="/">
                        <img src={logo} alt='logo'></img>
                    </Link>
                </Navbar.Brand>
                <span className='d-flex justify-content-between' style={{ minWidth: '79vw' }}>
                    <span>
                        <Navbar.Toggle
                            aria-controls='offcanvasNavbar-expand'
                            className='bg-primary offcanvasToggler'
                            onClick={toggleOffcanvas}
                        />

                        <Navbar.Offcanvas
                            id='offcanvasNavbar-expand'
                            aria-labelledby='offcanvasNavbarLabel-expand'
                            show={offcanvasOpen}
                            onHide={handleCloseOffcanvas}
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id='offcanvasNavbarLabel-expand'>
                                    Menu
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body style={{ maxWidht: '80vw' }}>
                                <Nav className='justify-content-center flex-grow-1 nav-links'>

                                    <Link to="/"
                                        onClick={toggleOffcanvas}
                                        style={{ textDecoration: 'none', marginLeft: '2.6rem' }}
                                        className='home-link'
                                    >
                                        <text>Home</text>
                                    </Link>

                                    <Link
                                        to="/products"
                                        onClick={toggleOffcanvas}
                                        style={{ textDecoration: 'none', marginLeft: '2.6rem' }}>
                                        <text>Mobile Phones</text>
                                    </Link>

                                    <Link to="/products"
                                        onClick={toggleOffcanvas}
                                        style={{ textDecoration: 'none', marginLeft: '2.6rem' }}>
                                        <text>Computers</text>
                                    </Link>

                                    <Link to="/products"
                                        onClick={toggleOffcanvas}
                                        style={{ textDecoration: 'none', marginLeft: '2.6rem' }}>
                                        <text>Tablets</text>
                                    </Link>

                                    <Link to="/about-us"
                                        onClick={toggleOffcanvas}
                                        style={{ textDecoration: 'none', marginLeft: '2.6rem' }}>
                                        <text
                                        className={location.pathname === "/about-us" && 'active'}
                                        >
                                            About us
                                        </text>
                                    </Link>

                                    <Link
                                        to="/contact-us"
                                        onClick={toggleOffcanvas}
                                        style={{ textDecoration: 'none', marginLeft: '2.6rem' }}>
                                        <text
                                            className={location.pathname === "/contact-us" && 'active'}
                                        >
                                            Contact us
                                        </text>
                                    </Link>
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
                            <Person color="#28CC9e" size={31} className='me-3' />
                        </button>
                    </span>
                </span>
            </Container>
        </Navbar>
    )
}

export default NavBar