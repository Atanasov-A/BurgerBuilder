import { Burger } from "../../Burger/Burger";
import { Button } from "../../UI/Button/Button";
import "./CheckoutSummary.css";

const CheckoutSummary = (props) => {
  const { ingredients, checkoutCancelled, checkoutContinued } = props;
  return (
    <div className={"CheckoutSummary"}>
      <h1>We hope it taste well</h1>
      <div style={{ width: "100%", margin: "auto" }}>
        <Burger ingredients={ingredients} />
      </div>
      <Button btnType="Danger" clicked={checkoutCancelled}>
        CANCEL
      </Button>
      <Button btnType="Success" clicked={checkoutContinued}>
        CONTINUE
      </Button>
    </div>
  );
};

export { CheckoutSummary };
