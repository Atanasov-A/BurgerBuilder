import { useEffect, useState } from "react";
import { Burger } from "../../components/Burger/Burger";
import { BuildControls } from "../../components/Burger/BuildControls/BuildControls";
import { Modal } from "../../components/UI/Modal/Modal";
import { OrderSummary } from "../../components/Burger/OrderSummary/OrderSummary";
import { axiosInstance } from "../../axios-orders";
import { Spinner } from "../../components/UI/Spinner/Spinner";
import { WithAxiosErrorHandler } from "../../hoc/WithAxiosErrorHandler";
import { useHistory } from "react-router-dom";

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};

const _BurgerBuilder = (props) => {
  // const [ingredients, setIngredients] = useState({
  //   salad: 2,
  //   bacon: 1,
  //   cheese: 1,
  //   meat: 0,
  // });
  const [ingredients, setIngredients] = useState(null);
  const [totalPrice, setTotalPrice] = useState(4);
  const [purchasable, setPurchasable] = useState(true);
  // Check if I you are in a purchasable mode
  const [purchasing, setPurchasing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [err, setError] = useState(false);
  const history = useHistory();

  const updatePurchaseState = (myIngredients) => {
    // const myIngredients = { ...ingredients };
    const sum = Object.keys(myIngredients)
      .map((igKey) => {
        return myIngredients[igKey];
      })
      .reduce((sum, el) => sum + el, 0);

    setPurchasable(sum > 0);
  };

  useEffect(() => {
    axiosInstance
      .get(
        "https://react-burger-9045d-default-rtdb.firebaseio.com/ingredients.json"
      )
      .then((response) => {
        setIngredients(response.data);
      })
      .catch((err) => setError(true));
  }, []);

  const addIngredientHandler = (type) => {
    const oldCount = ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = { ...ingredients };
    updatedIngredients[type] = updatedCount;
    setIngredients(updatedIngredients);

    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = totalPrice;
    setTotalPrice(oldPrice + priceAddition);
    updatePurchaseState(updatedIngredients);
  };

  const removeIngredientHandler = (type) => {
    const oldCount = ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const updatedCount = oldCount - 1;
    const updatedIngredients = { ...ingredients };
    updatedIngredients[type] = updatedCount;
    setIngredients(updatedIngredients);

    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = totalPrice;
    setTotalPrice(oldPrice - priceDeduction);
    updatePurchaseState(updatedIngredients);
  };

  const purchaseHandler = () => {
    setPurchasing(true);
  };

  const purchaseCancelHandler = () => {
    setPurchasing(false);
  };

  const purchaseContinueHandler = () => {
    history.push("/checkout");
    const queryParams = [];
    for (let i in ingredients) {
      queryParams.push(
        encodeURIComponent(i) + "=" + encodeURIComponent(ingredients[i])
      );
    }

    queryParams.push('price=' + totalPrice);
    const queryString = queryParams.join("&");

    history.push({
      pathname: "/checkout",
      search: "?" + queryString,
    });

  };

  const disabledInfo = { ...ingredients };
  for (let key in disabledInfo) {
    disabledInfo[key] = disabledInfo[key] <= 0;
  }
  return (
    <>
      <Modal show={purchasing} modalClosed={purchaseCancelHandler}>
        {loading || !ingredients ? (
          err ? (
            <p>Ingredients can't be loaded</p>
          ) : (
            <Spinner />
          )
        ) : (
          <OrderSummary
            ingredients={ingredients}
            price={totalPrice}
            purchaseCancelled={purchaseCancelHandler}
            purchaseContinue={purchaseContinueHandler}
          />
        )}
      </Modal>
      {ingredients ? (
        <>
          <Burger ingredients={ingredients} />
          <BuildControls
            ingredientAdded={addIngredientHandler}
            ingredientRemoved={removeIngredientHandler}
            disabled={disabledInfo}
            purchasable={purchasable}
            ordered={purchaseHandler}
            price={totalPrice}
          />
        </>
      ) : err ? (
        <p>Ingredients can't be loaded</p>
      ) : (
        <Spinner />
      )}
    </>
  );
};
const BurgerBuilder = WithAxiosErrorHandler(_BurgerBuilder, axiosInstance);
export { BurgerBuilder };
