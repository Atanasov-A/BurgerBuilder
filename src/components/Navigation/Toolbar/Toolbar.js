import "./Toolbar.css";
import { Logo } from "../../Logo/Logo";
import { NavigationItems } from "../NavigationItems/NavigationItems";
import { DrawerToggle } from "../SideDrawer/DrawerToggle/DrawerToggle";

const Toolbar = (props) => {
  const { drawerToggleClicked } = props;
  return (
    <header className="Toolbar">
      <DrawerToggle clicked={drawerToggleClicked} />
      <Logo height="80%" />
      <nav className="DesktopOnly">
        <NavigationItems />
      </nav>
    </header>
  );
};

export { Toolbar };
