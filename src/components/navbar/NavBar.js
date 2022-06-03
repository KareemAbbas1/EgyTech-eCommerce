import React from 'react'
import { Container, Nav, Navbar, Offcanvas, Button, Form, FormControl } from 'react-bootstrap';
import { Search, Cart3 } from 'react-bootstrap-icons';
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
            <Container fluid>
                <Navbar.Brand href='#'><img src={logo} alt='logo image'></img></Navbar.Brand>
                <Navbar.Toggle aria-controls='offcanvasNavbar-expand' className='bg-primary' />
                <Navbar.Offcanvas
                    id='offcanvasNavbar-expand'
                    aria-labelledby='offcanvasNavbarLabel-expand'
                    placement='end'
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id='offcanvasNavbarLabel-expand'>
                            Menu
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className='justify-content-center flex-grow-1 nav-links'>
                            <Nav.Link href='#' className='mx-4'><text>NavLink</text></Nav.Link>
                            <Nav.Link href='#' className='mx-4'><text>NavLink</text></Nav.Link>
                            <Nav.Link href='#' className='mx-4'><text>NavLink</text></Nav.Link>
                            <Nav.Link href='#' className='mx-4'><text>NavLink</text></Nav.Link>
                            <Nav.Link href='#' className='mx-4'><text>NavLink</text></Nav.Link>
                        </Nav>
                        <Form className=''>
                            <FormControl
                                type='search'
                                placeholder='Search Products'
                                className={showSearchbar ? 'search-bar-hide' : 'search-bar-show'}
                                aria-label='Search'
                            />
                        </Form>
                        <button className='icons' onClick={() => toggleSearchbar()}>
                            <Search color='#28CC9E' size={30} className='mt-1 me-2' />
                        </button>
                        <button className='icons'>
                            <Cart3 color='#28CC9E' size={30} className='mt-1 me-3' />
                        </button>
                        <Button variant='outline-primary p-0 login-btn'>Log in</Button>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    )
}

export default NavBar



/* <Navbar key='expand' bg='dark' expand='lg' className='mb-3'>
                <Container fluid>
                    <Navbar.Brand href='#'><img src={logo} alt='logo image' style={{width: '50px'}}></img></Navbar.Brand>
                    <Navbar.Toggle aria-controls='offcanvasNavbar-expand' className='bg-primary' />
                    <Navbar.Offcanvas
                        id='offcanvasNavbar-expand'
                        aria-labelledby='offcanvasNavbarLabel-expand'
                        placement='end'
                    >
                        <Offcanvas.Header closeButton className='bg-dark bg-opacity-75'>
                            <Offcanvas.Title id='offcanvasNavbarLabel-expand' className='text-white'>
                                Menu
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body className='bg-dark bg-opacity-75'>
                            <Nav className='justify-content-center flex-grow-1'>
                                <Nav.Link href='#' className='text-white pe-5'>Home</Nav.Link>
                                <Nav.Link href='#' className='text-white pe-5'>Link1</Nav.Link>
                                <Nav.Link href='#' className='text-white pe-5'>Link2</Nav.Link>
                                <Nav.Link href='#' className='text-white pe-5'>Link3</Nav.Link>
                                <Nav.Link href='#' className='text-white'>Link4</Nav.Link>
                            </Nav>
                            <Form className='d-flex'>
                                <FormControl
                                    type='search'
                                    placeholder='Search Products'
                                    className='me-2'
                                    aria-label='Search'
                                 />
                                 <Button variant='outline-primary'>Search</Button>
                            </Form>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar> */
{/* <Navbar.Toggle aria-controls='offcanvasNavbar-expand' className='bg-primary' />
                <div>
                    <a className='navbar-brand' href='/'>
                        <img src={logo} alt='logo' style={{ height: "2.7rem" }} />
                    </a>
                </div>

                <Navbar.Offcanvas
                    id='offcanvasNavbar-expand'
                    aria-labelledby='offcanvasNavbarLabel-expand'
                    placement='end'
                >
                    <Offcanvas.Header closeButton className='bg-dark bg-opacity-75'>
                        <Offcanvas.Title id='offcanvasNavbarLabel-expand' className='text-white'>
                            Menu
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body className='bg-opacity-75'>
                        <Nav className='d-flex align-items-center justify-content-between'>
                            <Nav.Link href='#' className=''>NavLink</Nav.Link>
                            <Nav.Link href='#' className=''>NavLink</Nav.Link>
                            <Nav.Link href='#' className=''>NavLink</Nav.Link>
                            <Nav.Link href='#' className=''>NavLink</Nav.Link>
                            <Nav.Link href='#' className=''>NavLink</Nav.Link>
                        </Nav>
                        <Form className='d-flex'>
                            <FormControl
                                type='search'
                                placeholder='Search Products'
                                className='me-2'
                                aria-label='Search'
                            />
                            <Button variant='outline-primary'>Search</Button>
                        </Form>
                    </Offcanvas.Body>
                </Navbar.Offcanvas> */}