import React from 'react';

const Select = ({ options, style }) => {
  return (
    <select style={style}>
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
