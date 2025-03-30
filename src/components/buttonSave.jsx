import React from "react";

const ButtonSave = () => {
  return (
    <button className="btn btn-light" type="button" disabled>
      <span
        className="spinner-border spinner-border-sm me-1"
        role="status"
        aria-hidden="true"
      ></span>
      Editando...
    </button>
  );
};

export default ButtonSave;
