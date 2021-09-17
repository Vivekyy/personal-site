import React from 'react';
import PropTypes from 'prop-types';

const Language = ({ data }) => (
  <li className="language-container">
    <h4 className="language-name">{data.name}:</h4>
    <p className="language-fluency">{data.fluency}</p>
  </li>
);

Language.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    fluency: PropTypes.string.isRequired,
  }).isRequired,
};

Language.defaultProps = {
};

export default Language;
