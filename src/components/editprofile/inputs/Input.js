import React from "react";
import "./Input.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Input(props) {
  return (
    <div className="inputs">
      <label>
        <strong>{props.label}</strong>
      </label>
      <input
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        className="form-control"
        placeholder={props.placeholder}
      />
    </div>
  );
}

export default Input;
