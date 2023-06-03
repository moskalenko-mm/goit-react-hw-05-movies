import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchReviews } from 'services/moviesApi';
import { Container } from 'components/App.styled';
import Loader from 'components/Loader/Loader';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchReviews(movieId)
      .then(setReviews)
      .finally(() => {
        setIsLoading(false);
      });
  }, [movieId]);

  if (!reviews || reviews.length === 0) {
    return <p>Sorry, this movie have no reviews</p>;
  }
  return (
    <Container>
      <ul>
        {reviews.map(review => (
          <li key={review.id}>
            <h3>Author: {review.author}</h3>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
      {isLoading && <Loader />}
    </Container>
  );
};

export default Reviews;
