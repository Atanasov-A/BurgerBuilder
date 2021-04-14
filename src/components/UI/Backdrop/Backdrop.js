import "./Backdrop.css";

const Backdrop = (props) => {
  const { show, clicked } = props;

  return show ? <div className="Backdrop" onClick={clicked}></div> : null;
};

export { Backdrop };
