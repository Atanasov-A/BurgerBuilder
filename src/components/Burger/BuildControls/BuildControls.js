import { BuildControl } from "./BuildControl/BuildControl";
import "./BuildControls.css";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

const BuildControls = (props) => {
  const {
    ingredientAdded,
    ingredientRemoved,
    disabled,
    price,
    purchasable,
    ordered,
  } = props;
  return (
    <div className="BuildControls">
      <p>
        Current price: <strong>{price.toFixed(2)}</strong>
      </p>
      {controls.map((control) => (
        <BuildControl
          key={control.label}
          label={control.label}
          added={() => ingredientAdded(control.type)}
          removed={() => ingredientRemoved(control.type)}
          disabled={disabled[control.type]}
        />
      ))}

      <button className="OrderButton" disabled={!purchasable} onClick={ordered}>
        ORDER NOW
      </button>
    </div>
  );
};

export { BuildControls };
