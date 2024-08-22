import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar, Nav, Button } from 'react-bootstrap';  // Import Bootstrap components
import './stylesheets/Home.css';  // Ensure this path is correct

const NavBar = (props) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/dashboard");
    };

    const handleLogin = () => {
        navigate("/login");
    };

    return (
        <Navbar className="custom-navbar" expand="lg">  {/* Apply custom class */}
            <Navbar.Brand href="/">
                <img src="./logo1.jpg" alt="logo" style={{ width: '2.5em', height: '3em', objectFit: 'contain',marginLeft:'6px',marginRight:'6px'}} className='image1' />
                Attendance
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto"> {/* Bootstrap class for left side */}
                    {/* Content on the left side if needed */}
                </Nav>
                <Nav className="ms-auto"> {/* Bootstrap 5 class for right alignment */}
                    {!props.token ? (
                        <>
                            <Button variant="outline-primary" className="btn-no-border">
                                <Link to="/signup" style={{ textDecoration: 'none', color: 'black' }}>Signup</Link>
                            </Button>
                            <Button variant="outline-primary" style={{ textDecoration: 'none', color: 'black' }} className="btn-no-border" onClick={handleLogin}>Login</Button>
                        </>
                    ) : (
                        <>
                            <Button variant="outline-primary" className="btn-no-border" onClick={handleClick}>
                                <i className="bi bi-person" />  {/* Bootstrap icon */}
                            </Button>
                            <Button variant="outline-primary" className="btn-no-border" onClick={props.logOut}>
                                <Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>Logout</Link>
                            </Button>
                        </>
                    )}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;
