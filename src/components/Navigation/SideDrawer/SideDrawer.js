import { Logo } from "../../Logo/Logo";
import { NavigationItems } from "../NavigationItems/NavigationItems";
import { Backdrop } from "../../UI/Backdrop/Backdrop";
import "./SideDrawer.css";

const SideDrawer = (props) => {
  const { closed, open } = props;
  const attachedClasses = open ? "SideDrawer_Open" : "SideDrawer_Close";
  return (
    <>
      <Backdrop show={open} clicked={closed} />
      <div className={`SideDrawer ${attachedClasses}`}>
        <Logo height="11%" />
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </>
  );
};

export { SideDrawer };
