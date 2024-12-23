import PropTypes from "prop-types";

export default function TransactionHistory({ amount, date, containerBorderStyles }) {
  const transactionHistoryContainerStyles = {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1.5rem",
    borderLeft: "2px solid #00B658",
  };

  const amountDateContainerStyles = {
    width: "fit-content",
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "start",
    rowGap: "0.13rem",
  };

  const amountStyles = {
    fontSize: "1.25rem",
    fontWeight: "500",
    lineHeight: "1.5rem",
    color: "#020202",
  };

  const dateStyles = {
    fontSize: "1rem",
    fontWeight: "300",
    lineHeight: "1.25rem",
    color: "#868686",
    cursor: "pointer",
  };

  return (
    <div style={{ ...transactionHistoryContainerStyles, ...containerBorderStyles }}>
      <div style={amountDateContainerStyles}>
        <h3 style={amountStyles}>{amount}</h3>
        <p style={dateStyles}>{date}</p>
      </div>

      <div>
        <p style={dateStyles}>See Detail</p>
      </div>
    </div>
  );
}

// Prop validation
TransactionHistory.propTypes = {
  amount: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  containerBorderStyles: PropTypes.object,
};
