import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import {getMovieCredits} from "Api";
import {Loader} from "components/Loader/Loader";
import {CastList} from "./Cast.styled";


const Cast = () =>{
const {movieId} = useParams();
const [actors, setActors] = useState([]);
const [loading, setLoading] = useState(false);


useEffect(() => {
  const onActorsOfMovie = async () => {
    setLoading(true);
    try {
      const actors = await getMovieCredits(movieId);
      setActors(actors);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  onActorsOfMovie();
}, [movieId]);

  return (
    <div>
      {loading && <Loader />}
      <CastList>
        {actors.map(actor => (
          <li key={actor.id}>
            <img
              width="200px"
              height="350px"
              src={actor.profile_path
                ? 'https://image.tmdb.org/t/p/w500' + actor.profile_path 
                : 'https://via.placeholder.com/960x240'  
              }
              alt={actor.original_name}
            />
            <p>{actor.name}</p>
            <p>Character: {actor.character}</p>
          </li>
        ))}
      </CastList>
    </div>
  );
};

export default Cast;