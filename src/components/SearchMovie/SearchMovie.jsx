import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { SearchMovieList, Title} from './SearchMovie.styled';

const SearchMovie = ({films}) =>{
    const location = useLocation();
return (
    <SearchMovieList>
        {films && films.map(film=>(
         <li key={film.id}>
            <Link to={`/movies/${film.id}`} state={{ from: location }}>
            <img src={
                      film.poster_path
                        ? 'https://image.tmdb.org/t/p/w500' + film.poster_path
                        : 'https://via.placeholder.com/960x240'
                    }
                    alt="About movie"
                    width="250"
                    height="400"
                  />
              <Title>{film.title}</Title>
            </Link>
          </li>
        ))}  
    </SearchMovieList>
)
}

SearchMovie.propTypes = {
    films: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
      })
    ),
  };
  
  export default SearchMovie;