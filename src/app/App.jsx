import React from "react";
import "./App.css";
import { Main } from "../routes/Main";
import { ThemeProvider } from "../context/ThemeContext";

export const App = () => {
    return (
        <React.Fragment>
            <ThemeProvider>
                <Main />
            </ThemeProvider>
        </React.Fragment>
    );
};



