// WiscIdeaNavBar.jsx
import React, { useState } from 'react';
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import UWcrest from '../../figures/uw-crest-color-web-digital.png';
import {FaBars as MenuIcon} from 'react-icons/fa'
import classes from './style.module.css'
import WiscIdeaSideBar from './WiscIdeaSideBar';
import WiscIdeaNavBarContext from '../contexts/WiscIdeaNavBarContext';

const WiscIdeaNavBar = ({isOpen, setIsOpen}) => {

    const openSidebar = () => {
        setIsOpen(true);
        //console.log(isOpen);
    }

    
    const closeSidebar = () => {
        setIsOpen(false);
        //console.log(isOpen);
    }

  return (
    <>
    <header>
        <div className='navbar'>
            <div className={classes.menuButton} onClick={openSidebar}>
                <MenuIcon size={30}/>
            </div>
            <div className='logo'>
                <Navbar.Brand as={Link} to="/">
                    <img
                        alt="BadgerChat Logo"
                        src={UWcrest}
                        width="30"
                        height="30"
                    />{' '}
                    The Wisconsin Idea
                </Navbar.Brand>
            </div>
        </div>
        
        <WiscIdeaSideBar isOpen= {isOpen} closeSidebar={closeSidebar}/>  
    </header>
    <div style={{ margin: "1rem" }}>
            <WiscIdeaNavBarContext.Provider value={isOpen}>
                <Outlet />
            </WiscIdeaNavBarContext.Provider>
    </div>
    </>
  );
};


/*
<Nav className="me-auto">
                {loginStatus === "loggedIn" ? (
                    <Nav.Link as={Link} to="logout">Logout</Nav.Link>
                ):(
                    <>
                    <Nav.Link as={Link} to="login">Login</Nav.Link>
                    <Nav.Link as={Link} to="register">Register</Nav.Link>
                    </>
                )}
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <NavDropdown title="Chatrooms">
                    {
                        chatrooms.map((chatroom) => (
                            <NavDropdown.Item as={Link} to={`chatrooms/${chatroom}`} key={chatroom}>
                                {chatroom}
                            </NavDropdown.Item>))
                    }
                </NavDropdown>
            </Nav>
*/

export default WiscIdeaNavBar;