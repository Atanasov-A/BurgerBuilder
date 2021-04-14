export const ingredientsView = (ingredient) => {
  const ingredientsMap = new Map();

  ingredientsMap.set(
    "bread-bottom",
    <div className="BurgerIngredients_BreadBottom"></div>
  );
  ingredientsMap.set(
    "bread-top",
    <div className="BurgerIngredients_BreadTop">
      <div className="BurgerIngredients_Seeds1"></div>
      <div className="BurgerIngredients_Seeds2"></div>
    </div>
  );
  ingredientsMap.set("meat", <div className="BurgerIngredients_Meat"></div>);
  ingredientsMap.set(
    "cheese",
    <div className="BurgerIngredients_Cheese"></div>
  );
  ingredientsMap.set("salad", <div className="BurgerIngredients_Salad"></div>);
  ingredientsMap.set("bacon", <div className="BurgerIngredients_Bacon"></div>);

  return ingredientsMap.get(ingredient) || null;
};
