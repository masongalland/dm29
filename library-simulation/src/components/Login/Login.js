import React, { Component } from 'react'

import './login.css';
import logo from '../../assets/maroon-logo.svg';

export default class Login extends Component {
    render() {
        return (
            <div className="login-wrapper" >
                <img src={logo} />
                <h2>Book Exchange</h2>
                <div className="login-form">
                    <input ref="name" type="text" />
                    <input ref="pass" type="text" />

                </div>
            </div>
        )
    }
}
