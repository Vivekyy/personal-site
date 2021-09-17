import React from 'react';
import PropTypes from 'prop-types';

const Accomplishment = ({ data }) => (
  <article className="accomplishments-container">
    <header>
      <h4><a href={data.link}>{data.title}</a> </h4>
      <p className="daterange"> {data.daterange}</p>
    </header>
    <ul className="points">
      {data.points.map((point) => (
        <li key={point}>{point}</li>
      ))}
    </ul>
  </article>
);

Accomplishment.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string,
    daterange: PropTypes.string.isRequired,
    points: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default Accomplishment;
