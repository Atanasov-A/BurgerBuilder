import burgerLogo from "../../assets/images/burger-logo.png";
const Logo = (props) => {
  const { height } = props;
  return (
    <div
      style={{
        backgroundColor: "white",
        padding: "8px",
        height: height || "100%",
        boxSizing: "border-box",
        borderRadius: "10px",
      }}
    >
      <img style={{ height: "100%" }} src={burgerLogo} alt="burger" />
    </div>
  );
};

export { Logo };
