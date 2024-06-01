import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
export default function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/register">Register</Link>
                </li>
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>

        </nav>
    )
}
