import SidebarMenu from 'react-bootstrap-sidebar-menu';
import React from 'react';
import { Container, Image, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, NavLink, Outlet } from "react-router-dom";
import WiscIdeaSideBarContext from '../contexts/WiscIdeaSideBarContext';
import classes from './style.module.css'
import {IoClose as CloseIcon} from "react-icons/io5"

const WiscIdeaSideBar = ({isOpen, closeSidebar }) => {
    return (
        <div className={`${classes.sidebar} ${isOpen && classes.open}`}>
            <span className={classes.closeIcon} onClick={closeSidebar}>
                <CloseIcon size ={30}/>
            </span>
            <div className='links'>
                <NavLink>HOME</NavLink>
                <NavLink>send</NavLink>
                <NavLink>NEXt</NavLink>
            </div>
        </div>
    
        )
  }
  
  export default WiscIdeaSideBar;