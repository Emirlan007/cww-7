import './App.css';
import type {Ingredient, SelectedIngredient} from "./types";
import {useState} from "react";
import burgerImage from "./assets/Burger.jpg";
import glassImage from "./assets/Glass.webp";
import friesImage from "./assets/Fries.webp";
import colaImage from "./assets/Cola.jpeg";

const App = () => {

  const INGREDIENTS: Ingredient[] = [
    {name: 'Hamburger', price: 160, image: burgerImage},
    {name: 'Cheeseburger', price: 180, image: burgerImage},
    {name: 'Fries', price: 120, image: friesImage},
    {name: 'Coffee', price: 100, image: glassImage},
    {name: 'Tea', price: 60, image: glassImage},
    {name: 'Cola', price: 80, image: colaImage},
  ];

  const [ingredients, setIngredients] = useState<SelectedIngredient[]>([
    {name: 'Hamburger', price: 160, count: 0},
    {name: 'Cheeseburger', price: 180, count: 0},
    {name: 'Fries', price: 120, count: 0},
    {name: 'Coffee', price: 100, count: 0},
    {name: 'Tea', price: 60, count: 0},
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

  let total = 0;

  if (ingredients.length > 0 && INGREDIENTS.length > 0) {
    total = INGREDIENTS.reduce((acc, ING) => {
      ingredients.forEach(ing => {
        if (ing.name === ING.name) {
          acc = acc + ing.count * ING.price;
        }
      })
      return acc;
    },0);
  }

  const selectedIngredients = ingredients.filter(ing => ing.count > 0);


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

          {selectedIngredients.length === 0 ? (
              <p className="empty-cart">Order is empty <br/> Please add some items</p>
          ) :
              selectedIngredients.map(ingred => (
                  <div key={ingred.name} className="items-list">
                    <p className="item-name">{ingred.name}</p>
                    <p className="item-count">x {ingred.count}</p>
                    <p className="itemPrice">{ingred.price} KGS</p>
                    <button className="remove-btn" onClick={() => deleteIngredient(ingred.name)}>Remove</button>
                  </div>
              ))
          }
          {total > 0 ? <p className="total-price"><b>Total price:</b> {total}</p> : null}
        </div>
      </div>
    </>
  )
}

export default App;