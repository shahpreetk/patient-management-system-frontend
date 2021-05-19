import React, { useState } from "react";

const CustomDropdown = (label, defaultstate, options) => {
  const [dropdownState, setDropdownState] = useState(defaultstate);

  const Dropdownmaker = () => (
    <select
      id={label}
      value={dropdownState}
      onChange={(e) => setDropdownState(e.target.value)}
      onBlur={(e) => setDropdownState(e.target.value)}
      disabled={!options.length}
    >
      {options.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
  return [dropdownState, Dropdownmaker, setDropdownState];
};

export default CustomDropdown;
