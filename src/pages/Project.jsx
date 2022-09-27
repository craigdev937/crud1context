import React from "react";
import "../styles/Project.css";
import { useParams } from "react-router-dom";
import { useFetch } from "../global/FetchAPI";

export const Project = () => {
    const { id } = useParams();
    const URL = `http://localhost:5000/projects/${id}`;
    const { error, isPending, data: project } = useFetch(URL);

    return (
        <main className="project">
            {error && <p className="error">{error}</p>}
            {isPending && <p className="loading">Loading...</p>}
            {project && (
                <React.Fragment>
                    <h2 className="page__title">{project.title}</h2>
                    <p>Takes {project.cookingTime} to cook.</p>
                    <ul className="project__ul">
                        {project.ingredients.map((ing) => {
                            <li 
                                className="project__li"
                                key={ing}
                                >ing
                            </li>
                        })}
                    </ul>
                    <p className="method">{project.method}</p>
                </React.Fragment>
            )}
        </main>
    );
};


