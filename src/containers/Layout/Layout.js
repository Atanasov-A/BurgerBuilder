import "./Layout.css";
import { Toolbar } from "../../components/Navigation/Toolbar/Toolbar";
import { SideDrawer } from "../../components/Navigation/SideDrawer/SideDrawer";
import { useState } from "react";

const Layout = (props) => {
  const { children } = props;

  const [showSideDrawer, setShowSideDrawer] = useState(false);
  const sideDrawerCloseHandler = () => setShowSideDrawer(false);
  const sideDrawerToggleHandler = () => setShowSideDrawer(!showSideDrawer);

  return (
    <>
      <Toolbar drawerToggleClicked={sideDrawerToggleHandler} />
      <SideDrawer open={showSideDrawer} closed={sideDrawerCloseHandler} />
      <main>{children}</main>
    </>
  );
};

export { Layout };
