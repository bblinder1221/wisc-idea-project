import SidebarMenu from 'react-bootstrap-sidebar-menu';
import React from 'react';
import { Container, Image, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, NavLink, Outlet } from "react-router-dom";
import classes from './style.module.css'
import {IoClose as CloseIcon} from "react-icons/io5"

const WiscIdeaSideBar = ({isOpen, closeSidebar }) => {
    let users = [
        { id: 1, name: "Alice", age: 25, occupation: "Engineer" },
        { id: 2, name: "Bob", age: 30, occupation: "Designer" },
        { id: 3, name: "Carol", age: 22, occupation: "Artist" },
        { id: 4, name: "Dave", age: 28, occupation: "Teacher" }
      ];

    return (
        <div className={`${classes.sidebar} ${isOpen && classes.open}`}>
            <span className={classes.closeIcon} onClick={closeSidebar}>
                <CloseIcon size ={30}/>
            </span>
            <div className={classes.links} >
                <NavLink as={Link} to={"home"} >Home Page</NavLink>
                <NavLink as={Link} to={"template"}>Template</NavLink>
                <NavLink as={Link} to={"none"}>Page Not Found</NavLink>
                <NavDropdown title="Dropdowns">
                            {
                               users.map((user) => (
                                    <NavDropdown.Item as={Link} to={`dropdownDemo/${user.occupation}`} key={user}>
                                        {user.occupation}
                                    </NavDropdown.Item>))
                            }
                        </NavDropdown>
            </div>
        </div>
    
        )
  }
  
  export default WiscIdeaSideBar;