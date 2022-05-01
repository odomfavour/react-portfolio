import React, { useState } from 'react';
import './header.css'
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap'
import { FaFirstOrderAlt } from 'react-icons/fa';

const Header = () => {
    const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () =>{
     if(window.scrollY >= 10){
       setColorchange(true);
     }
     else{
       setColorchange(false);
     }
  };
  window.addEventListener('scroll', changeNavbarColor);
    return (
        <Navbar expand="lg" fixed="top"  className={colorChange ? 'topbar_inner' : ''}>
            <Container>
                <Navbar.Brand href="#">
                    <div className="d-flex align-items-center"><span className='mb-1'><FaFirstOrderAlt/></span>G<span className='mb-1'><FaFirstOrderAlt/></span></div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-2 my-lg-0"
                        navbarScroll
                    >
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/#about">About</Nav.Link>
                        <Nav.Link href="/#portfolio">Portfolio</Nav.Link>
                        <Nav.Link href="/#contact">Contact</Nav.Link>
                        <li className="nav-item">
                            <Link className="nav-link btn view-project-btn hire-btn" to="#">Hire Me</Link>
                        </li>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
