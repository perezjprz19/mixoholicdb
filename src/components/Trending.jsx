import { useState } from "react";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";

function Trending() {
  const [trending, setTrending] = useState([]);

  //will run the popular function as soon as the page loads.
  useEffect(() => {
    getTrending();
  }, []);

  //The empty array will is so that it only runs when the page is loaded,
  // however, it can also accept parameters so that it loads whenever a search occurs.

  const getTrending = async () => {
    //using async because we need to make sure we have all the data before rendering
    const api = await fetch(
      `https://www.thecocktaildb.com/api/json/v2/1/popular.php?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const data = await api.json();
    setTrending(data.drinks);
  };

  //loops (or maps out) over each drink
  return (
    <div>
      <h2>Trending</h2>
      <div className="card-container">
        {trending.map((drinks) => {
          return (
            <div key={drinks.idDrink}>
              <div className="drink-card card">
                <h3>{drinks.strDrink}</h3>
                <img
                  className="drink-img card-img-top"
                  src={drinks.strDrinkThumb}
                  alt=""
                ></img>
                <p>{drinks.strImageAtrribution}</p>
                <div className="card-body">
                  <ul>
                    <li>{drinks.strIngredient1} {drinks.strMeasure1}</li>
                    <li>{drinks.strIngredient2} {drinks.strMeasure2}</li>
                    <li>{drinks.strIngredient3} {drinks.strMeasure3}</li>
                    <li>{drinks.strIngredient4} {drinks.strMeasure4}</li>
                    <li>{drinks.strIngredient5} {drinks.strMeasure5}</li>
                    <li>{drinks.strIngredient6} {drinks.strMeasure6}</li>
                  </ul>

                  <p>{drinks.strInstructions}</p>
                </div>
              </div>
            </div>

            //this prints the drink card to the viewport
          );
        })}
      </div>
    </div>
  );
}

export default Trending;
