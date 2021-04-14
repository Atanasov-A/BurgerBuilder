import { NavLink } from "react-router-dom";
import "./NavigationItem.css";
const NavigationItem = (props) => {
  const { link, children } = props;
  return (
    <li className="NavigationItem">
      <NavLink to={link} exact>
        {children}
      </NavLink>
    </li>
  );
};

export { NavigationItem };
