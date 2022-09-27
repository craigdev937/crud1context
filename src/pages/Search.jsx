import React from "react";
import { useLocation } from "react-router-dom";
import { List } from "../components/List";
import { useFetch } from "../global/FetchAPI";
const URL = "http://localhost:5000/projects";

export const Search = () => {
    const queryString = useLocation().search;
    const queryParams = new URLsearchParams(queryString);
    const query = queryParams.get("q");
    const { error, isPending, data } = useFetch(`${URL}/${query}`);

    return (
        <React.Fragment>
            <h2 className="page-title">Projects including "{query}"</h2>
            {error && <p className="error">{error}</p>}
            {isPending && <p className="loading">Loading...</p>}
            {data && <List projects={data} />}
        </React.Fragment>
    );
};


