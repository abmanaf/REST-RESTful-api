import axios from "axios";
import React, { useEffect, useState } from "react";
const API_KEY = "bf011ab8b3fc4488ac759b1a306e51da";
//const API_ID = "56ffbfc8";
//https://api.spoonacular.com/recipes/findByIngredients?ingredients=apples,+flour,+sugar&number=2&apiKey=bf011ab8b3fc4488ac759b1a306e51da

function App() {
  const [displayFoods, setDisplayFoods] = useState([]);

  const handleViewFoods = async () => {
    try {
      // READ or GET request
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/findByIngredients?ingredients=apples,+flour,+sugar&number=20&apiKey=${API_KEY}`
      );
      console.log(response.data);
      setDisplayFoods(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      REST AND RESFUL API
      <div>
        <button onClick={() => handleViewFoods()}>View Food</button>
      </div>
      {displayFoods.map((recipe) => (
        <ul>
          <li className="">
            <img src={recipe.image} alt="recipeImage" />
            {recipe.title}
          </li>
        </ul>
      ))}
    </div>
  );
}

export default App;
