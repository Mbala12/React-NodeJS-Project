import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component{
    render(){
        return(
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <div className="container">
                    <Link to="/" className="navbar-brand">Momo Cash</Link>
                    <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="navbar-nav mr-auto"> 
                            <li className="navbar-item">
                                <Link to="/all" className="nav-link">Receive Money</Link>
                            </li>
                            <li className="navbar-item">
                                <Link to="/create" className="nav-link">Send Money</Link>
                            </li>
                            <li className="navbar-item">
                                <Link to="/login" className="nav-link">Sign In</Link>
                            </li> 
                        </ul>
                    </div>
                </div>
            </nav>
            
        )
    }
}