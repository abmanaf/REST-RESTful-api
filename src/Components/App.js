import axios from "axios";
import React, { useState } from "react";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./Footer/Footer";

const API_KEY = "bf011ab8b3fc4488ac759b1a306e51da";
function App() {
  const [displayFoods, setDisplayFoods] = useState([]);

  const handleViewFoods = async () => {
    try {
      // READ or GET request
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/findByIngredients?ingredients=apples,+flour,+sugar&number=10&apiKey=${API_KEY}`
      );
      console.log(response);
      setDisplayFoods(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="">
      <div className="header text-bg-warning  p-3">
        <div>
          <h3>Food site</h3>
        </div>
        <div>
          <button
            type="button"
            class="btn btn-secondary"
            onClick={() => handleViewFoods()}
          >
            View Foods
          </button>
        </div>
      </div>
      <div className="row gy-4 m-5" data-aos="fade-up" data-aos-delay="100">
        {displayFoods.map((recipe) => (
          <ul key={recipe.id} className="col-lg-3 col-md-6">
            <li className="card" style={{ borderRadius: "50px 0 0 0" }}>
              <img
                src={recipe.image}
                alt="recipeImage"
                style={{ borderRadius: "50px 0 50px 0" }}
              />{" "}
              <br />
              <div
                className="d-flex"
                style={{ justifyContent: "space-between" }}
              >
                <div>
                  {recipe.title} <br />
                </div>
                <div>
                  <button style={{ border: "none", backgroundColor: "white" }}>
                    {" "}
                    <i
                      className="fa fa-thumbs-up color-dark"
                      aria-hidden="true"
                    ></i>
                  </button>
                  {recipe.likes}
                </div>
              </div>
            </li>
          </ul>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
