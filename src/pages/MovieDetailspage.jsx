import { getMovieDatail } from "Api";
import { useState, useEffect } from "react";
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { Loader } from "components/Loader/Loader";
import { GenreList,MovieDetailsList, Button } from "./MovieDetailspage.styled";

const MovieDetailspage = ()=>{
const {movieId} = useParams();
const [movieInfo, setMovieInfo] = useState(null);
const [loading, setLoading] = useState(false);
const location = useLocation();

const BackLinkHref = location.state?.from ?? "/";

useEffect(() => {
      const onMovieDetails = async () => {
        setLoading(true);
        try {
          const movieDetails = await getMovieDatail(movieId);
          setMovieInfo(movieDetails);
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      };
      onMovieDetails();
    
}, [movieId]);

return (
    <div>
    <Link to={BackLinkHref}>
        <Button type="button">
          Go back
        </Button>
      </Link>
      {loading && <Loader />}
      {movieInfo && (
        <MovieDetailsList>
          <img
            width="300px"
            src={'https://image.tmdb.org/t/p/w500' + movieInfo.poster_path}
            alt={movieInfo.original_title}
          />
          <div>
            <h1>
              {movieInfo.title} ({movieInfo.release_date.slice(0, 4)})
            </h1>
            <p>Vote average: {(movieInfo.vote_average*100)/10}%</p>
            <h2>Overview</h2>
            <p>{movieInfo.overview}</p>
            <h2>Genres</h2>
            <GenreList>
              {movieInfo.genres.map(genre => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </GenreList>
          </div>
        </MovieDetailsList>
      )}
      <hr />
      <div>
        <h3>Additional information</h3>
        <ul>
          <li>
            <Link to={'cast'} state={{ from: location.state?.from }}>Cast</Link>
          </li>
          <li>
            <Link to={'reviews'} state={{ from: location.state?.from }}>Reviews</Link>
          </li>
        </ul>
        <hr />
        <Outlet />
      </div>
    </div>

)
};
export default MovieDetailspage;