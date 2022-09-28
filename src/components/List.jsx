import React from "react";
import "../styles/List.css";
import { Link } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";

export const List = ({ projects }) => {
    const { mode } = useTheme();

    if (projects.length === 0) {
        return <div className="error">No projects to load...</div>
    }

    return (
        <main className="project">
            {projects.map((project) => (
                <section 
                    key={project.id} 
                    className={`project__card ${mode}`}
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


