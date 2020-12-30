import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

import logo from '../../assest/image/logo.svg';
import constants from "../../constants/constants";
import "./style.css";//importing colour
const { IMAGE_NOT_FOUND } = constants;

class Header extends Component{

    render(){
        return (
            <Navbar variant="dark" fixed="top" className="customheader"> 
                <Navbar.Brand href="/">
                    <img src={logo} alt={IMAGE_NOT_FOUND} height="30px" />
                </Navbar.Brand>
                <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/read">Read</Nav.Link>
                <Nav.Link href="/create">Create</Nav.Link>
                </Nav>
            </Navbar>
        );
    }
}

export default Header;