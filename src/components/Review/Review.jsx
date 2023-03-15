import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Loader } from 'components/Loader/Loader';
import { getMovieReviews } from 'Api';

const Review = () =>{
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(false);
  
    useEffect(() => {
      const onActorsOfMovie = async () => {
        setLoading(true);
        try {
          const reviews = await getMovieReviews(movieId);
          setReviews(reviews);
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      };
      onActorsOfMovie();
    }, [movieId]);
  
    return (
      <>
        {loading && <Loader />}
        {reviews.length !== 0 && (
          <div>
            <ul>
              {reviews.map(review => (
                <li key={review.id}>
                  <h2>Author: {review.author}</h2>
                  <p>{review.content}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
        {reviews.length === 0 && (
          <div>There is not any reviews for this movie</div>
        )}
      </>
    );
};
export default Review;