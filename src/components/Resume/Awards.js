import React from 'react';
import PropTypes from 'prop-types';

import Accomplishment from './Awards/Accomplishment';

const Awards = ({ data }) => (
  <div className="awards">
    <div className="link-to" id="awards" />
    <div className="title">
      <h3>Awards</h3>
    </div>
    {data.map((accomplishment) => (
      <Accomplishment
        data={accomplishment}
        key={accomplishment.title}
      />
    ))}
  </div>
);

Awards.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    link: PropTypes.string,
    daterange: PropTypes.string,
    points: PropTypes.arrayOf(PropTypes.string),
  })),
};

Awards.defaultProps = {
  data: [],
};

export default Awards;
