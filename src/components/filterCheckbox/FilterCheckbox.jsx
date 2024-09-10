import React, { useState } from "react";

function FilterCheckbox({ option, onFilterChange }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    onFilterChange(option._id, isChecked);
  };

  return (
    <div className="filter-checkbox">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <label>{option.title}</label>
    </div>
  );
}

export default FilterCheckbox;
