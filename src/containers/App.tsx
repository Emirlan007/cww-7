import './App.css';
import type {Ingredient, SelectedIngredient} from "../types";
import {useState} from "react";
import burgerImage from "../assets/Burger.jpg";
import glassImage from "../assets/Glass.webp";
import friesImage from "../assets/Fries.webp";
import colaImage from "../assets/Cola.jpeg";
import IngredientButton from "../components/IngredientButton/IngredientButton.tsx";
import OrderDetails from "../components/OrderDetails  /OrderDetails.tsx";

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

  return (
    <>
      <div className="main-container">

        <div className="add-items">
          <h3>Add Items</h3>
          <IngredientButton ingredients={INGREDIENTS} onAdd={addIngredient}/>
        </div>
        <OrderDetails
            ingredients={ingredients}
            deleteIngredient={deleteIngredient}
            total={total}
        />
      </div>
    </>
  );
};

export default App;