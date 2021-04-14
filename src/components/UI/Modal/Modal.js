import "./Modal.css";
import { Backdrop } from "../Backdrop/Backdrop";
import { memo } from "react";

const Modal = memo((props) => {
  const { children, show, modalClosed } = props;
  return (
    <>
      <Backdrop show={show} clicked={modalClosed} />
      <div
        className="Modal"
        style={{
          transform: show ? "translateY(0)" : "translateY(-100vh)",
          opacity: show ? "1" : "0",
        }}
      >
        {children}
      </div>
    </>
  );
});

export { Modal };
