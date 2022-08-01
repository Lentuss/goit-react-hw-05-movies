import React from 'react';
import { Link } from 'react-router-dom';

export const Additionally = () => {
  return (
    <ul>
      <li>
        <Link to="cast">Cast</Link>
      </li>
      <li>
        <Link to="reviews">Reviews</Link>
      </li>
    </ul>
  );
};
