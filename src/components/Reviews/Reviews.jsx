import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Notify } from 'notiflix';
import { getReviews } from 'services/API';
import { ReviewsList, AuthorName } from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviewsData, setReviewsData] = useState([]);

  useEffect(() => {
    if (!movieId) {
      return;
    }
    const getData = async movieId => {
      try {
        const resp = await getReviews(movieId);
        setReviewsData([...resp.results]);
      } catch (error) {
        Notify.error('Something went wrong');
      }
    };
    getData(movieId);
  }, [movieId]);

  return (
    <ReviewsList>
      {reviewsData.length !== 0 ? (
        reviewsData.map(r => (
          <li key={r.id}>
            <AuthorName>Author: {r.author}</AuthorName>
            <p>{r.content}</p>
          </li>
        ))
      ) : (
        <li>No reviews yet</li>
      )}
    </ReviewsList>
  );
};

export default Reviews;
