import PropTypes from "prop-types";

export default function MsgInput({ placeholder, icon, alt }) {
  return (
    <div className="input-send-btn-container">
      <input type="text" placeholder={placeholder} />

      <button className="send-btn">
        <img src={icon} alt={alt} />
      </button>
    </div>
  );
}

// Prop Validation

MsgInput.propTypes = {
  placeholder: PropTypes.string,
  icon: PropTypes.string,
  alt: PropTypes.string,
};
