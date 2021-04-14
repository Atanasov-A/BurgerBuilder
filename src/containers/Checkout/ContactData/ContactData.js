import { useRef, useState } from "react";
import "./ContactData.css";

import { Button } from "../../../components/UI/Button/Button";
import { axiosInstance } from "../../../axios-orders";
import { Spinner } from "../../../components/UI/Spinner/Spinner";
import { useHistory } from "react-router";
const ContactData = (props) => {
  const { ingredients, price } = props;

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [street, setStreet] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const orderHandler = (event) => {
    event.preventDefault();
    console.log(ingredients);
    setLoading(true);
    const order = {
      ingredients: ingredients,
      price: price,
      customer: {
        name: userName,
        address: {
          street: street,
          zipCode: postalCode,
          country: "DE",
        },
        email: email,
        deliveryMethod: "fastest",
      },
    };

    axiosInstance
      .post("/orders.json", order)
      .then((response) => {
        setUserName("");
        setStreet("");
        setEmail("");
        setPostalCode("");
        setLoading(false);
        history.push("/");
      })
      .catch((err) => {
        setLoading(false);
      });
  };

  return (
    <div className="ContactData">
      <h4>Enter your contact data</h4>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <form onSubmit={() => console.log("submitted")}>
            <input
              type="text"
              name="username"
              placeholder="Your username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <input
              type="text"
              name="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              name="street"
              placeholder="Your street"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
            />
            <input
              type="text"
              name="postalCode"
              placeholder="Your postal code"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
            />
          </form>
          <Button btnType="Success" clicked={orderHandler}>
            ORDER
          </Button>
        </>
      )}
    </div>
  );
};

export { ContactData };
