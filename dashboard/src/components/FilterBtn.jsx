import PropTypes from "prop-types";

export default function FilterBtn({ buttonText, icon, alt }) {
  const filterBtnStyles = {
    width: "fit-content",
    height: "auto",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    columnGap: "0.375rem",
    padding: "0.75rem",
    borderRadius: "0.5rem",
    fontSize: "1.125rem",
    fontWeight: "400",
    color: "#848484",
    outline: "none",
    border: "0.75px solid #d7d7d7",
    backgroundColor: "#f8f8f8",
    cursor: "pointer",
  };

  return (
    <button style={filterBtnStyles}>
      {buttonText} <img src={icon} alt={alt} />
    </button>
  );
}

FilterBtn.propTypes = {
  buttonText: PropTypes.any.isRequired,
  icon: PropTypes.string,
  alt: PropTypes.string,
};
