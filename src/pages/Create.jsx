import React from "react";
import "../styles/Create.css";
import { useFetch } from "../global/FetchAPI";
const URL = "http://localhost:5000/projects";

export const Create = () => {
    const [title, setTitle] = React.useState("");
    const [method, setMethod] = React.useState("");
    const [cookingTime, setCookingTime] = React.useState("");
    const [newIngredient, setNewIngredient] = React.useState("");
    const [ingredients, setIngredients] = React.useState([]);
    const ingredientInput = React.useRef(null);

    const { postData } = useFetch(URL, "POST");

    const handleAdd = (event) => {
        event.preventDefault();
        const ing = newIngredient.trim();
        if (ing && !ingredients.includes(ing)) {
            setIngredients((prevIngredients) => [
                ...prevIngredients, newIngredient
            ]);
        };
        setNewIngredient("");
        ingredientInput.current.focus();
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        postData({
            title, ingredients, method,
            cookingTime: cookingTime + " minutes"
        });
    };

    return (
        <main className="create">
            <h2 className="page__title">Add a new Project</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    <span className="create__title">Project title:</span>
                    <input 
                        required
                        type="text" 
                        value={title}
                        onChange={(event) => 
                            setTitle(event.target.value)}
                    />
                </label>
                <label>
                    <span>Project Ingredients</span>
                    <aside className="ingredients">
                        <input 
                            type="text" 
                            value={newIngredient}
                            ref={ingredientInput}
                            onChange={(event) => 
                                setNewIngredient(event.target.value)}
                        />
                        <button 
                            className="create__btn"
                            onClick={handleAdd}
                            >Add
                        </button>
                    </aside>
                </label>
                <p className="create_ingred">Current ingredients: 
                    {ingredients.map((ingred) => 
                        <em key={ingred}>{ingred}</em>
                    )}
                </p>
                <label>
                    <span>Project Method:</span>
                    <textarea  
                        required
                        value={method}
                        onChange={(event) => 
                            setMethod(event.target.value)}
                    />
                </label>
                <label>
                    <span>Cooking time (minutes):</span>
                    <input 
                        required
                        type="text" 
                        value={cookingTime}
                        onChange={(event) => setCookingTime(event.target.name)}
                    />
                </label>
                <button className="submit__btn">Submit</button>
            </form>
        </main>
    );
};


