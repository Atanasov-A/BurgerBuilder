import "./Burger.css";
import { BurgerIngredients } from "./BurgerIngredients/BurgerIngredients.js";

const Burger = (props) => {
  const { ingredients } = props;

  let transformedIngredients = [];
  for (let key in ingredients) {
    for (let i = 0; i < ingredients[key]; i++) {
      transformedIngredients.push(
        <BurgerIngredients key={key + i} type={key} />
      );
    }
  }
  // Return only 1 empty array if no ingredients are added.
  transformedIngredients = transformedIngredients.flat();

  return (
    <div className="Burger">
      <BurgerIngredients type="bread-top" />
      {transformedIngredients.length === 0
        ? "Please start adding ingredients!"
        : transformedIngredients}
      <BurgerIngredients type="bread-bottom" />
    </div>
  );
};

export { Burger };
