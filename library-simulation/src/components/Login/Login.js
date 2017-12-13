import React, { Component } from "react";

import "./login.css";
import logo from "../../assets/maroon-logo.svg";

export default class Login extends Component {
	render() {
		return (
			<div className="login-wrapper">
				<img src={logo} />
				<h2>Book Exchange</h2>
				<div className="login-form">
					<div className="login-input">
						<label>Username</label>
						<input ref="name" type="text" />
					</div>
					<div className="login-input">
						<label>Password</label>
						<input ref="pass" type="text" />
					</div>
                    <div>
                        <button>Register</button>
                        <button>Login</button>
                    </div>
				</div>
			</div>
		);
	}
}
