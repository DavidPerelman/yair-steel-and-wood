import React from "react";

const Checkbox = ({ id, label, updateFilters }) => {
  return (
    <label>
      <input type="checkbox" value={id} onChange={(e) => updateFilters(e)} />
      <span>{label}</span>
    </label>
  );
};

export default Checkbox;
