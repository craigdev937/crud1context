import React from "react";
import "../styles/Home.css";
import { useFetch } from "../global/FetchAPI";
import { List } from "../components/List";
const URL = "http://localhost:5000/projects";

export const Home = () => {
    const { error, isPending, data } = useFetch(URL);

    return (
        <main className="home">
            {error && <p className="error">{error}</p>}
            {isPending && <p className="loading">Loading...</p>}
            {data && <List projects={data} />}
        </main>
    );
};


