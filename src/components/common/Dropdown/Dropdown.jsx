import React from "react";

function Dropdown({ handleChange, labelName }) {
  const types = ["Grass", "Bug", "Fire", "Normal", "Water"];
  return (
    <div class="form-control">
      <label class="form-check-label">{labelName}</label>
      <select
        class="form-select"
        aria-label="Default select example"
        onChange={(e) => handleChange(e)}
      >
        <option>Select Type</option>
        {types?.map((item) => {
          return <option>{item}</option>;
        })}
      </select>
    </div>
  );
}

export default Dropdown;
