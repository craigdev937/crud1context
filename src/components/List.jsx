import React from "react";
import "../styles/List.css";
import { Link } from "react-router-dom";

export const List = ({ projects }) => {
    return (
        <main className="project__list">
            {projects.map((project) => (
                <section 
                    key={project.id} 
                    className="project__card"
                    >
                    <h3 className="project__title">{project.title}</h3>
                    <p className="project__cookingTime">{project.cookingTime} to make.</p>
                    <section className="project__method">{project.method.substring(0, 100)}...</section>
                    <Link className="project__link" to={`/projects/${project.id}`}>Project</Link>
                </section>
            ))}
        </main>
    );
};


