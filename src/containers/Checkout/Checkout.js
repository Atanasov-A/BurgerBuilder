import {useEffect, useState} from "react";
import {
  Route,
  useHistory,
  useLocation,
  useRouteMatch,
} from "react-router-dom";
import {CheckoutSummary} from "../../components/Order/CheckoutSummary/CheckoutSummary";
import {ContactData} from "./ContactData/ContactData";

const Checkout = (props) => {
  const [ingredients, setIngredients] = useState({
    salad: 2,
    bacon: 1,
    cheese: 1,
    meat: 1,
  });
  const [totalPrice, setTotalPrice] = useState(0);
  const history = useHistory();
  const location = useLocation();
  const match = useRouteMatch();

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const ingredients = {};
    let price = 0;
    for (let param of query.entries()) {
      if (param[0] === 'price') {
        price = param[1];
      } else {
        // [cheese, 1]
        ingredients[param[0]] = +param[1];
      }

    }
    setIngredients(ingredients);
    setTotalPrice(price);
  }, []);

  const checkoutContinuedHandler = () => {
    history.replace("/checkout/contact-data");
  };
  const checkoutCancelledHandler = () => {
    history.goBack();
  };

  return (
    <div>
      <CheckoutSummary
        ingredients={ingredients}
        checkoutContinued={checkoutContinuedHandler}
        checkoutCancelled={checkoutCancelledHandler}
      />
      <Route path={match.path + "/contact-data"}
        render={() => <ContactData ingredients={ingredients} price={totalPrice} />} />
    </div>
  );
};

export {Checkout};
