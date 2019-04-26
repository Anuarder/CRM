import React from "react";
import './Navigation.css'

import logo from "../../assets/logo.png";

export default class Navigation extends React.Component {
	render() {
		return (
			<div className="navigation">
				<div className="navigation-logo">
					<img src={logo} alt="logo" />
					<h1>Dream City</h1>
				</div>
			</div>
		);
	}
}