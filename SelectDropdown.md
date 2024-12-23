import PropTypes from "prop-types";

export default function SelectDropdown({ name, options }) {
  return (
    <select name={name}>
      {options.map((option, index) => (
        <option value={option.value} key={index}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

SelectDropdown.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
};
