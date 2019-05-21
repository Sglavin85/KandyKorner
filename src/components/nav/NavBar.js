import React, { Component } from 'react'
import { Link } from "react-router-dom"

export class NavBar extends Component {
    render() {
        return (
            <nav className="navbar">
                <ul>
                    <li>
                        <Link className="nav-Link" to="/Stores">Stores</Link>
                    </li>
                    <li>
                        <Link className="nav-Link" to="/Employees">Employees</Link>
                    </li>
                    <li>
                        <Link className="nav-Link" to="/Candies">Candies</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default NavBar
