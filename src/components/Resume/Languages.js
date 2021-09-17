import React from 'react';
import PropTypes from 'prop-types';

import Language from './Languages/Language';

const Languages = ({ data }) => (
  <div className="languages">
    <div className="link-to" id="languages" />
    <div className="title">
      <h3>Languages</h3>
    </div>
    <ul className="language-list">
      {data.map((language) => (
        <Language
          data={language}
          key={language.name}
        />
      ))}
    </ul>
  </div>
);

Languages.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    fluency: PropTypes.string,
  })),
};

Languages.defaultProps = {
  data: [],
};

export default Languages;
