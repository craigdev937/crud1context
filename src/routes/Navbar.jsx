import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <React.Fragment>
            <main className="navbar">
                <nav className="navbar__nav">
                    <Link to="/" className="navbar__brand">
                        <h1>Project</h1>
                    </Link>
                    <Link to="/create" className="navbar__brand-last">Create Project</Link>
                </nav>
            </main>
        </React.Fragment>
    );
};


