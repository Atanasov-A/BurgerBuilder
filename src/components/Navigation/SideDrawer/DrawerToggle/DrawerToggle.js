import "./DrawerToggle.css";
const DrawerToggle = (props) => {
  const { clicked } = props;
  return (
    <div onClick={clicked} className="DrawerToggle">
      <div />
      <div />
      <div />
    </div>
  );
};

export { DrawerToggle };
