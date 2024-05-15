import React, { useState } from "react";

const Checkbox = ({ isChecked, onChange }) => {
  const [checked, setChecked] = useState(isChecked);

  const handleCheckboxChange = () => {
    setChecked(!checked);
    onChange(!checked);
  };

  return (
    <input
      type="checkbox"
      checked={checked}
      onChange={handleCheckboxChange}
    />
  );
};

export default Checkbox;


