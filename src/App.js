import "./App.css";
import { BurgerBuilder } from "./containers/BurgerBuilder/BurgerBuilder";
import { Layout } from "./containers/Layout/Layout";
import { Checkout } from "./containers/Checkout/Checkout";
import { Route, Switch } from "react-router-dom";
import { Orders } from "./containers/Orders/Orders";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/checkout">
          <Checkout />
        </Route>
        <Route path="/orders">
          <Orders />
        </Route>
        <Route path="/" exact>
          <BurgerBuilder />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
