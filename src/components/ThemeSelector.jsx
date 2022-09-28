import React from "react";
import modeIcon from "../img/mode-icon.svg";
import "../styles/ThemeSelector.css";
import { useTheme } from "../hooks/useTheme";

const themeColors = ["#58249c", "#b70233", "#244c9c"];
export const ThemeSelector = () => {
    const { changeColor, changeMode, mode } = useTheme();

    const toggleMode = () => {
        changeMode((mode) === "dark" ? "light" : "dark");
    };
    console.log(mode);

    return (
        <main className="theme">
            <section className="theme__toggle">
                <img 
                    alt="dark/light toggle icon" 
                    src={modeIcon}
                    className="theme__img"
                    onClick={toggleMode}
                    style={{ filter: mode === "dark" ? "invert(100%)" : "invert(20%)" }}
                />
            </section>
            <section>
                {themeColors.map((color) => (
                    <section 
                        key={color}
                        className="theme__btn"
                        onClick={() => changeColor(color)}
                        style={{ background: color }}
                    />
                ))}
            </section>
        </main>
    );
};


