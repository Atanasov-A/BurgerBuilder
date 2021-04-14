import "./BurgerIngredients.css";
import PropTypes from "prop-types";
import { ingredientsView } from "./utils/utils";

const BurgerIngredients = (props) => {
  const { type } = props;

  const ingredient = ingredientsView(type);
  return ingredient;
};

BurgerIngredients.propTypes = {
  type: PropTypes.string.isRequired,
};

export { BurgerIngredients };
