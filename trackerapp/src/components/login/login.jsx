import React, { Component } from 'react';
import loginImg from '../../login1.png';


export class Login extends React.Component {

    constructor(props){
        super(props);

    }
    render() {
        return (
            <div className="base-container">
                <div className="header">
                    SIGN IN
                </div>
                <div className="content">
                    <div className="image">
                        <img src={loginImg} />
                    </div>
                    <div className="form">
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" name="username" placeholder="Enter your Username" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" placeholder="Enter your Password" />
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <button type="button" className="btn btn-primary">Login</button>
                </div>
            </div>
        )
    }
}

//export default login
