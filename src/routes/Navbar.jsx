import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import { SearchBar } from "../components/SearchBar";

export const Navbar = () => {
    const { color } = React.useContext(ThemeContext);

    return (
        <React.Fragment>
            <main className="navbar" style={{
                background: color
            }}>
                <nav className="navbar__nav">
                    <Link to="/" className="navbar__brand">
                        <h1>Project</h1>
                    </Link>
                    <SearchBar />
                    <Link 
                        to="/create" 
                        className="navbar__brand-last"
                        >Create Project
                    </Link>
                </nav>
            </main>
        </React.Fragment>
    );
};


