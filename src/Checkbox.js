const Checkbox = ({ isChecked, onChange }) => {

  const handleCheckboxChange = () => {
    onChange(!isChecked);
  };

  return (
    <input
      type="checkbox"
      checked={isChecked}
      onChange={handleCheckboxChange}
    />
  );
};

export default Checkbox;


