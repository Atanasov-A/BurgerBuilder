export const Order = (props) => {
  const { price, ingredients } = props;

  const currentIngredients = [];

  for (let ingredientName in ingredients) {
    currentIngredients.push({
      name: ingredientName,
      amount: ingredients[ingredientName],
    });
  }

  const ingredientsOutput = currentIngredients.map((ig) => {
    return (
      <span
        key={ig.name}
        style={{
          textTransform: "capitalize",
          margin: "0 8px",
          border: "1px solid #ccc",
          padding: "5px",
          display: "inline-block",
        }}
      >
        {ig.name} ({ig.amount})
      </span>
    );
  });

  return (
    <div className="Order">
      <p>Ingredients: {ingredientsOutput}</p>
      <p>
        Price: <strong>USD {price.toFixed(2)}</strong>
      </p>
    </div>
  );
};
