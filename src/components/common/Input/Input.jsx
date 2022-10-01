import React from "react";

function Input({ id, label, type, placeholder, handleChange, message }) {
  return (
    <div class="form-control mr-4">
      <label form={id}>{label}</label>
      <input
        className="form-control"
        type={type}
        id={id}
        name={id}
        placeholder={placeholder}
        onChange={handleChange}
      />
      {message?.length > 0 && <small>{message}</small>}
    </div>
  );
}

export default Input;
