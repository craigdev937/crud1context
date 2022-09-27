import React from "react";
import "./App.css";
import { Main } from "../routes/Main";
import { ThemeProvider } from "../context/ThemeContext";

export const App = () => {
    return (
        <React.Fragment>
            <ThemeProvider>
                <main className="project__main">
                    <Main />
                </main>
            </ThemeProvider>
        </React.Fragment>
    );
};



