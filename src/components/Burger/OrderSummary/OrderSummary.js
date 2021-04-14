import { Button } from "../../UI/Button/Button";

const OrderSummary = (props) => {
  const { ingredients, purchaseCancelled, purchaseContinue, price } = props;
  const ingredientSummary = Object.keys(ingredients).map((igKey) => (
    <li key={igKey}>
      <span style={{ textTransform: "capitalize" }}>{igKey}</span>:
      {ingredients[igKey]}
    </li>
  ));
  return (
    <>
      <h3>Your order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>
        <strong>Total price: {price.toFixed(2)}</strong>
      </p>
      <p>Continue to checkout?</p>
      <Button btnType={"Danger"} clicked={purchaseCancelled}>
        CANCEL
      </Button>
      <Button btnType={"Success"} clicked={purchaseContinue}>
        CONTINUE
      </Button>
    </>
  );
};

export { OrderSummary };
