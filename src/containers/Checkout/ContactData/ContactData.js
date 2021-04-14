import {useState} from "react";
import "./ContactData.css";

import {Button} from "../../../components/UI/Button/Button";
import {axiosInstance} from "../../../axios-orders";
import {Spinner} from "../../../components/UI/Spinner/Spinner";
import {useHistory} from "react-router";
const ContactData = (props) => {
  const {ingredients, price} = props;

  const [userName, setUserName] = useState();
  const [email, setEmail] = useState();
  const [street, setStreet] = useState();
  const [postalCode, setPostalCode] = useState();
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
        name: "My name",
        address: {
          street: "My street",
          zipCode: 666,
          country: "DE",
        },
        email: "my@mymail.com",
        deliveryMethod: "fastest",
      },
    };
    axiosInstance
      .post("/orders.json", order)
      .then((response) => {
        setLoading(false);
        history.push('/');
      })
      .catch((err) => {
        setLoading(false);
      });
  };

  return (
    <div className="ContactData">
      <h4>Enter your contact data</h4>
      { loading ? <Spinner /> :
        <form>
          <input type="text" name="username" placeholder="Your username" />
          <input type="text" name="email" placeholder="Your email" />
          <input type="text" name="street" placeholder="Your street" />
          <input type="text" name="postalCode" placeholder="Your postal code" />
          <Button btnType="Success" clicked={orderHandler}>
            ORDER
        </Button>
        </form>
      }
    </div>
  );
};

export {ContactData};
