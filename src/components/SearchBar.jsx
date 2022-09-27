import React from "react";
import "../styles/SearchBar.css";
import { useNavigate } from "react-router-dom";

export const SearchBar = () => {
    const navigate = useNavigate();
    const [term, setTerm] = React.useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate(`/search?q=${term}`);
    };

    return (
        <main className="searchbar">
            <form onSubmit={handleSubmit}>
                <label htmlFor="search">Search:</label>
                <input 
                    required
                    id="search"
                    type="text" 
                    className="searchbar__input"
                    onChange={(event) => 
                        setTerm(event.target.value)}
                />
            </form>
        </main>
    );
};


