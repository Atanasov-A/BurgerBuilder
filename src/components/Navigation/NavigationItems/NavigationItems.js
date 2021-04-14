import { NavigationItem } from "../NavigationItem/NavigationItem.js";

import "./NavigationItems.css";
const NavigationItems = (props) => {
  return (
    <ul className="NavigationItems">
      <NavigationItem link="/">BurgerBuilder</NavigationItem>
      <NavigationItem link="/orders">Orders</NavigationItem>
    </ul>
  );
};

export { NavigationItems };
