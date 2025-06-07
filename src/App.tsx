import './App.css';
import type {Ingredient, SelectedIngredient} from "./types";
import {useState} from "react";
import burgerImage from "./assets/Burger.jpg";
import glassImage from "./assets/Glass.webp";
import friesImage from "./assets/Fries.webp";
import colaImage from "./assets/Cola.jpeg";

const App = () => {

  const INGREDIENTS: Ingredient[] = [
    {name: 'Hamburger', price: 80, image: burgerImage},
    {name: 'Cheeseburger', price: 90, image: burgerImage},
    {name: 'Fries', price: 50, image: friesImage},
    {name: 'Coffee', price: 80, image: glassImage},
    {name: 'Tea', price: 50, image: glassImage},
    {name: 'Cola', price: 60, image: colaImage},
  ];

  const [ingredients, setIngredients] = useState<SelectedIngredient[]>([
    {name: 'Hamburger', price: 80, count: 0},
    {name: 'Cheeseburger', price: 90, count: 0},
    {name: 'Fries', price: 50, count: 0},
    {name: 'Coffee', price: 80, count: 0},
    {name: 'Tea', price: 80, count: 0},
    {name: 'Cola', price: 80, count: 0},
  ]);

  const addIngredient = (nameIngred: string) => {
    setIngredients((prevState) => {
      return prevState.map( (ingred) => {
        if (ingred.name === nameIngred) {
          return {
            ...ingred,
            count: ingred.count + 1,
          };
        }
        return ingred;
      });
    });
  };

  const deleteIngredient = (nameIngred: string) => {
    setIngredients((prevState) => {
      return prevState.map( (ingred) => {
        if (ingred.name === nameIngred) {
          return {
            ...ingred,
            count: ingred.count - 1,
          };
        }
        return ingred;
      });
    });
  };

  return (
    <>
      <div className="main-container">
        <div className="add-items">
          <h3>Add Items</h3>
              {INGREDIENTS.map(INGRED => (
                  <button
                      key={INGRED.name}
                      className="menu-button"
                      onClick={() => addIngredient(INGRED.name)}
                  >
                    <img src={INGRED.image} alt={INGRED.name} className="item-image"/>
                    <div className="itemNamePrice">
                      <p className="item-price">{INGRED.name}</p>
                      <p className="item-price">{INGRED.price} KGS</p>
                    </div>
                  </button>
              ))}
        </div>

        <div className="order-details">
          <h3>Order Details</h3>
          {ingredients.map(ingred => (
              <div
                  key={ingred.name}
                  className="items-list"
              >
                {ingred.count > 0 ?
                    <p className="item-count">{ingred.name} <b style={{marginLeft: '10px'}}>x {ingred.count}</b>
                    </p> : null}
                {ingred.count > 0 ? <p>{ingred.price}</p> : null}
                {ingred.count > 0 ?
                    <button className="remove-btn" onClick={() => deleteIngredient(ingred.name)}>Remove</button> : null}
              </div>
          ))}
        </div>
      </div>
    </>
  )
};

export default App;
