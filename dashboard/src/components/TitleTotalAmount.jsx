// import SelectDropdown from "./selectDropdown";
import PropTypes from "prop-types";
export default function TitleTotalAmount({ title, amount, selectOptions, amountStyles }) {
  const titleAmountContainerStyles = {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1.5rem",
    backgroundColor: "#fafafa",
    borderRadius: "1rem",
  };

  const titleStyles = {
    fontSize: "2rem",
    fontWeight: "300",
    lineHeight: "3rem",
    color: "#565656",
  };

  const amountCurrencyContainerStyles = {
    width: "fit-content",
    display: "flex",
    flexDirection: "row",
    justifyContent: "start",
    alignItems: "center",
    columnGap: "0.35rem",
  };

  const defaultAmountStyles = {
    fontSize: "2rem",
    fontWeight: "300",
    lineHeight: "3rem",
    color: "#00b600",
  };

  return (
    <div style={titleAmountContainerStyles} className="title-total-amount-container">
      <h1 style={titleStyles}>{title}</h1>

      <div style={amountCurrencyContainerStyles}>
        <h2 style={{ ...defaultAmountStyles, ...amountStyles }}>{amount}</h2>
        {selectOptions}
      </div>
    </div>
  );
}

// Prop validation
TitleTotalAmount.propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.any.isRequired,
  selectOptions: PropTypes.element.isRequired,
  amountStyle: PropTypes.object,
};
