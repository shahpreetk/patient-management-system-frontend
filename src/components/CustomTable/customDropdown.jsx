import React, { useState } from "react";

const CustomDropdown = (label, defaultstate, options) => {
  const [dropdownState, setDropdownState] = useState(defaultstate);
  const Dropdownmaker = () => (
    <>
      <select
        className="inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-800"
        id={label}
        value={dropdownState}
        onChange={(e) => setDropdownState(e.target.value)}
        onBlur={(e) => setDropdownState(e.target.value)}
        disabled={!options.length}
      >
        {options.map((item) => (
          <option className="bg-white text-gray-900 px-4 py-2 text-sm" key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </>
  );
  return [dropdownState, Dropdownmaker, setDropdownState];
};

export default CustomDropdown;
