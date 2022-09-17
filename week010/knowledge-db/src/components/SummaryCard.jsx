import PropTypes from "prop-types";

export const SummaryCard = ({ title, count }) => {
  return (
    <div>
      <div className="stotal">
        <div>{title}</div>
        <div id="stotal">{count}</div>
      </div>
    </div>
  );
};

SummaryCard.propTypes = {
  title: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
};

export default SummaryCard;
