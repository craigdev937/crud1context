import React from "react";
import { ThemeContext } from "../context/ThemeContext";

export const useTheme = () => {
    const context = React.useContext(ThemeContext);

    if (context === undefined) {
        throw new Error(`useTheme() must be used 
            inside a ThemeProvider`);
    }
    return context;
};


