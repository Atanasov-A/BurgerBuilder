import "./Button.css";

const Button = (props) => {
  const { children, clicked, btnType } = props;
  const className = ["Button", btnType];

  return (
    <button className={className.join(" ")} onClick={clicked}>
      {children}
    </button>
  );
};
export { Button };
