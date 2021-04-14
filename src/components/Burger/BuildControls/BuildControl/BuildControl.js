import "./BuildControl.css";

const BuildControl = (props) => {
  const { label, added, removed, disabled } = props;
  return (
    <div className={"BuildControl"}>
      <div className={"BuildControl_Label"}>{label}</div>
      <button className={"Less"} onClick={removed} disabled={disabled}>
        Less
      </button>
      <button className={"More"} onClick={added}>
        More
      </button>
    </div>
  );
};

export { BuildControl };
