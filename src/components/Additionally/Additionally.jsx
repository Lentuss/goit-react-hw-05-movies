import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const Additionally = ({ backPath }) => {
  return (
    <ul>
      <li>
        <Link to="cast" state={{ from: backPath }}>
          Cast
        </Link>
      </li>
      <li>
        <Link to="reviews" state={{ from: backPath }}>
          Reviews
        </Link>
      </li>
    </ul>
  );
};

Additionally.propTypes = {
  backPath: PropTypes.any.isRequired,
};
